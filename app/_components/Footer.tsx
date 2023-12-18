import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
	const pages = [
		{
			href: 'galerie',
			onPage: 'Galerie',
		},
		{
			href: 'program',
			onPage: 'Program',
		},
		{
			href: 'preturi',
			onPage: 'Prețuri',
		},
		{
			href: 'antrenori',
			onPage: 'Antrenori',
		},
		{
			href: 'contact',
			onPage: 'Contact',
		},
	];

	const socials = [
		{
			social: 'Facebook',
			icon: <Facebook />,
			link: 'https://www.facebook.com/GalaGymFitness/?locale=ro_RO',
		},
		{
			social: 'Instagram',
			icon: <Instagram />,
			link: 'https://www.instagram.com/galagymbucuresti/',
		},
	];

	return (
		<>
			<footer className='bg-[#0f0f0f] text-white relative flex flex-col md:flex-row justify-between xl:justify-around px-16 py-14 mt-[100px] md:mt-[150px] items-start '>
				<div className='flex flex-col justify-center gap-2 items-center xl:mt-4 mb-4 md:mb-0'>
					<Image className='md:mr-auto' src='/logo-white.png' alt='Logo gala gym' width={150} height={100} />
					<address>
						<a href='https://www.google.com/maps/place/Gala+Gym/@44.4100839,26.177722,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1fc22089f71db:0xda6b8e24b73af3dc!8m2!3d44.4100801!4d26.1802969!16s%2Fg%2F11c70j2rmk?entry=ttu'>
							B-dul. Theodor Pallady 35, sector 3, Bucuresti
						</a>
					</address>
				</div>
				<div className='flex gap-4 md:gap-20 flex-col md:flex-row'>
					<div>
						<h2 className='font-bold mb-2 text-3xl'>Descoperă</h2>
						<div>
							<div className='flex flex-col text-lg'>
								{pages.map((p, index) => (
									<Link
										key={index}
										href={p.href}
										className='hover:text-gray-300 active:text-gray-400'
									>
										{p.onPage}
									</Link>
								))}
							</div>
						</div>
					</div>
					<div>
						<h2 className='font-bold mb-2 text-3xl'>Socials</h2>
						<div className='flex flex-col gap-2  text-lg'>
							{socials.map((s, index) => (
								<div key={index} className='flex gap-2'>
									{s.icon}
									<Link href={s.link} className='hover:text-gray-300 active:text-gray-400'>
										{s.social}
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</footer>
			<div className='bg-[#0f0f0f] p-4 text-center'>
				<Link href='https://createdigital.ro/' className='text-neutral-400'>
					Made by <span className='underline'>CreateDigital</span>
				</Link>
			</div>
		</>
	);
};

export default Footer;
