'use server';

import DesignPreview from '@/app/configure/preview/DesignPreview';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface PreviewPageProps {
	searchParams: Promise<{ [key: string]: string }>;
}

const PreviewPage = async ({ searchParams }: PreviewPageProps) => {
	const { id } = await searchParams;

	if (!id || typeof id !== 'string') {
		return notFound();
	}

	const configuration = await db.configuration.findUnique({ where: { id } });

	if (!configuration) {
		return notFound();
	}

	return <DesignPreview configuration={configuration} />;
};

export default PreviewPage;
