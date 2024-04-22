/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
			'sans-italic': ['DM Sans Italic', ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	plugins: [],
}
