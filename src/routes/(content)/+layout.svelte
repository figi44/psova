<script lang="ts">
	import { page } from '$app/stores';
	import { Footer, NavBar, StructuredData } from '$lib';
	import { contentStructuredData } from '$lib/seo';

	const pageMetadata: Record<string, { heading: string; title: string }> = {
		'act-terapie': {
			heading: 'ACT terapie',
			title: 'ACT terapie Ostrava | PSOVA'
		},
		cenik: {
			heading: 'Ceník',
			title: 'Ceník a podmínky spolupráce | PSOVA'
		},
		'hlubinna-psychoterapie': {
			heading: 'Hlubinně orientovaná psychoterapie',
			title: 'Hlubinně orientovaná psychoterapie | PSOVA'
		},
		hodnoty: {
			heading: 'Hodnoty',
			title: 'Hodnoty | PSOVA'
		},
		kontakt: {
			heading: 'Kontakt',
			title: 'Kontakt a psychologická poradna Ostrava | PSOVA'
		},
		koucink: {
			heading: 'Koučink',
			title: 'Koučink Ostrava | PSOVA'
		},
		'o-mne': {
			heading: 'O mně',
			title: 'Mgr. Kristýna Sznapková – psycholožka Ostrava | PSOVA'
		},
		poradenstvi: {
			heading: 'Psychologické poradenství',
			title: 'Psychologické poradenství Ostrava | PSOVA'
		}
	};
	const fallbackMetadata = { heading: 'PSOVA', title: 'PSOVA' };

	$: routeName = $page.url.pathname.split('/').filter(Boolean).at(-1) ?? '';
	$: metadata = pageMetadata[routeName] ?? fallbackMetadata;
	$: structuredData = contentStructuredData(routeName, metadata.heading);
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<StructuredData data={structuredData} />

<NavBar initialBg="bg-xlavender" />
<header class="bg-xlavender">
	<div class="mx-auto w-[90%] max-w-[1120px]">
		<h1
			class="py-10 text-center text-[40px] font-bold leading-[1.1] text-white md:py-12 md:text-[56px]"
		>
			{metadata.heading}
		</h1>
	</div>
</header>
<main class="mx-auto w-[90%] max-w-[1120px] pt-10 md:pt-12">
	<slot />
</main>
<div class="background pt-20 md:pt-24">
	<div class="mx-auto w-[90%] max-w-[1120px]">
		<Footer />
	</div>
</div>

<style global>
	.background {
		background: var(--background, linear-gradient(180deg, white 0%, #dfdfdf 100%));
	}
</style>
