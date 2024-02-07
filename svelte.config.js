import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		generate: "dom",
	},
	kit: {
		// https://kit.svelte.dev/docs/adapters
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: 'index.html',
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
