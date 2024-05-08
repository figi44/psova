<script>
	import { Anchor, List, Paragraph } from '$lib';
	import KoucinkImg from '$lib/assets/koucink.png';
	import { titleStore } from '../store';
	titleStore.set('Koučink');
</script>

<Paragraph>
	Koučink je proces, kterým na základě vhodně a efektivně zvolených otázek kouč provází klienta ke
	stanovenému cíli. Kouč není trenér, poradce ani mentor. Je v naprosto neexpertní roli a je
	klientovi pouze nápomocen na jeho cestě.
</Paragraph>

<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph>
			<span class="font-bold"> Pomocí koučinku lze řešit například následující témata:</span>
		</Paragraph>
		<List>
			<li>Seberozvoj a osobní růst</li>
			<li>Sebepoznání</li>
			<li>Výkon</li>
			<li>Kariéra</li>
			<li>Rozhodování</li>
			<li>Plánování a organizace času</li>
			<li>Osobní a pracovní management</li>
			<li>Životní měna</li>
			<li>Pozitivní uvažování</li>
			<li>Řešení problémů</li>
			<li>Nalezení směru a motivace</li>
			<li>Tápání v životě a životní nespokojenost</li>
		</List>
	</div>
	<div class="w-1/2 self-center xl:w-1/3">
		<img src={KoucinkImg} alt="Ilustracni obrazek" class="object-contain mx-auto" />
	</div>
</div>

<Paragraph>
	Ve své praxi využívám techniky různých koučovacích, psychologických a terapeutických směrů. Jsem
	absolventkou výcviku INTECO.
</Paragraph>
<Paragraph>
	Doporučená frekvence koučování je 1x za 14 dní, aby mohl klient integrovat nastavené cíle a
	poznatky do svého života. Zároveň je vhodné, aby spolupráce trvala 3 měsíce a více.
</Paragraph>
<Paragraph>
	Moje cílová skupina jsou dospělí lidé. Pracuji tedy s klienty, kteří již dosáhli plnoletosti.
	Výjimky pouze po telefonické domluvě předem.
</Paragraph>
<Paragraph>
	Ceník, podmínky a další informace naleznete <Anchor href="cenik">ZDE.</Anchor>
</Paragraph>
