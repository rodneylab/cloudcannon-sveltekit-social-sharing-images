/** @type {import('./$types').PageLoad} */
export async function load() {
	const blogPosts = import.meta.glob('./**/*.svelte.md');

	/** @type {{path: string; metadata:{ title: string; date: string};}[]} */
	const posts = [];

	for await (const path of Object.keys(blogPosts)) {
		const slug = path.split('/').at(-2);
		const { metadata } = /** @type {{ metadata:{ title: string; date: string};}}*/ (
			await blogPosts[path]()
		);

		if (slug) {
			posts.push({ path: slug, metadata });
		}
	}

	return { posts };
}
