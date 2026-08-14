<script>
	import { List, Paragraph, ServiceCTA } from '$lib';
	import Illustraion from '$lib/assets/psychohygiena.png';
</script>

<Paragraph>TBA</Paragraph>
<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph><span class="font-bold">Jakým způsobem hlubinná terapie pracuje:</span></Paragraph>

		<List>
			<li>Symbolická práce</li>
			<li>Obrazový materiál</li>
			<li>Aktivní imaginace</li>
			<li>Práce se sny</li>
			<li>Terapeutické pískoviště</li>
		</List>
	</div>
	<div class="w-1/2 self-center xl:w-1/3">
		<img
			src={Illustraion}
			alt="Ilustrace hlubinně orientované psychoterapie"
			width="1080"
			height="1080"
			loading="lazy"
			decoding="async"
			class="object-contain mx-auto"
		/>
	</div>
</div>

<Paragraph>
	Moje cílová skupina jsou dospělí lidé. Pracuji tedy s klienty, kteří již dosáhli plnoletosti.
	Výjimky pouze ve velice akutních případech po telefonické domluvě předem.
</Paragraph>

<Paragraph>
	Nevěnuji se rodinné a partnerské sféře, nepracuji s dětmi. Pracuji vždy pouze s jednotlivci.
</Paragraph>

<ServiceCTA duration="50 nebo 75 minut" price="od 1 000 Kč" />
