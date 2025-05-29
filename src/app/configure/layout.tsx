import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Steps from '@/components/Steps';

const ConfigureLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<MaxWidthWrapper classNames='flex-1 flex flex-col'>
			<Steps />
			{children}
		</MaxWidthWrapper>
	);
};

export default ConfigureLayout;
