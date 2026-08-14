<script lang="ts">
	import { CardContainer, Heading2, Hero, TextLink } from '$lib';

	import PortraitImage from '$lib/assets/portrait1.png';
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
</svelte:head>

<Hero
	title="Mgr. Kristýna Sznapková"
	subtitle="S pokorou pomáhám rozvíjet lidskou duši."
	buttonTitle="Objednejte se"
	imgPath={PortraitImage}
/>

<section
	class="mt-16 w-full rounded-[30px] bg-white px-6 py-8 md:px-10"
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
