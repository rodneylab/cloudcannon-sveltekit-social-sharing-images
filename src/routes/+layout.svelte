<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '$lib/styles/global.scss';
</script>

<main>
	<h1>Svelte’s space</h1>
	<Nav className="alt" />
	<slot />
</main>
<Footer />
