'use client';

import { BookHeart, CalendarHeart, Dumbbell, PersonStanding } from 'lucide-react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../_components/ui/tabs';
import { memberships } from '@/utils/static';

const cardClass = 'w-8 h-8';

const unlimited = memberships.unlimited;
const limited = memberships.limited;
const personalTrainer = memberships.personalTrainer;

const cards = [
	{
		icon: <PersonStanding className={cardClass} />,
		title: 'Antrenorii nostri',
		content:
			'Alătură-te nouă pentru o experiență de fitness condusă de specialiști certificați. Beneficiază de ghidare profesională și susținere personalizată pentru a-ți atinge obiectivele.',
	},
	{
		icon: <CalendarHeart className={`${cardClass}`} />,
		title: 'Comunitate Unită',
		content:
			'Comunitatea unita în jurul pasiunii pentru fitness. Experimentează energie pozitivă, evenimente sociale și susținere reciprocă. Transformă-ți antrenamentele în experiențe memorabile alături de noi.',
	},
	{
		icon: <Dumbbell className={`${cardClass}`} />,
		title: 'Echipament Avansat',
		content:
			'Beneficiază de facilități moderne și echipamente specializate, concepute pentru a-ți maximiza performanța și a-ți transforma antrenamentele în realizări extraordinare.',
	},
	{
		icon: <BookHeart className={`${cardClass}`} />,
		title: 'Programe de Fitness',
		content:
			'Explorează programe de fitness adaptate nevoilor tale specifice. De la începători până la avansați, oferim planuri personalizate care îți pot transforma obiectivele în realitate. ',
	},
];

export default function Home() {
	return (
		<div className='mt-20'>
			<section className='flex flex-col-reverse lg:flex-row gap-8 items-center justify-between'>
				<div>
					<h1 className='text-5xl xl:text-6xl 2xl:text-7xl font-semibold'>
						ANTRENEAZĂ-TE. <br />
						FII MAI BUN. <br />
						FII TU.
					</h1>
					<p className='text-4xl max-w-sm mt-12'>
						Adopta un stil de viata <u className='underline-offset-2 italic'>sanatos</u> alaturi de GalaGym
					</p>
				</div>
				<div className=''>
					<Image className='shadow-hard-lg' src={'/galagym.png.jpg'} height={1200} width={800} alt='Gala gym cladire' />
				</div>
			</section>
			<hr className='my-24 border-black max-w-7xl mx-auto' />
			<section>
				<div className='text-center'>
					<h2 className='text-6xl font-bold text-center'>Motive sa ni te alaturi</h2>
					<p className='text-lg my-1'>Motivul perfect pentru a ne acompania în călătoria ta fitness</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto my-20'>
					{cards.map((card) => (
						<div key={card.title} className='max-w-md mx-auto'>
							<div className='flex gap-4 items-center justify-center md:justify-start font-semibold mb-3'>
								<i>{card.icon}</i>
								<p className='text-xl w-fit text-center'>{card.title}</p>
							</div>
							<p className='text-lg text-center md:text-left'>{card.content}</p>
						</div>
					))}
				</div>
			</section>
			<section className='bg-yellow-400 w-full py-16 mt-12 shadow-hard-xl'>
				<div className='text-center m-4'>
					<h2 className='text-5xl lg:text-6xl font-bold text-center'>Tarife abonamente</h2>
					<p className='text-lg my-1'>Descopera tipurile noastre de abonomente, precum si preturile lor</p>
				</div>
				<Tabs defaultValue='nelimitat'>
					<TabsList className='p-2 py-3 bg-white mx-auto my-8 rounded-full w-fit flex gap-4'>
						<TabsTrigger
							className='data-[state=active]:bg-yellow-400 data-[state=active]:text-black shadow-none rounded-full text-xs md:text-md'
							value='nelimitat'
						>
							Nelimitat
						</TabsTrigger>
						<TabsTrigger
							className='data-[state=active]:bg-yellow-400 data-[state=active]:text-black shadow-none rounded-full text-xs md:text-md'
							value='sedinte'
						>
							Sedinte
						</TabsTrigger>
						<TabsTrigger
							className='data-[state=active]:bg-yellow-400 data-[state=active]:text-black shadow-none rounded-full text-xs md:text-md'
							value='personalizate'
						>
							Antrenor personal
						</TabsTrigger>
					</TabsList>
					<TabsContent
						className='flex flex-col md:flex-row max-w-2xl data-[state=inactive]:hidden gap-12 mx-auto'
						value='nelimitat'
					>
						{unlimited.map((membership, i) => (
							<div
								key={i}
								className='bg-white text-black even:scale-125 rounded-md w-[200px] py-3 px-5 mx-auto shadow-[3px_3px] shadow-black relative'
							>
								{membership.tag && (
									<span className='bg-neutral-200 rounded-full text-[#0f0f0f] text-xs px-2 font-bold absolute -top-2 right-3'>
										{membership.tag}
									</span>
								)}
								<div className='flex flex-col leading-5'>
									<p className='font-bold'>{membership.type}</p>
									<p>{membership.days} de zile</p>
								</div>
								<p className='mt-8 font-bold'>{membership.price} lei</p>
							</div>
						))}
					</TabsContent>
					<TabsContent
						className='flex flex-col md:flex-row max-w-2xl data-[state=inactive]:hidden gap-12 mx-auto'
						value='sedinte'
					>
						{limited.map((membership, i) => (
							<div
								key={i}
								className='bg-white text-black even:scale-125 rounded-md w-[200px] py-3 px-5 mx-auto shadow-[3px_3px] shadow-black relative'
							>
								{membership.tag && (
									<span className='bg-neutral-200 rounded-full text-[#0f0f0f] text-xs px-2 font-bold absolute -top-2 right-3'>
										{membership.tag}
									</span>
								)}
								<div className='flex flex-col leading-5'>
									<p className='font-bold'>{membership.type}</p>
									<p>{membership.days} de zile</p>
								</div>
								<p className='mt-8 font-bold'>{membership.price} lei</p>
							</div>
						))}
					</TabsContent>
					<TabsContent
						className='flex flex-col md:flex-row max-w-2xl data-[state=inactive]:hidden gap-12 mx-auto'
						value='personalizate'
					>
						{personalTrainer.map((membership, i) => (
							<div
								key={i}
								className='bg-white text-black even:scale-125 rounded-md w-[200px] py-3 px-5 mx-auto shadow-[3px_3px] shadow-black relative'
							>
								{membership.tag && (
									<span className='bg-neutral-200 rounded-full text-[#0f0f0f] text-xs px-2 font-bold absolute -top-2 right-3'>
										{membership.tag}
									</span>
								)}
								<div className='flex flex-col leading-5'>
									<p className='font-bold'>{membership.type}</p>
									<p>{membership.days} de zile</p>
								</div>
								<p className='mt-8 font-bold'>{membership.price} lei</p>
							</div>
						))}
					</TabsContent>
				</Tabs>
			</section>
		</div>
	);
}
