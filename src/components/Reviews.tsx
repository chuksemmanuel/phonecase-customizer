'use client';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { cn } from '@/lib/utils';
import Phone from '@/components/Phone';

const PHONES = [
	'/testimonials/1.jpg',
	'/testimonials/2.jpg',
	'/testimonials/3.jpg',
	'/testimonials/4.jpg',
	'/testimonials/5.jpg',
	'/testimonials/6.jpg',
];

function splitArray<T>(array: Array<T>, numParts: number) {
	/*
    returns  an array of arrays of type T(origianl array passed as first argument, in this case strings) [["","",""],["","",""],["","",""]]
    */
	const result: Array<Array<T>> = [];

	for (let i = 0; i < array.length; i++) {
		const index = i % numParts;
		result[index] = result[index] || [];
		result[index].push(array[i]);
	}

	return result;
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string;
}
const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
	const POSSIBLE_ANIMATION_DELAYS = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s'];

	// const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)];
	const animationDelay = POSSIBLE_ANIMATION_DELAYS[0];

	return (
		<div
			className={cn('animate-fade-in rounded-[2.25rem] bg-white p-6  shadow-xl shadow-slate-900/5', className)}
			style={{ animationDelay }}
			{...props}>
			<Phone imgSrc={imgSrc} />
		</div>
	);
};

interface ReviewColumnProps {
	reviews: string[];
	className?: string;
	reviewClassName?: (reviewIndex: number) => string;
	msPerPixel?: number;
}

const ReviewColumn = ({ reviews, className, reviewClassName, msPerPixel = 0 }: ReviewColumnProps) => {
	const columnRef = useRef<HTMLDivElement | null>(null);
	const [columnHeight, setColumnHeight] = useState(0);
	const duration = `${(columnHeight * msPerPixel) / 100}ms`;

	useEffect(() => {
		if (!columnRef.current) return;

		const resizeObserver = new window.ResizeObserver(() => {
			setColumnHeight(columnRef.current!.offsetHeight ?? 0);
		});

		resizeObserver.observe(columnRef.current);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={columnRef}
			className={cn('animate-marquee space-y-8 py-4', className)}
			style={{ '--marquee-duration': duration } as React.CSSProperties}>
			{reviews.concat(reviews).map((imgSrc, reviewIndex) => (
				<Review key={reviewIndex} className={reviewClassName?.(reviewIndex % reviews.length)} imgSrc={imgSrc} />
			))}
		</div>
	);
};

const ReviewGrid = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.4 });
	const columns = splitArray(PHONES, 3);
	const column1 = columns[0];
	const column2 = columns[1];
	const column3 = splitArray(columns[2], 2);

	return (
		<div
			ref={containerRef}
			className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden sm:mt-20 md:grid-cols-2 lg:grid-cols-3'>
			{isInView && (
				<>
					<ReviewColumn
						reviews={[...column1, ...column3.flat(), ...column2]}
						reviewClassName={reviewIndex =>
							cn({
								'md:hidden': reviewIndex >= column1.length + column3[0].length,
								'lg:hidden': reviewIndex >= column1.length,
							})
						}
						msPerPixel={10}
					/>
					<ReviewColumn
						reviews={[...column2, ...column3[1]]}
						className='hidden md:block'
						reviewClassName={reviewIndex => (reviewIndex >= column2.length ? 'lg:hidden' : '')}
						msPerPixel={15}
					/>
					<ReviewColumn reviews={column3.flat()} className='hidden md:block' msPerPixel={10} />
				</>
			)}
		</div>
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
