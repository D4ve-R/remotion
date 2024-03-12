import {exec, execSync} from 'node:child_process';
import fs, {existsSync} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import util from 'node:util';
import type {WhisperModel} from './download-whisper-model';

type Timestamps = {
	from: string;
	to: string;
};

type Offsets = {
	from: number;
	to: number;
};

type TranscriptionItem = {
	timestamps: Timestamps;
	offsets: Offsets;
	text: string;
};

type Model = {
	type: string;
	multilingual: boolean;
	vocab: number;
	audio: {
		ctx: number;
		state: number;
		head: number;
		layer: number;
	};
	text: {
		ctx: number;
		state: number;
		head: number;
		layer: number;
	};
	mels: number;
	ftype: number;
};

type Params = {
	model: string;
	language: string;
	translate: boolean;
};

type Result = {
	language: string;
};

export type TranscriptionJson = {
	systeminfo: string;
	model: Model;
	params: Params;
	result: Result;
	transcription: TranscriptionItem[];
};

const cleanUpTmpFiles = (tmpJSONPath: string, tmpWaveFilePath: string) => {
	fs.unlink(tmpJSONPath + '.json', (err) => {
		if (err) {
			console.error('Error while deleting a file: ', err);
		}
	});

	fs.unlink(tmpWaveFilePath, (err) => {
		if (err) {
			console.error('Error while deleting a file: ', err);
		}
	});
};

const extractToTempAudioFile = (
	fileToTranscribe: string,
	tempOutFile: string,
) => {
	// Extracting audio from mp4 and save it as 16khz wav file
	execSync(
		`npx remotion ffmpeg -i ${fileToTranscribe} -ar 16000 ${tempOutFile} -y`,
		{stdio: 'inherit'},
	);
};

const readJson = async (jsonPath: string) => {
	const data = await fs.promises.readFile(jsonPath, 'utf8');
	const jsonData = await JSON.parse(data);
	return jsonData;
};

const transcribeToTempJSON = async (
	fileToTranscribe: string,
	whisperPath: string,
	model: WhisperModel,
	tmpJSONPath: string,
	modelFolder: string | null,
) => {
	const promisifiedExec = util.promisify(exec);

	const modelExecutableName = `ggml-${model}.bin`;
	const defaultModelPath = path.join(
		whisperPath,
		'models',
		modelExecutableName,
	);

	const modelPath = modelFolder
		? path.join(modelFolder, modelExecutableName)
		: defaultModelPath;

	if (!fs.existsSync(modelPath)) {
		throw new Error(
			`Error: Model ${model} does not exist at ${
				modelFolder ? modelFolder : defaultModelPath
			}. Check out the downloadWhisperMode() API at https://www.remotion.dev/docs/install-whisper-cpp/download-whisper-model to see how to install whisper models`,
		);
	}

	const executable =
		os.platform() === 'win32'
			? path.join(whisperPath, 'main.exe')
			: path.join(whisperPath, './main');

	await promisifiedExec(
		`${executable} -f ${fileToTranscribe} --output-file ${tmpJSONPath} --output-json --max-len 1 -m ${modelPath}`,
		{cwd: whisperPath},
	);
};

export const transcribe = async ({
	filePath,
	whisperPath,
	model = 'base.en',
	modelFolder,
}: {
	filePath: string;
	whisperPath: string;
	model?: WhisperModel;
	modelFolder?: string;
}): Promise<{transcription: TranscriptionJson}> => {
	if (!existsSync(whisperPath)) {
		throw new Error(
			`Whisper does not exist at ${whisperPath}. Double-check the passed whisperPath. If you havent installed whisper, check out the installWhisperCpp() API at https://www.remotion.dev/docs/install-whisper-cpp/install-whisper-cpp to see how to install whisper programatically.`,
		);
	}

	if (!existsSync(filePath)) {
		throw new Error(`Input file does not exist at ${filePath}`);
	}

	const tmpWaveFilePath = path.join(process.cwd(), 'tmp.wav');
	const tmpJSONPath = path.join(process.cwd(), 'tmp');
	extractToTempAudioFile(filePath, tmpWaveFilePath);

	await transcribeToTempJSON(
		tmpWaveFilePath,
		whisperPath,
		model,
		tmpJSONPath,
		modelFolder ?? null,
	);

	const json = await readJson(tmpJSONPath + '.json');

	cleanUpTmpFiles(tmpJSONPath, tmpWaveFilePath);

	return Promise.resolve({transcription: json});
};
