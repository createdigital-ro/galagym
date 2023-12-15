import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				basier: ['Basier Square', 'sans-serif'],
			},
			animation: {},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				hard: '1px 1px 0px 0px rgba(0,0,0,1)',
				'hard-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
				'hard-md': '4px 4px 0px 0px rgba(0,0,0,1)',
				'hard-lg': '6px 6px 0px 0px rgba(0,0,0,1)',
				'hard-xl': '10px 10px 0px 0px rgba(0,0,0,1)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
