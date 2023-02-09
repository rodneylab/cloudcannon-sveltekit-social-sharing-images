<script>
	/** @type string */
	export let description;

	/** @type string */
	export let date;

	/** @type string */
	export let image_alt;

	/** @type string */
	export let last_updated;

	/** @type string */
	export let og_image;

	/** @type string */
	export let slug;

	/** @type string */
	export let title;

	const url = `https://example.com/blog/${slug}`;

	const schemaOrgWebPage = {
		'@type': 'WebPage',
		'@id': `${url}#webpage`,
		url,
		name: title,
		isPartOf: {
			'@id': 'https://example.com/#website'
		},
		datePublished: date,
		dateModified: last_updated,
		author: {
			'@id': 'https://example.com/#/schema/person/#author'
		},
		description,
		inLanguage: 'en',
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [url]
			}
		]
	};

	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': [schemaOrgWebPage]
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:site_name" content="Svelte’s Homepage" />
	<meta property="og:locale" content="en" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={og_image} />
	<meta property="og:image:alt" content={image_alt} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	
	{@html jsonLdScript}
</svelte:head>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
