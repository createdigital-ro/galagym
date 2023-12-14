import Image from 'next/image';
import Link from 'next/link';

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
	return (
		<nav className='flex p-8 items-center justify-between'>
			<Link href={'/'}>
				<Image src={'/logo.svg'} width={115} height={49} alt='Gala Gym Logo' />
			</Link>
			<div className='flex gap-8'>
				{pages.map(({ text, link }) => (
					<Link key={text} className='hover:underline' href={link}>
						{text}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
