import { getIdleGames } from '@/entities/game/server';

export async function Layout({
	children,
	actions,
}: {
	children: React.ReactNode;
	actions: React.ReactNode;
}) {
	const games = await getIdleGames();

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-row justify-end gap-4'>{actions}</div>
			<div className='grid grid-cols-2 gap-4'>{children}</div>
		</div>
	);
}
