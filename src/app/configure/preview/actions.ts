'use server';

import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products';
import { db } from '@/db';
import { Order } from '@/generated/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export const createCheckoutSession = async ({ configId }: { configId: string }) => {
	const configuration = await db.configuration.findUnique({
		where: { id: configId },
	});

	if (!configuration) {
		throw new Error('Configuration not found');
	}

	const { getUser } = getKindeServerSession();

	const user = await getUser();

	if (!user) {
		throw new Error('You need to be logged in');
	}

	const { finish, material } = configuration;
	const price = BASE_PRICE + PRODUCT_PRICES.material[material!] + PRODUCT_PRICES.finish[finish!];

	let order: Order | undefined;

	const existingOrder = await db.order.findFirst({
		where: {
			userId: user.id,
			configurationId: configuration.id,
		},
	});

	if (existingOrder) {
		order = existingOrder;
	} else {
		order = await db.order.create({
			data: {
				amount: price / 100,
				userId: user.id,
				configurationId: configuration.id,
			},
		});
	}
};
