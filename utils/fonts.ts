import localFont from 'next/font/local';

export const basier = localFont({
	src: [
		{
			path: '../app/_fonts/basiersquare-bold-webfont.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../app/_fonts/basiersquare-semibold-webfont.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../app/_fonts/basiersquare-medium-webfont.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../app/_fonts/basiersquare-regular-webfont.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../app/_fonts/basiersquare-regularitalic-webfont.woff2',
			weight: '400',
			style: 'italic',
		},
	],
});
