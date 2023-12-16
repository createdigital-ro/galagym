'use client';

import { PageTitle } from '@/app/_components/typography';
import Image from 'next/image';

const photos = [
	{
		url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Gym photo',
	},
	{
		url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Gym photo',
	},
	{
		url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Gym photo',
	},
	{
		url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
						width={400}
						height={400}
						src={photo.url}
						alt={photo.alt}
					/>
				))}
			</div>
		</section>
	);
};

export default GalleryPage;
