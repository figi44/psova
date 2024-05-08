<script>
	import { Anchor, List, Paragraph } from '$lib';
	import { titleStore } from '../store';
	import Illustraion from '$lib/assets/skupiny.png';
	titleStore.set('Terapie');
</script>

<Paragraph>
	ACT terapie patří do třetí vlny kognitivně-behaviorálních terapií. Otevírá dveře ke svobodnějšímu
	a smysluplnějšímu životu. V něm není prostor pro soudy nebo hodnocení, pouze pro vaši autenticitu,
	změnu a růst. Společně se můžeme podívat na vaše vnitřní světy a najít způsoby, jak se vyrovnat s
	obtížemi a najít odstup od zatěžujících myšlenek. Naše práce je založena na principu přijetí a
	odhodlání (ACT), což znamená, že nebudeme bojovat s vašimi emocemi, ale naučíme se s nimi
	spolupracovat a žít s nimi v souladu. NA vaší cestě vám poskytnu podporu a nástroje, které
	potřebujete k tomu, abyste se cítili silní a propojení se svým vnitřním já.
</Paragraph>
<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph><span class="font-bold">Témata, která lze s ACT terapíí zvládnout:</span></Paragraph>

		<List>
			<li>Zmírnění úzkosti a stresu</li>
			<li>Zlepšení nálady a sebevědomí</li>
			<li>Posílení vztahů a komunikace</li>
			<li>Průchod životními změnami a krizemi</li>
			<li>Zvládání emocionálních výzev a traumat</li>
			<li>Sebereflexe a rozvoj osobnosti</li>
			<li>Navigace životními rozhodnutími a cestou k osobnímu růstu prostřednictvím hodnot</li>
		</List>
	</div>
	<div class="w-1/2 self-center xl:w-1/3">
		<img src={Illustraion} alt="Ilustracni obrazek" class="object-contain mx-auto" />
	</div>
</div>

<Paragraph>
	Moje cílová skupina jsou dospělí lidé. Pracuji tedy s klienty, kteří již dosáhli plnoletosti.
	Výjimky pouze ve velice akutních případech po telefonické domluvě předem.
</Paragraph>

<Paragraph>
	Nevěnuji se rodinné a partnerské sféře, nepracuji s dětmi a s osobami se závažnými psychickými
	poruchami. Pracuji vždy pouze s jednotlivci.
</Paragraph>

<Paragraph>
	Ceník, podmínky a další informace naleznete <Anchor href="cenik">ZDE.</Anchor>
</Paragraph>
