<script>
	/** @type string */
	export let className = '';
</script>

<nav>
	<ul class={className}>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a data-sveltekit-preload-data="hover" href="/blog">Blog</a></li>
	</ul>
</nav>

<style lang="scss">
	nav ul {
		list-style: none;
		padding: 3px 5px;
		background: #111;

		&.alt {
			background: blue;
		}

		a {
			color: #fff;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		li {
			display: inline;
		}
	}
</style>
