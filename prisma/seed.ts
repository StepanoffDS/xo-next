import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			login: 'user-1',
			passwordHash: '1234',
			rating: 1000,
		},
	});
	const user2 = await prisma.user.create({
		data: {
			login: 'user-2',
			passwordHash: '1234',
			rating: 1000,
		},
	});
	// await prisma.game.create({
	// 	data: {
	// 		field: Array(9).fill(null),
	// 		status: 'idle',
	// 		players: {
	// 			connect: { id: user.id },
	// 		},
	// 	},
	// });
	// await prisma.game.create({
	// 	data: {
	// 		field: Array(9).fill(null),
	// 		status: 'idle',
	// 		players: {
	// 			connect: { id: user2.id },
	// 		},
	// 	},
	// });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
