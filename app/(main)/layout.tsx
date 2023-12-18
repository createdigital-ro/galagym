import Announcement from '@/app/_components/Announcement';
import Navigation from '@/app/_components/Navigation';
import { basier } from '@/utils/fonts';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import '@/app/globals.css';
import Footer from '../_components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'GalaGym Ozana - Antreneaza-te alaturi de noi',
	description:
		'Descoperă GalaGym Ozana, centrul tău de fitness, unde tehnologia modernă și antrenorii experți te așteaptă. Fie că ești începător sau avansat, te invităm să te alături comunității noastre și să transformi antrenamentul într-o experiență unică. Înscrie-te acum la GalaGym Ozana și atinge-ți obiectivele de fitness!',
};

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body className={basier.className}>
				<Announcement message='PROGRAM DE SĂRBĂTORI: 25-26 DECEMBRIE ÎNCHIS | 1-2 IANUARIE ÎNCHIS' />
				<Navigation />
				<div className='max-w-[1700px] mx-auto'>
					<div className='mx-4'>{children}</div>
				</div>
				<Footer />
				<Toaster position='top-center' />
			</body>
		</html>
	);
};

export default MainLayout;
