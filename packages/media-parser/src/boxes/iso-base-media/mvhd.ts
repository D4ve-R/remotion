import type {BufferIterator} from '../../buffer-iterator';
import {getArrayBufferIterator} from '../../buffer-iterator';
import type {BaseBox} from './base-type';
import {toUnixTimestamp} from './to-date';

export type ThreeDMatrix = [
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
];

export interface MvhdBox extends BaseBox {
	durationInUnits: number;
	durationInSeconds: number;
	creationTime: number | null;
	modificationTime: number | null;
	timeScale: number;
	rate: number;
	volume: number;
	matrix: ThreeDMatrix;
	nextTrackId: number;
	type: 'mvhd-box';
}

export const parseMvhd = ({
	iterator,
	offset,
	size,
}: {
	iterator: BufferIterator;
	offset: number;
	size: number;
}): MvhdBox => {
	const version = iterator.getUint8();
	if (version !== 0) {
		throw new Error(`Unsupported MVHD version ${version}`);
	}

	if (size !== 108) {
		throw new Error(`Expected mvhd size of version 0 to be 108, got ${size}`);
	}

	// Flags, we discard them
	iterator.discard(3);

	const creationTime = iterator.getUint32();

	const modificationTime = iterator.getUint32();

	const timeScale = iterator.getUint32();

	const durationInUnits = iterator.getUint32();
	const durationInSeconds = durationInUnits / timeScale;

	const rateArray = iterator.getSlice(4);
	const rateView = getArrayBufferIterator(rateArray, rateArray.length);
	const rate =
		rateView.getInt8() * 10 +
		rateView.getInt8() +
		rateView.getInt8() * 0.1 +
		rateView.getInt8() * 0.01;

	const volumeArray = iterator.getSlice(2);
	const volumeView = getArrayBufferIterator(volumeArray, volumeArray.length);

	const volume = volumeView.getInt8() + volumeView.getInt8() * 0.1;

	// reserved 16bit
	iterator.discard(2);

	// reserved 32bit x2
	iterator.discard(4);
	iterator.discard(4);

	// matrix
	const matrix: number[] = [];
	for (let i = 0; i < 9; i++) {
		if (i % 3 === 2) {
			matrix.push(iterator.getFixedPointSigned230Number());
		} else {
			matrix.push(iterator.getFixedPointSigned1616Number());
		}
	}

	// pre-defined
	iterator.discard(4 * 6);

	// next track id
	const nextTrackId = iterator.getUint32();

	volumeView.destroy();

	return {
		creationTime: toUnixTimestamp(creationTime),
		modificationTime: toUnixTimestamp(modificationTime),
		timeScale,
		durationInUnits,
		durationInSeconds,
		rate,
		volume,
		matrix: matrix as ThreeDMatrix,
		nextTrackId,
		type: 'mvhd-box',
		boxSize: size,
		offset,
	};
};
