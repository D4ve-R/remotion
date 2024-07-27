import {REMOTION_BUCKET_PREFIX} from './constants';

export const validateBucketName = (
	bucketName: unknown,
	options: {
		mustStartWithRemotion: boolean;
	},
) => {
	if (typeof bucketName !== 'string') {
		throw new TypeError(
			`'bucketName' must be a string, but is ${JSON.stringify(bucketName)}`,
		);
	}

	if (
		options.mustStartWithRemotion &&
		!bucketName.startsWith(REMOTION_BUCKET_PREFIX)
	) {
		throw new Error(
			`The bucketName parameter must start with ${REMOTION_BUCKET_PREFIX}.`,
		);
	}

	if (
		!bucketName.match(
			/^(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])$)/,
		)
	) {
		throw new Error(`The bucket ${bucketName} `);
	}
};
