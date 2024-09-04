import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	darkMode: 'class',
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
	daisyui: {
		themes: ['light', 'black']
	},
	plugins: [daisyui]
};
