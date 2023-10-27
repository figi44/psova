/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'custom-blue': '#BAE1FF',
				'custom-green': '#BAFFC9',
				'custom-purple': '#C9C9FF',
				'custom-pink': '#FFB3BA',
				'custom-orange': '#FFDFBA',
				'custom-yellow': '#FFFFBA'
			}
		}
	},
	plugins: []
};
