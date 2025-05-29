import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({ classNames, children }: { classNames?: string; children: React.ReactNode }) => {
	return <div className={cn('h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20', classNames)}>{children}</div>;
};

export default MaxWidthWrapper;
