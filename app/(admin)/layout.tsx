import { basier } from '@/utils/fonts';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import '@/app/globals.css';

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<html lang='en'>
				<body className={basier.className}>
					{children}
					<Toaster position='top-center' />
				</body>
			</html>
		</>
	);
};

export default MainLayout;
