<script lang="ts">
	import { CardContainer, Hero } from '$lib';
	import PortraitImage from '$lib/assets/potrait1.jpg';

	let cards = [
		{
			title: 'Psychologické poradenství',
			text: 'Konzultace a činnost zaměřena na překonání aktuálních psychických problémů nebo konfliktních situací za pomocí psychologickcýh metod a prostředků.',
			linkText: '',
			linkHref: 'counselling',
			dotColor: 'bg-custom-pink'
		},
		{
			title: 'Koučink',
			text: 'Proces, kterým na základě vhodně a efektivně zvolených otázek kouč provází klienta ke stanovenému cíli.',
			linkText: '',
			linkHref: 'coaching',
			dotColor: 'bg-custom-orange'
		},
		{
			title: 'Psychohygiena',
			text: 'Upevňování duševního zdraví a zvyšování odolnosti klienta vůči široké škále škodlivých vlivů.',
			linkText: '',
			linkHref: '',
			dotColor: 'bg-custom-yellow'
		},
		{
			title: 'Psychodiagnostika',
			text: 'Zjišťování a měření duševních vlastností a stavů dle zadání klienta.',
			linkText: '',
			linkHref: '',
			dotColor: 'bg-custom-green'
		},
		{
			title: 'Edukace v oblasti duševního zdraví',
			text: 'Praktické metody a techniky pro všední den, přednášky pro školy i jednotlivce.',
			linkText: '',
			linkHref: '',
			dotColor: 'bg-custom-blue'
		},
		{
			title: 'Firemní aktivity',
			text: 'Individuálně nastavené balíčky na míru firmám a kolektivům pro podporu a prevenci duševního zdraví zaměstnanců.',
			linkText: '',
			linkHref: '',
			dotColor: 'bg-custom-purple'
		}
	];
</script>

<Hero
	title="lic. Kristýna Sznapková"
	subtitle="S pokorou pomáhám rozvíjet lidskou duši"
	buttonTitle="Objednejte se!"
	imgPath={PortraitImage}
/>
<CardContainer {cards} />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
