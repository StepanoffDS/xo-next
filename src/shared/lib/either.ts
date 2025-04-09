type Left<L> = {
	type: 'error';
	error: L;
};

type Right<R> = {
	type: 'success';
	value: R;
};

export type Either<L, R> = Left<L> | Right<R>;

export const left = <L>(error: L): Either<L, never> => ({
	type: 'error',
	error,
});

export const right = <R>(value: R): Either<never, R> => ({
	type: 'success',
	value,
});

export const mapRight = <R, R2, L = unknown>(
	either: Either<L, R>,
	fn: (value: R) => R2,
): Either<L, R2> => {
	if (either.type === 'success') {
		return right(fn(either.value));
	}

	return either;
};
export const mapLeft = <R, L, L2>(
	either: Either<L, R>,
	fn: (value: L) => L2,
): Either<L2, R> => {
	if (either.type === 'error') {
		return left(fn(either.error));
	}

	return either;
};

export const matchEither = <L, R, V>(
	either: Either<L, R>,
	matchers: {
		left: (error: NoInfer<L>) => V;
		right: (value: NoInfer<R>) => V;
	},
): V => {
	if (either.type === 'error') {
		return matchers.left(either.error);
	}

	return matchers.right(either.value);
};
