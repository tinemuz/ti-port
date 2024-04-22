/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
			'sans-italic': ['DM Sans Italic', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			aspectRatio: {
				'2/1': '2 / 1',
				'3/1': '3 / 1',
			},
		},
	},
	plugins: [],
}
