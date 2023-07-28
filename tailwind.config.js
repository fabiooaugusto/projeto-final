/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			"white": "#ffffff",
			"orange": {
				"lightest":"#FFEDE0",
				"light":"#F3A46A"
			},
			"brown": {
				"light":"#613B36",
				"dark":"#311501"
			},
			"gray": {
				"light":"#C1C1C1",
				"dark":"#343434"
			},
		  },
	},
	plugins: [],
}
