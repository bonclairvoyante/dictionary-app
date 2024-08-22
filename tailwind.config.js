/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			container: {
				center: true
			},
			fontFamily: {
				monospace: ['Inconsolata Variable'],
				sans: ['Inter Variable'],
				serif: ['Lora Variable']
			}
		}
	},
	plugins:
		/* eslint-disable */
		[require('daisyui')],
	/* eslint-enable */
	daisyui: {
		themes: ['light', 'dark']
	}
};
