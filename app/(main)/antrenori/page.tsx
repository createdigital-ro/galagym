import Image from 'next/image';
import Link from 'next/link';
import { PageTitle } from '../../_components/typography';

const Echipa = () => {
	const echipa = [
		{
			name: 'Alexandru',
			role: 'Antrenor personal',
			imageUrl: '/antrenor.png',
			imageAlt: 'Antrenor personal cu 3 ani de experienta',
		},
		{
			name: 'Cosmin',
			role: 'Antrenor personal',
			imageUrl: '/antrenor.png',
			imageAlt: 'Antrenor personal cu 2 ani de experienta',
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
			<PageTitle>Echipa noastra</PageTitle>
			<h2 className='text-center text-[#0f0f0f] max-w-[400px] mx-auto md:max-w-[800px] md:text-2xl mt-2 mb-8'>
				Antrenori personali care vă indrumă cu zâmbetul pe buze în călătoria către forma fizică ideala.
			</h2>
			<div
				className={`grid grid-cols-1 ${
					echipa.length >= 3 ? 'xl:grid-cols-3' : ''
				} md:grid-cols-2 w-fit mx-auto md:justify-center items-center md:gap-10 gap-8 mt-12`}
			>
				{echipa.map((member) => (
					<Link key={member.name} href='/preturi'>
						<div className='border-2 border-[#0f0f0f] shadow-lg hover:scale-105 active:scale-105'>
							<Image
								src={member.imageUrl}
								alt={member.imageAlt}
								width={100}
								height={100}
								className='shadow-mg w-[200px] lg:w-[250px]'
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
