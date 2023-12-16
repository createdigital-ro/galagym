import React, { createContext, useContext } from 'react';
import { Phone, Facebook, Instagram } from 'lucide-react';
import EmailForm from '../_components/EmailForm';
import Image from 'next/image';

const Contact = () => {
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
				className='hidden sm:block absolute right-0 top-48 w-[90px] h-[400px] lg:w-[170px] lg:h-[500px]'
			/>
			<h1 className='font-bold text-3xl ml-4 my-8 text-center sm:text-5xl lg:text-6xl'>Contactează-ne</h1>
			<div className='flex flex-col lg:flex-row lg:justify-center lg:gap-12 items-center lg:mt-16'>
				<div className='bg-[#0f0f0f] shadow-[6px_6px] lg:my-auto shadow-yellow-400 self-center text-white w-[290px] sm:w-[310px] xl:py-4 mb-8 py-2'>
					<h3 className='font-bold text-center text-2xl py-8 xl:text-3xl'>
						Ne gasesti si pe <br />
						<span className='text-yellow-400'>social media</span>
					</h3>
					<div className='flex flex-col gap-6'>
						{socials.map((s) => (
							<div
								key={s.social}
								className='flex transition text-[#0f0f0f] bg-white w-[200px] mx-auto py-2 rounded-full gap-2 hover:shadow-[2px_2px] hover:shadow-yellow-400 hover:scale-105 active:scale-105 active:shadow-[2px_2px] active:shadow-yellow-400'
							>
								<i className='ml-4'>{s.icon}</i>
								<a href={s.link}>{s.social}</a>
							</div>
						))}
					</div>
					<div className='my-12 flex flex-col text-center font-semibold gap-3'>
						<h3 className='text-2xl xl:text-3xl'>Da-ne un telefon</h3>
						<a
							href='tel:0750427049'
							className='flex self-center items-center justify-center hover:cursor-pointer xl:text-2xl'
						>
							<Phone className='mr-2 w-4' />
							<span className='text-yellow-400 mr-2'>+40</span>750 427 049
						</a>
					</div>
				</div>
				<EmailForm />
			</div>
		</div>
	);
};

export default Contact;
