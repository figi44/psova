<script>
	import { Footer, NavBar } from '$lib';

	let navButtonData = [
		{ title: 'služby', href: 'sluzby' },
		{ title: 'o mně', href: 'o-mne' },
		{ title: 'ceník', href: 'cenik' },
		{ title: 'akutní problémy', href: 'akutni-problemy' },
		{ title: 'faq', href: 'faq' },
		{ title: 'kontakt', href: 'kontakt' }
	];
</script>

<div class="max-w-[1120px] mx-auto">
	<NavBar buttonData={navButtonData} />
	<slot />
	<Footer />
</div>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet" />
</svelte:head>

<style lang="postcss">
	:global(html) {
		background: var(
			--background,
			linear-gradient(180deg, #a192c8 0%, #dfdfdf 99.47%, #dfdfdf 99.48%)
		);
		font-family: 'play';
	}
</style>
