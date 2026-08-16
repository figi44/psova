<script lang="ts">
	import { CardContainer, Heading2, Hero, StructuredData, TextLink } from '$lib';
	import PortraitImage from '$lib/assets/portrait1.png';
	import { homeStructuredData } from '$lib/seo';
	import type { CardData } from '$lib/types';

	const cards: CardData[] = [
		{
			title: 'Psychologické poradenství',
			linkHref: `poradenstvi`,
			icon: 'conversation'
		},
		{
			title: 'Hlubinně orientovaná psychoterapie',
			linkHref: `hlubinna-psychoterapie`,
			icon: 'depth'
		},
		{
			title: 'ACT terapie',
			linkHref: `act-terapie`,
			icon: 'compass'
		},
		{
			title: 'Koučink',
			linkHref: `koucink`,
			icon: 'growth'
		}
	];
</script>

<svelte:head>
	<title>PSOVA - Psychologické poradenství, terapie a koučink Ostrava</title>
	<link rel="preload" as="image" href={PortraitImage} type="image/png" />
</svelte:head>

<StructuredData data={homeStructuredData} />

<Hero
	title="Mgr. Kristýna Sznapková"
	quote="Výsadou života je stát se tím, kým skutečně jste."
	author="C. G. Jung"
	description="Psychologické poradenství, psychoterapie a koučink pro dospělé"
	buttonTitle="Objednejte se"
	imgPath={PortraitImage}
/>

<div class="relative flex h-28 w-full items-center justify-center" aria-hidden="true">
	<div
		class="absolute inset-x-[8%] h-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_68%)]"
	/>
	<div class="h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />
	<div
		class="absolute h-4 w-4 rounded-full border border-white/80 bg-xdarkgray shadow-[0_0_0_8px_rgba(255,255,255,0.10)]"
	/>
</div>

<section
	class="mt-4 w-full rounded-[30px] bg-white px-6 py-8 md:px-10"
	aria-labelledby="about-heading"
>
	<div id="about-heading"><Heading2>Kdo jsem?</Heading2></div>
	<div class="text-xdarkgray xl:leading-relaxed">
		<p>
			Ve zdravotnické praxi se v rámci rehabilitačního ústavu setkávám s pacienty po neurologických
			či kardiálních příhodách a ortopedických výkonech. Zaměřuji se primárně na diagnostiku
			kognitivních funkcí, věnuji se neuropsychologii a podpůrné psychologické péči. Za dveřmi
			soukromé poradny se věnuji dospělé klientele a rozmanitým radostem i strastem, které život
			přináší. Především se vynořují témata zvyšování odolnosti, nastavování hranic, efektivní
			komunikace, sebepéče, transformace jednotlivých životních období, mezilidské vztahy a
			individuační témata.
		</p>
	</div>
	<div class="mt-7 flex w-full justify-end">
		<TextLink href="o-mne">Chci vědět víc</TextLink>
	</div>
</section>

<CardContainer {cards} />
