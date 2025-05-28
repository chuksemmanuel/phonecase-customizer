'use client';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useRef } from 'react';

const ReviewGrid = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	return (
		<div
			ref={containerRef}
			className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden sm:mt-20 md:grid-cols-2 lg:grid-cols-3'></div>
	);
};

const Reviews = () => {
	return (
		<MaxWidthWrapper classNames='relative max-w-5xl'>
			<Image
				aria-hidden='true'
				src='/what-people-are-buying.png'
				alt='what people are buying'
				width={500}
				height={500}
				className='absolute select-none hidden xl:block -left-32 top-1/3'
			/>

			<ReviewGrid />
		</MaxWidthWrapper>
	);
};

export default Reviews;
