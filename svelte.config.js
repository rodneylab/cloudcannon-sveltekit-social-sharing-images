import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svelte.md'],
			layout: 'src/lib/components/blog/post.svelte'
		}),
		preprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
