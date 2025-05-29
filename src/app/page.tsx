import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import PhoneCase from '@/components/Phone';
import { Check, Star } from 'lucide-react';
import { Icons } from '@/components/icons';
// import Reviews from '@/components/Reviews';

export default function Home() {
	return (
		<div className='bg-slate-50'>
			<section>
				<MaxWidthWrapper classNames='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gapx-8 lg:pt-24 xl:pt-32 lg:pb-52'>
					<div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
						<div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start '>
							<div>
								<div className='absolute w-28 left-0 -top-20 hidden lg:block'>
									<Image src='/snake-1.png' alt='snake illustration' width={50} height={50} sizes='100vw'></Image>
								</div>

								<h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
									Your Image on a <span className='bg-green-600 px-2 text-white'>Custom</span> Phone Case
								</h1>

								<p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap '>
									Capture your favourite memories with your own , <span>one-of-one</span> phone case. CaseCobra allows you to protect your memories,
									not just your phone case.
								</p>

								<ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
									<div className='space-y-2'>
										<li className='flex gap-1.5 items-center text-left'>
											<Check className='size-5 shrink-0 text-green-600' />
											High-quality, durable material
										</li>
										<li className='flex gap-1.5 items-center text-left'>
											<Check className='size-5 shrink-0 text-green-600' />5 year print gaurantee
										</li>
										<li className='flex gap-1.5 items-center text-left'>
											<Check className='size-5 shrink-0 text-green-600' />
											Modern Iphone models supported
										</li>
									</div>
								</ul>

								<div className='mt-12 flex-col  sm:flex-row items-center sm:items-start gap-5'>
									<div className='flex justify-center lg:justify-start  mb-4 -space-x-4'>
										{Array.from({ length: 5 }).map((_, i) => (
											<Image
												className='inline-block size-10 rounded-full ring-2 ring-slate-100'
												height={40}
												width={40}
												src={`/users/user-${i + 1}.${i > 2 ? 'jpg' : 'png'}`}
												alt='user image'
												key={i}
											/>
										))}
									</div>

									<div className='flex flex-col justify-between items-center sm:items-start'>
										<div className='flex justify-center  gap-0.5'>
											{Array.from({ length: 5 }).map((_, i) => (
												<Star className='size-4 text-green-600 fill-green-600' key={i} />
											))}
										</div>
										<p>
											<span className='font-semibold'>1.250 </span>happy customers
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
						<div className='relative md:max-w-xl'>
							<Image
								src='/your-image.png'
								alt='your image'
								width={500}
								height={500}
								sizes='100vw'
								className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
							/>

							<Image
								src='/line.png'
								alt='absolute w-20 -left-6 -bottom-6 select-none'
								width={500}
								height={500}
								sizes='100vw'
								className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
							/>

							<PhoneCase imgSrc='/testimonials/3.jpg' className='w-64' />
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			{/* Value position section */}

			<section className='bg-slate-100 py-24'>
				<MaxWidthWrapper classNames='flex flex-col items-center gap-16 sm:gap-32'>
					<div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
						<h2 className='order-1 mt-2 tracking-tight text-center !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
							What our{' '}
							<span className='relative px-2'>
								customers <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
							</span>{' '}
							say
						</h2>
						<Image src='/snake-2.png' alt='' className='w-24 order-0 lg:order-2' width={96} height={0} />
					</div>

					<div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg-max-w-none lg:grid-cols-2 gap-y-16'>
						{/* first user review */}
						<div className='flex flex-auto flex-col gap-4'>
							<div className='flex gap-0.5 mb-2'>
								{Array.from({ length: 5 }).map((_, i) => (
									<Star key={i} className='h-5 w-5 text-green-600 fill-green-600' />
								))}
							</div>
							<div className='text-lg leading-8'>
								<p>
									{' '}
									&ldquo; The case feels durable and I even got a compliment on the design. Had the case for two days and half months now and{' '}
									<span className='p-0.5 bg-slate-800 text-white'>the image is super clear</span>, on the case I had before, the image started fading
									into yellow-ish color after a couple weeks. Love it &ldquo;
								</p>
							</div>
							<div className='flex gap-4 mt-2'>
								<Image src='/users/user-1.png' alt='user image' width={48} height={48} className='rounded-full size-12 object-cover' />
								<div className='flex flex-col'>
									<p className='font-semibold'>Jonathan</p>
									<div className='flex gap-1.5 items-center text-zinc-600'>
										<Check className='size-4 stroke-[-3px] text-green-600' />
										<p className='text-sm'>Verified Purchase</p>
									</div>
								</div>
							</div>
						</div>

						{/* second user review */}
						<div className='flex flex-auto flex-col gap-4'>
							<div className='flex gap-0.5 mb-2'>
								{Array.from({ length: 5 }).map((_, i) => (
									<Star key={i} className='h-5 w-5 text-green-600 fill-green-600' />
								))}
							</div>
							<div className='text-lg leading-8'>
								<p>
									{' '}
									&ldquo; I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all my last
									phone cases. This one, besides a barely noticeable scrath on the corner,{' '}
									<span className='p-0.5 bg-slate-800 text-white'>loks brand new after about half a year</span>, I dig it. &ldquo;
								</p>
							</div>
							<div className='flex gap-4 mt-2'>
								<Image src='/users/user-4.jpg' alt='user image' width={48} height={48} className='rounded-full size-12 object-cover' />
								<div className='flex flex-col'>
									<p className='font-semibold'>Matt</p>
									<div className='flex gap-1.5 items-center text-zinc-600'>
										<Check className='size-4 stroke-[-3px] text-green-600' />
										<p className='text-sm'>Verified Purchase</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>

				{/* <div className='pt-16'> 
					<Reviews />
				</div> */}
			</section>
		</div>
	);
}
