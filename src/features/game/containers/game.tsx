'use client';

import { GameLayout } from '../ui/layout';
import { GamePlayers } from '../ui/players';
import { GameStatus } from '../ui/status';
import { GameField } from '../ui/field';
import { useGame } from '../model/use-game';

export function Game({ gameId }: { gameId: string }) {
	const { game, isPending } = useGame(gameId);

	console.log('game', game);
	console.log('game-status', game?.status);
	console.log('game-id', game?.id);

	if (!game || isPending) {
		return <GameLayout status={'Загрузка...'} />;
	}

	return (
		<GameLayout
			players={<GamePlayers game={game} />}
			status={<GameStatus game={game} />}
			field={<GameField game={game} />}
		/>
	);
}
