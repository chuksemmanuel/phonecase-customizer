import { db } from '@/db';
import { notFound } from 'next/navigation';
import DesignConfigurator from './DesignConfigurator';

interface DesignPageProps {
	searchParams: Promise<{ [key: string]: string }>;
}

const DesignPage = async ({ searchParams }: DesignPageProps) => {
	const { id } = await searchParams;

	if (!id || typeof id !== 'string') {
		return notFound();
	}

	const configuration = await db.configuration.findUnique({ where: { id } });

	if (!configuration) {
		return notFound();
	}

	const { imageUrl, height, width } = configuration;

	console.log(imageUrl, height, width);

	return <DesignConfigurator configId={id} imageUrl={imageUrl} imageDimensions={{ width, height }} />;
};

export default DesignPage;
