import Image from 'next/image';
import Link from 'next/link';
import { PageTitle } from '../../_components/typography';

const Echipa = () => {
	const echipa = [
		{
			name: 'Mihai',
			role: 'Antrenor personal',
			imageUrl: '/Mihai.png',
			imageAlt: 'Antrenor personal cu ani de experienta',
		},
		{
			name: 'Silvia',
			role: 'Antrenor personal',
			imageUrl: '/Silvia.png',
			imageAlt: 'Antrenor personal cu ani de experienta',
		},
		{
			name: 'George',
			role: 'Antrenor personal',
			imageUrl: '/George.png',
			imageAlt: 'Antrenor personal cu ani de experienta',
		},
		{
			name: 'Manu',
			role: 'Antrenor personal',
			imageUrl: '/Manu.png',
			imageAlt: 'Antrenor personal cu ani de experienta',
		},
	];
	return (
		<div>
			<Image
				src='/blob.svg'
				alt='Background element'
				width={100}
				height={100}
				className='hidden sm:block absolute left-0 top-96 w-[90px] h-[400px] lg:w-[150px] lg:h-[400px]'
			/>
			<Image
				src='/lightning.svg'
				alt='Background element'
				width={130}
				height={130}
				className='hidden sm:block absolute right-0 top-64 w-[90px] h-[400px] lg:w-[170px] lg:h-[500px]'
			/>
			<PageTitle>Echipa noastră</PageTitle>
			<h2 className='text-center text-[#0f0f0f] max-w-[400px] mx-auto md:max-w-[800px] lg:text-2xl mt-2 mb-8'>
				Antrenori personali care vă îndrumă cu zâmbetul pe buze în călătoria către forma fizică ideală.
			</h2>
			<div
				className={`grid grid-cols-1 ${echipa.length === 3 ? 'xl:grid-cols-3' : ''} ${
					echipa.length === 4 ? 'xl:grid-cols-2' : ''
				} md:grid-cols-2 w-fit mx-auto md:justify-center items-center md:gap-10 gap-8 mt-12`}
			>
				{echipa.map((member) => (
					<Link key={member.name} href='/preturi'>
						<div className='border-4 border-[#0f0f0f] shadow-lg hover:scale-105 active:scale-105'>
							<Image
								src={member.imageUrl}
								alt={member.imageAlt}
								width={2000}
								height={2000}
								className='w-[250px] h-[415px] object-cover'
							/>
							<div className='leading-none p-3'>
								<div className='flex'>
									<p className='text-2xl font-bold text-[#0f0f0f]'>{member.name}</p>
								</div>
								<p>{member.role}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Echipa;
