import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Announcement from './_components/Announcement';
import Navigation from './_components/Navigation';

const basier = localFont({
	src: [
		{
			path: './fonts/basiersquare-bold-webfont.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/basiersquare-medium-webfont.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/basiersquare-regular-webfont.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/basiersquare-regularitalic-webfont.woff2',
			weight: '400',
			style: 'italic',
		},
	],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={basier.className}>
				<Announcement message='Programul nostru de sarbatori' />
				<Navigation />
				{children}
			</body>
		</html>
	);
}
