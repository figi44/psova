<script>
	import { Heading3, Paragraph } from '$lib';
	import { titleStore } from '../store';
	import Illustraion from '$lib/assets/diagnostika.png';
	titleStore.set('Psychodiagnostika');
</script>

<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph>
			Jedná se o zjišťování a měření duševních vlastností a stavů dle zadání klienta. Výhodou této
			služby je, že výsledky nejsou zaznamenávány do zdravotní dokumentace, protože nespolupracuji
			se zdravotními pojišťovnami.
		</Paragraph>
		<Paragraph>
			Diagnostika může být velice užitečný nástroj v případě, kdy například chce klient zjistit
			mezery ve svých manažerských schopnostech a dovednostech - jejich správná identifikace
			napomáhá ke zvolení nejefektivnějšího postupu k rozvoji.
		</Paragraph>
	</div>
	<div class="w-1/2 self-center xl:w-full">
		<img src={Illustraion} alt="Ilustracni obrazek" class="object-contain mx-auto" />
	</div>
</div>

<Heading3>Průběh spolupráce</Heading3>
<Paragraph>
	Nejprve si domluvíme zadavatelské sezení, kde se vzájemně blíže poznáme. Dále zvolíme
	nejoptimálnější baterii diagnostických metod a testů (tzv. diagnostická baterie) dle zadání
	klienta. Následovat bude série setkání, kdy se vytvořená diagnostická baterie bude vykonávat.
	Počet setkání záleží na náročnosti diagnostické baterie. Pak zpracuji výsledky, vyhodnotím je a
	následně vhodně vysvětlím data tak, aby byla klientem pochopena. V případě zájmu zhotovím také
	zprávu.
</Paragraph>

<Paragraph>
	O dalších možnostech a podrobnostech diagnostiky se informujte telefonicky nebo e-mailem.
</Paragraph>
