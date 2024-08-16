/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {	

		extend: {
			fontFamily: {
				sans: ['DM Mono', ...defaultTheme.fontFamily.mono],
			},
			aspectRatio: {
				'2/1': '2 / 1',
				'3/1': '3 / 1',
			},
		},
		colors: {
			'mgray': '#A6A6A6',
			'back': '#BEBEBE',
			'mtext': '#222222',
		},
	},
	plugins: [],
}
