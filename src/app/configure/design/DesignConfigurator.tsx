'use client';
import HandleComponent from '@/components/HandleComponent';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { COLORS, MODELS } from '@/validators/option-validators';
import { Radio, RadioGroup } from '@headlessui/react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Check, ChevronsUpDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Rnd } from 'react-rnd';

interface DesignConfiguratorProps {
	configId: string;
	imageUrl: string;
	imageDimensions: { width: number; height: number };
}
const DesignConfigurator = ({ configId, imageUrl, imageDimensions }: DesignConfiguratorProps) => {
	const [options, setOptions] = useState<{ color: (typeof COLORS)[number]; model: (typeof MODELS)[number] }>({
		color: COLORS[0],
		model: MODELS[0],
	});
	console.log(configId, imageUrl, imageDimensions);
	return (
		<div className='relative mt-20 grid grid-cols-3 mb-20 pb-20'>
			<div className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
				<div className='relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]'>
					<AspectRatio ratio={896 / 1831} className='pointer-events-none z-50 aspect-[896/1831]'>
						<Image src='/phone-template.png' alt='phone case image' fill className='pointer-events-none select-none z-50' />
					</AspectRatio>
					<div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,232,235,0.4)]' />
					<div className={cn('absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] ', `bg-${options.color.tw}`)} />
				</div>
				<Rnd
					default={{ x: 150, y: 205, height: imageDimensions.height / 4, width: imageDimensions.width / 4 }}
					lockAspectRatio
					className='absolute z-20 border-[3px] border-primary'
					resizeHandleComponent={{
						bottomRight: <HandleComponent />,
						bottomLeft: <HandleComponent />,
						topRight: <HandleComponent />,
						topLeft: <HandleComponent />,
					}}>
					<div className='relative w-full h-full'>
						<Image src={imageUrl} alt='your image' fill className='pointer-events-none ' />
					</div>
				</Rnd>
			</div>

			<div className='h-[37.5rem] flex flex-col bg-white'>
				<ScrollArea>
					<div className='relative flex-1 overflow-auto'>
						<div aria-hidden='true' className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-red to-white/0 pointer-events-none' />

						<div className='px-8 pb-12 pt-8'>
							<h2 className='tracking-tight font-bold text-3xl '>Customize your case</h2>

							<div className='w-full h-px bg-zinc-200 my-6' />

							<div className='relative mt-4 h-full flex flex-col justify-between'>
								<div className='relative  flex flex-col gap-6'>
									<RadioGroup
										value={options.color}
										onChange={color =>
											setOptions(prev => ({
												...prev,
												color,
											}))
										}>
										<Label>Color: {options.color.label}</Label>
										<div className='mt-3 flex items-center space-x-3'>
											{COLORS.map(color => (
												<Radio
													key={color.label}
													value={color}
													className={({ checked }) =>
														cn(
															'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent',
															{ [`border-${color.tw}`]: checked || color.value === options.color.value },
														)
													}>
													<span className={cn(`bg-${color.tw}`, 'size-8 rounded-full border border-black border-opacity-10')} />
												</Radio>
											))}
										</div>
									</RadioGroup>

									<div className='relative flex flex-col gap-3 w-full'>
										<Label>Modal</Label>
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant='outline' role='combobox' className='w-full justify-between'>
												{options.model.label}
												<ChevronsUpDown className='ml-2 size-4 shrink-0 opacity-50' />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent className='w-60'>
											{MODELS.map(model => (
												<DropdownMenuItem
													key={model.label}
													className={cn(' flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100', {
														'bg-zinc-100': model.label === options.model.label,
													})}
													onClick={() => setOptions(prev => ({ ...prev, model }))}>
													<Check className={cn('mr-2 size-4', model.label === options.model.label ? 'opacity-100' : 'opacity-0')} />
													{model.label}
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
						</div>
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};

export default DesignConfigurator;
