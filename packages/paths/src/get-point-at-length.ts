import {construct} from './helpers/construct';
import {getInstructionIndexAtLength} from './helpers/get-part-at-length';

/**
 * @description Gets the coordinates of a point which is on an SVG path.
 * @param {string} path A valid SVG path
 * @param {number} length The length at which the point should be sampled
 * @see [Documentation](https://remotion.dev/docs/paths/get-point-at-length)
 */
export const getPointAtLength = (path: string, length: number) => {
	const constructed = construct(path);
	const fractionPart = getInstructionIndexAtLength(constructed, length);
	const functionAtPart = constructed.functions[fractionPart.index];

	if (functionAtPart) {
		return functionAtPart.getPointAtLength(fractionPart.fraction);
	}

	if (constructed.initialPoint) {
		return constructed.initialPoint;
	}

	throw new Error('Wrong function at this part.');
};
