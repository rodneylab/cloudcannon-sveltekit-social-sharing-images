<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let { posts } = data;
	$: ({ posts } = data);
</script>

<h1>Blog</h1>

<ul>
	{#each posts.reverse() as { path, metadata: { title, date } }}
		<li>
			<a data-sveltekit-preload-data="hover" href="/blog/{path}">{title}</a> — {date}
		</li>
	{/each}
</ul>
