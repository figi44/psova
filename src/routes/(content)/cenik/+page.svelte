<script lang="ts">
	import { Anchor, CTAButton, Heading3, Paragraph } from '$lib';
	import BenefitPlusLogo from '$lib/assets/benefit-plus-logo.png';
	import dohodaImage from '$lib/assets/dohoda.pdf';
	import EbenefityLogo from '$lib/assets/ebenefity-logo.png';
	import gdprImage from '$lib/assets/gdpr.pdf';
	import { titleStore } from '../store';

	const services = [
		{
			name: 'Psychologické poradenství, terapie, psychohygiena',
			length: '50 minut',
			price: '1 000 Kč'
		},
		{
			name: 'Psychologické poradenství, terapie, psychohygiena',
			length: '75 minut',
			price: '1 500 Kč'
		},
		{
			name: 'Koučink standard',
			length: '60 minut',
			price: '1 200 Kč'
		},
		{
			name: 'Koučink prodloužený',
			length: '80 minut',
			price: '1 600 Kč'
		},
		{
			name: 'Zpráva z konzultací na žádost klienta',
			length: 'zhotovení do 7 dní',
			price: '800 Kč'
		}
	];

	titleStore.set('Ceník');
</script>

<div class="grid gap-4 md:hidden">
	{#each services as service}
		<div class="rounded-[24px] bg-xlavender/10 p-5">
			<h2 class="font-bold leading-tight">{service.name}</h2>
			<div class="mt-4 flex items-end justify-between gap-4">
				<p class="text-sm text-xdarkgray">{service.length}</p>
				<p class="text-lg font-bold">{service.price}</p>
			</div>
		</div>
	{/each}
</div>

<div
	class="hidden w-full overflow-hidden rounded-[24px] border border-xlavender/30 text-lg md:block"
>
	<table class="min-w-full table-auto text-left">
		<thead class="bg-xlavender/10">
			<tr class="border-b border-xlavender/40">
				<th class="px-5 py-4">Služba</th>
				<th class="px-5 py-4">Délka sezení</th>
				<th class="px-5 py-4 text-right">Cena</th>
			</tr>
		</thead>
		<tbody>
			{#each services as service}
				<tr class="border-b border-xlavender/20 last:border-b-0 even:bg-xlavender/5">
					<td class="p-5">{service.name}</td>
					<td class="p-5">{service.length}</td>
					<td class="p-5 text-right font-bold">{service.price}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div
	class="mt-8 flex flex-col items-start gap-3 rounded-[24px] bg-xlavender/10 p-6 sm:flex-row sm:items-center sm:justify-between"
>
	<div>
		<p class="font-bold">Vyberte si termín, který vám vyhovuje</p>
		<p class="mt-1 text-sm text-xdarkgray">Volné termíny uvidíte přímo v rezervačním systému.</p>
	</div>
	<CTAButton title="Objednejte se" />
</div>

<Paragraph>
	Uvedené služby jsou poskytovány za přímou úhradu (nejsem plátce DPH). Vzhledem k tomu, že nejsem
	klinický psycholog, nepracuji v režimu zdravotní péče hrazené pojišťovnami. Tento model spolupráce
	je však pro klienta v mnoha ohledech výhodnější:
</Paragraph>
<ul class="list-inside list-disc ml-4 text-lg">
	<li>
		<span class="font-bold">Absence záznamů v lékařské kartě:</span> Informace o průběhu konzultací jsou
		důvěrné a nejsou přístupné třetím stranám.
	</li>
	<li>
		<span class="font-bold">Jednoduchost:</span> Odpadá nutnost vyřizovat žádanky u specialistů.
	</li>
	<li>
		<span class="font-bold">Flexibilita:</span> Kratší čekací lhůty na termíny než v klinické praxi
	</li>
	<li>
		<span class="font-bold">Efektivita:</span> Finanční spoluúčast klienta je silným motivačním prvkem,
		který prokazatelně urychluje terapeutický proces.
	</li>
</ul>
<Paragraph italic>
	Studentům a lidem v tíživé situaci poskytuji po pečlivém zvážení a předchozí domluvě slevu.
</Paragraph>

<h2 class="text-black font-bold text-3xl mt-8 mb-4 leading-[115%]">
	Podmínky spolupráce a praktické informace
</h2>
<Paragraph
	>Cesta k efektivní terapeutické i koučovací práci vede přes vzájemnou důvěru a respekt k
	dohodnutým pravidlům. Tento jasně nastavený rámec nám umožňuje vytvořit bezpečný a profesionální
	prostor pro naši spolupráci, kterou poskytuji výhradně formou <span class="font-bold"
		>osobního setkání.</span
	></Paragraph
>

<Heading3>Objednání a první kontakt</Heading3>
<Paragraph>
	Nejefektivnějším způsobem pro výběr termínu je <Anchor
		href="https://reenio.cz/cs/redirect/reservationpage/24992"
		external
		cls="underline">on-line rezervační systém</Anchor
	>, kde získáte okamžitý přehled o aktuálně volných termínech.
</Paragraph>

<ul class="list-inside list-disc ml-4 text-lg">
	<li>
		<span class="font-bold">Individuální domluva:</span> Pokud v systému nenajdete vyhovující termín,
		můžete mě kontaktovat e-mailem, SMS zprávou nebo telefonicky.
	</li>
	<li>
		<span class="font-bold">Pokud telefon nezvedám:</span> Pravděpodobně se právě věnuji jinému klientovi.
		Prosím, napište mi SMS nebo e-mail, ozvu se vám zpět, jakmile to bude možné.
	</li>
</ul>

<Heading3>První setkání a terapeutický rámec</Heading3>
<Paragraph>
	Během úvodní konzultace se vzájemně seznámíme a představím vám svůj způsob práce. Společně
	zmapujeme vaši situaci a stanovíme cíle, kterých chcete dosáhnout. Součástí je i nezbytná
	administrativa (<Anchor href={gdprImage} external
		>Souhlas se zpracováním osobních údajů - GDPR</Anchor
	> a <Anchor href={dohodaImage} external>Dohoda o podmínkách spolupráce</Anchor>). Na základě
	tohoto setkání zvolíme nejvhodnější formu další péče
</Paragraph>

<Heading3>Frekvence a délka spolupráce</Heading3>
<Paragraph>
	Frekvenci setkávání domlouváme individuálně podle vašich potřeb a témat - naše spolupráce může mít
	formu jednorázové konzultace i dlouhodobého provázení. Nejste vázáni konkrétním počtem sezení a
	spolupráci lze kdykoliv ukončit, ovšem s vědomím, že pro efektivní proces je důležitá jeho
	kontinuita. V případě ukončení proto doporučuji věnovat poslední setkání společnému závěrečnému
	shrnutí a uzavření naší práce.</Paragraph
>

<Heading3>Platební podmínky</Heading3>
<Paragraph>Jako neplátce DPH uvádím ceny konečné.</Paragraph>
<ul class="list-inside list-disc ml-4 text-lg">
	<li>
		<span class="font-bold">Standardní úhrada:</span> Konzultace jsou hrazeny
		<span class="font-bold">předem bankovním převodem</span>. Termín je závazně rezervován po
		připsání platby na účet (nejpozději 2 pracovní dny před setkáním).
	</li>
	<li>
		<span class="font-bold">Dlouhodobá spolupráce:</span> U stálých klientů je po vzájemné dohodě možná
		platba přímo na místě (hotově nebo přes QR kód).
	</li>
	<li>
		<span class="font-bold">Benefity:</span> Přijímám karty Benefit+ a eBenefity. Platbu lze provést
		on-line objednávkou předem, nebo prostřednictvím on-line platebního systému přímo v poradně. U úvodní
		konzultace preferuji úhradu předem.
	</li>
</ul>

<div class="flex flex-col gap-10 justify-start items-start md:flex-row mx-8 mt-6">
	<img class="h-8 object-contain max-w-min" src={BenefitPlusLogo} alt="Benefit+ logo" />
	<img class="bg-slate-700 h-8 object-contain max-w-min" src={EbenefityLogo} alt="eBenefity logo" />
</div>

<Heading3>Storno podmínky (Změna a zrušení termínu)</Heading3>
<Paragraph>
	Váš čas i můj čas je cenný. Pokud se na setkání nemůžete dostavit, dejte mi vědět co nejdříve.
</Paragraph>
<ul class="list-inside list-disc ml-4 text-lg">
	<li>
		<span class="font-bold">Více než 24 hodin předem:</span> Zrušení či změna termínu je zdarma (platba
		bude převedena na další termín nebo vrácena).
	</li>
	<li>
		<span class="font-bold">Méně než 24 hodin předem:</span> Účtuji storno poplatek ve výši
		<span class="font-bold">80 %</span> z ceny konzultace.
	</li>
	<li>
		<span class="font-bold">Neomluvená absence:</span> Uhrazená částka propadá v plné výši (<span
			class="font-bold">100 %</span
		>) na pokrytí nákladů na rezervovaný čas.
	</li>
	<li>
		<span class="font-bold">Pozdní příchod:</span> Čas sezení nelze z organizačních důvodů prodloužit,
		cena však zůstává v plné výši.
	</li>
	<li>
		<span class="font-bold">Vzájemná férovost:</span> Pokud zruším termín méně než 24 hodin předem
		nebo se na setkání dostavím se zpožděním, poskytnu vám na příští konzultaci
		<span class="font-bold">slevu ve výši 40 %</span>.
	</li>
</ul>

<Heading3>Etika, důvěrnost a hranice</Heading3>
<ul class="list-inside list-disc ml-4 text-lg">
	<li>
		<span class="font-bold">Kvalita a etika:</span> Pracuji pod pravidelnou odbornou supervizí a řídím
		se etickými kodexy odborných organizací (ČMPS, AIK, ACT+ a ČSAP).
	</li>
	<li>
		<span class="font-bold">Mlčenlivost:</span> Veškeré informace sdílené v rámci konzultací jsou přísně
		důvěrné (s výjimkou zákonné ohlašovací povinnosti).
	</li>
	<li>
		<span class="font-bold">Komunikace:</span> SMS a e-maily využíváme výhradně k organizačním účelům
		(termíny, platby). Obsahová práce probíhá pouze při osobním setkání.
	</li>
	<li>
		<span class="font-bold">Krizová pomoc:</span> Neposkytuji nonstop krizovou intervenci. V případě
		akutní nouze se prosím obraťte na linky důvěry nebo krizová centra.
	</li>
</ul>
