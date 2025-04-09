import { GameId } from '@/kernel/ids';
import { NextRequest } from 'next/server';

import { sseStream } from '@/shared/lib/sse/server';
import { getGameById } from '@/entities/game/server';
import { getCurrentUser } from '@/entities/user/server';

export async function getGameStream(
	req: NextRequest,
	{ params }: { params: Promise<{ id: GameId }> },
) {
	const { id } = await params;

	const game = await getGameById(id);
	const user = await getCurrentUser();
	if (!game || !user) {
		return new Response(`Game not found`, {
			status: 404,
		});
	}

	const { response, write, close, addCloseListener } = sseStream(req);

	write(game);

	addCloseListener(() => {});

	return response;
}
