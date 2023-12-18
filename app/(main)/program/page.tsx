import Image from 'next/image';
import { PageTitle } from '../../_components/typography';

const Program = () => {
	return (
		<div>
			<Image
				src='/blob.svg'
				alt='Background element'
				width={100}
				height={100}
				className='hidden md:block absolute left-0 top-64 w-[90px] h-[400px] lg:w-[150px] lg:h-[400px]'
			/>
			<Image
				src='/lightning.svg'
				alt='Background element'
				width={130}
				height={130}
				className='hidden md:block absolute right-0 top-32 w-[90px] h-[400px] lg:w-[200px] lg:h-[500px]'
			/>
			<PageTitle>Program</PageTitle>
			<div className='flex flex-col gap-5 items-center max-w-[400px] sm:max-w-[600px] mt-12 px-8 mx-auto'>
				<div className='bg-black text-white text-center py-4 w-full shadow-[4px_4px] rounded-lg shadow-yellow-400'>
					<p className='sm:text-3xl  lg:text-4xl  font-semibold pb-2'>Luni - Vineri</p>
					<p className='text-3xl sm:text-5xl lg:text-6xl font-bold'>07:00 - 21:00</p>
				</div>

				<div className='bg-black text-white text-center py-4 w-full shadow-[4px_4px] rounded-lg shadow-yellow-400'>
					<p className='sm:text-3xl  lg:text-4xl  font-semibold pb-2'>Sâmbătă</p>
					<p className='text-3xl sm:text-5xl lg:text-6xl font-bold'>08:30 - 17:00</p>
				</div>

				<div className='flex flex-col items-center'>
					<p className='sm:text-3xl  lg:text-4xl font-semibold'>Duminică</p>
					<p className='text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wider'>ÎNCHIS</p>
				</div>
			</div>
		</div>
	);
};

export default Program;
