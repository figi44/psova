<script lang="ts">
	export let data: Record<string, unknown>;

	const scriptTag = 'script';
	$: json = JSON.stringify(data).replace(/</g, '\\u003c');
	$: markup = `<${scriptTag} type="application/ld+json">${json}</${scriptTag}>`;
</script>

<svelte:head>
	<!-- JSON-LD values are repository constants and "<" is escaped before injection. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html markup}
</svelte:head>
