const path = require('path');
const sveltePreprocess = require('svelte-preprocess');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

const tailwind = require('vite-plugin-tailwind').default;

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: sveltePreprocess({
		defaults: {
			style: 'postcss'
		},
		postcss: true
	}),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: static(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			plugins: [
				tailwind({ jit: false, tailwind: require(path.join(__dirname, 'tailwind.config.cjs')) })
			],
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
