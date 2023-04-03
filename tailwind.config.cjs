const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue': {
					light: '#303640',
					DEFAULT: '#20242B',
					dark: '#16191E',
				},
				'white': {
					DEFAULT: '#FFFFFF',
					off: '#ECECEC',
				}
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
