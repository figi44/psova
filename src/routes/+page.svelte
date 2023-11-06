<script lang="ts">
	import { CardContainer, Hero } from '$lib';
	import PortraitImage from '$lib/assets/portrait1.png';

	let cards = [
		{
			title: 'Psychologické poradenství',
			text: 'Konzultace a činnost zaměřena na překonání aktuálních psychických problémů nebo konfliktních situací za pomocí psychologickcýh metod a prostředků.',
			linkText: '',
			linkHref: 'poradenstvi'
		},
		{
			title: 'Koučink',
			text: 'Proces, kterým na základě vhodně a efektivně zvolených otázek kouč provází klienta ke stanovenému cíli.',
			linkText: '',
			linkHref: 'koucink'
		},
		{
			title: 'Psychohygiena',
			text: 'Upevňování duševního zdraví a zvyšování odolnosti klienta vůči široké škále škodlivých vlivů.',
			linkText: '',
			linkHref: 'psychohygiena'
		},
		{
			title: 'Psychodiagnostika',
			text: 'Zjišťování a měření duševních vlastností a stavů dle zadání klienta.',
			linkText: '',
			linkHref: 'psychodiagnostika'
		},
		{
			title: 'Podpůrné skupiny',
			text: 'Praktické metody a techniky pro všední den, přednášky pro školy i jednotlivce.',
			linkText: '',
			linkHref: 'skupiny'
		},
		{
			title: 'Firemní aktivity',
			text: 'Individuálně nastavené balíčky na míru firmám a kolektivům pro podporu a prevenci duševního zdraví zaměstnanců.',
			linkText: '',
			linkHref: 'firmy'
		}
	];
</script>

<Hero
	title="lic. Kristýna Sznapková"
	subtitle="S pokorou pomáhám rozvíjet lidskou duši."
	buttonTitle="Objednejte se"
	imgPath={PortraitImage}
/>
<CardContainer {cards} />
