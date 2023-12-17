'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const pages = [
	{
		text: 'Galerie',
		link: '/galerie',
	},

	{
		text: 'Program',
		link: '/program',
	},
	{
		text: 'Preturi',
		link: '/preturi',
	},
	{
		text: 'Antrenori',
		link: '/antrenori',
	},
	{
		text: 'Contact',
		link: '/contact',
	},
];

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className='flex p-8 items-center justify-between'>
			<Link href={'/'}>
				<Image src={'/logo.svg'} width={115} height={49} alt='Gala Gym Logo' />
			</Link>
			<div className='hidden sm:block'>
				<div className='flex gap-8'>
					{pages.map(({ text, link }) => (
						<Link key={text} className='hover:underline' href={link}>
							{text}
						</Link>
					))}
				</div>
			</div>
			<nav className='sm:hidden'>
				<MenuIcon
					className='cursor-pointer'
					onClick={() => {
						setIsOpen((open) => !open);
					}}
				/>
				<div
					className={`fixed z-20 top-0 right-0 w-[300px] h-screen backdrop-blur-md bg-white/75 p-3 animate-in fade-in-0 duration-300 transition ${
						!isOpen && 'hidden'
					}`}
				>
					<XIcon
						className='cursor-pointer'
						onClick={() => {
							setIsOpen((open) => !open);
						}}
					/>
					<div className='flex flex-col gap-2 ml-auto my-24'>
						{pages.map(({ text, link }) => (
							<Link key={text} className='hover:underline text-6xl text-right' href={link}>
								{text}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</nav>
	);
};

export default Navigation;
