import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PhoneCaseProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	imgSrc: string;
	dark?: boolean;
}

const PhoneCase = ({ className, imgSrc, dark = false, ...props }: PhoneCaseProps) => {
	return (
		<div className={cn('relative pointer-events-none z-50 overflow-hidden', className)} {...props}>
			<Image
				src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
				alt='phone case image'
				width={500}
				height={500}
				className='pointer-events-none z-50 select-none'
			/>

			<div className='absolute -z-10 inset-0'>
				<Image src={imgSrc} alt='overlay phone image' width={500} height={500} className='object-cover aspect-[896/1831]' />
			</div>
		</div>
	);
};

export default PhoneCase;
