import Announcement from '@/app/_components/Announcement';
import Navigation from '@/app/_components/Navigation';
import { basier } from '@/utils/fonts';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import '@/app/globals.css';

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body className={basier.className}>
				<Announcement message='Programul nostru de sarbatori' />
				<Navigation />
				<div className='max-w-[1700px] mx-auto'>
					<div className='mx-4'>{children}</div>
				</div>
				<Toaster position='top-center' />
			</body>
		</html>
	);
};

export default MainLayout;
