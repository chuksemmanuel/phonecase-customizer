'use server';

import { db } from '@/db';
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from '@/generated/prisma';

export type saveConfigType = {
	color: CaseColor;
	finish: CaseFinish;
	material: CaseMaterial;
	model: PhoneModel;
	configId: string;
};
export async function saveConfig({ color, finish, material, model, configId }: saveConfigType) {
	await db.configuration.update({
		where: { id: configId },
		data: { color, finish, material, model },
	});
}
