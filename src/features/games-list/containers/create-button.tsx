'use client';

import { useActionState } from '@/shared/lib/react';
import { Button } from '@/shared/ui/button';
import { mapLeft, right } from '@/shared/lib/either';

import { createGameAction } from '../actions/create-game';
import { startTransition } from 'react';

export function CreateButton() {
	const [state, dispatch, isPending] = useActionState(
		createGameAction,
		right(undefined),
	);
	return (
		<div className='flex flex-col gap-1'>
			<Button
				disabled={isPending}
				onClick={() => startTransition(dispatch)}
				error={mapLeft(
					state,
					(e) =>
						({
							['can-create-only-one-game']: 'Can create only one game',
							['user-not-found']: 'User not found',
						}[e]),
				)}
			>
				Create a game
			</Button>
		</div>
	);
}
