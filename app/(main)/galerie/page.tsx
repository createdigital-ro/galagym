'use client';

import { PageTitle } from '@/app/_components/typography';
import Image from 'next/image';

const photos = [
	{
		url: '/galerie/1.jpeg',
		alt: 'Gym photo',
	},
	{
		url: '/galerie/2.jpeg',
		alt: 'Gym photo',
	},
	{
		url: '/galerie/3.jpeg',
		alt: 'Gym photo',
	},
	{
		url: '/galerie/4.jpeg',
		alt: 'Gym photo',
	},
	{
		url: '/galerie/5.jpeg',
		alt: 'Gym photo',
	},
	{
		url: '/galerie/7.jpeg',
		alt: 'Gym photo',
	},
];

const GalleryPage = () => {
	return (
		<section>
			<PageTitle>Galerie</PageTitle>
			<div className='grid auto-cols-min max-w-7xl grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-12 gap-8 mx-auto'>
				{photos.map((photo) => (
					<Image
						key={photo.alt}
						className='object-cover border divide-yellow-400 border-yellow-400 p-1 mx-auto object-center w-[400px] h-[400px]'
						width={1000}
						height={1000}
						src={photo.url}
						alt={photo.alt}
					/>
				))}
			</div>
		</section>
	);
};

export default GalleryPage;
