<script>
	import { titleStore } from '../store';
	import { Anchor, List, Paragraph } from '$lib';
	import Illustraion from '$lib/assets/psychohygiena.png';
	titleStore.set('Psychohygiena');
</script>

<Paragraph>
	Tato služba se zaobírá upevňováním duševního zdraví a zvyšováním klientovy odolnosti vůči širokému
	spektru škodlivých vlivů. Jedná se o praktické metody a techniky pro každodenní sebepéči o duševní
	zdraví a o nácviky a upevňování návyku relaxací pro zkvalitnění života.
</Paragraph>

<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph><span class="font-bold">Co konkrétně do této oblasti může patřit?</span></Paragraph>
		<List>
			<li>nácvik asertivity</li>
			<li>
				nácvik relaxačních technik (progresivní svalová relaxace, autogenní trénink, prvky
				muzikoterapie a arteterapie)
			</li>
			<li>nácvik dechových technik</li>
			<li>nácvik mindfulness technik a meditace</li>
			<li>řízená relaxace, aktivní imaginace a řízená vizualizace</li>
			<li>funkční životospráva</li>
			<li>konzultace pro studenty: psychohygiena v pozici psychologa</li>
		</List>
	</div>
	<div class="w-1/2 self-center xl:w-1/3">
		<img src={Illustraion} alt="Ilustracni obrazek" class="object-contain mx-auto" />
	</div>
</div>

<Paragraph>
	Ve své praxi využívám také prvky aromaterapie, konkrétně prostřednictvím kvalitních esenciálních
	olejů, které kapu do aromadifuzéru.
</Paragraph>
<Paragraph>
	Moje cílová skupina jsou dospělí lidé. Pracuji tedy s klienty, kteří již dosáhli plnoletosti.
	Výjimky pouze ve velice akutních případech po telefonické domluvě.
</Paragraph>
<Paragraph>
	Nevěnuji se rodinné a partnerské sféře, nepracuji s dětmi a s osobami se závažnými psychickými
	poruchami. Pracuji vždy pouze s jednotlivci.
</Paragraph>

<Paragraph>
	Ceník, podmínky a další informace naleznete <Anchor href="cenik">ZDE.</Anchor>
</Paragraph>
