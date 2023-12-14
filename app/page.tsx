import { BookHeart, CalendarHeart, Dumbbell, PersonStanding } from 'lucide-react';
import Image from 'next/image';

const cardClass = 'w-8 h-8';

const cards = [
	{
		icon: <PersonStanding className={cardClass} />,
		title: 'Antrenorii nostrii',
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
		title: 'Programe de Fitness Personalizate',
		content:
			'Explorează programe de fitness adaptate nevoilor tale specifice. De la începători până la avansați, oferim planuri personalizate care îți pot transforma obiectivele în realitate. ',
	},
];

export default function Home() {
	return (
		<div className='mt-20'>
			<div className='flex flex-col-reverse lg:flex-row gap-8 items-center justify-between'>
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
					<Image className='shadow-hard-xl' src={'/poza.png'} height={1200} width={800} alt='poza' />
				</div>
			</div>
			<hr className='my-24 border-black max-w-7xl mx-auto' />
			<div>
				<div className='text-center'>
					<h2 className='text-6xl font-bold text-center'>Motive sa ni te alaturi</h2>
					<p className='text-lg my-1'>Motivul perfect pentru a ne acompania în călătoria ta fitness</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto my-20'>
					{cards.map((card) => (
						<div key={card.title} className='max-w-md mx-auto'>
							<div className='flex gap-4 items-center justify-center md:justify-start font-semibold mb-3'>
								<i>{card.icon}</i>
								<span className='text-xl'>{card.title}</span>
							</div>
							<p className='text-lg text-center md:text-left'>{card.content}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
