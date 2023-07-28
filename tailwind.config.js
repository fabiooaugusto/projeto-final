/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white: '#ffffff',
			orange: {
				lightest: '#FFEDE0',
				light: '#F3A46A',
			},
			brown: {
				light: '#613B36',

				dark: '#311501',
			},
			gray: {
				lightest: '#C1C1C1',
				light: '#5c5c5c',
				dark: '#343434',
			},
		},
		fontFamily: {
			sans: ['Raleway', 'Arial', 'sans-serif'],
		},
		extend: {},
	},
	variants: {},
	plugins: [],
}
