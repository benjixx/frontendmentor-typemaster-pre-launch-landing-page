module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class',
	theme: {
		screens: {
			tablet: '768px',
			desktop: '1440px'
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			orange: {
				light: '#ff9b62',
				DEFAULT: '#f16718'
			},
			blue: {
				light: '#7b8bad',
				dark: '#162542'
			},
			gray: {
				light: '#e8eff2'
			},
			white: '#fff'
		},
		fontFamily: {
			sans: ['Barlow', 'sans-serif']
		}
	}
};
