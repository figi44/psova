<script lang="ts">
	import GDPRImg from '$lib/assets/gdpr.pdf';
	import EbenefityLogo from '$lib/assets/ebenefity-logo.png';
	import BenefitPlusLogo from '$lib/assets/benefit-plus-logo.png';
	import { Paragraph, Heading3, Anchor } from '$lib';
	import { titleStore } from '../store';
	let services = [
		{
			name: 'Psychologické poradenství, terapie, psychohygiena',
			length: '50 minut',
			price: '1000,-'
		},
		{
			name: 'Psychologické poradenství, terapie, psychohygiena',
			length: '75 minut',
			price: '1500,-'
		},
		{
			name: 'Koučink standard',
			length: '60 minut',
			price: '1200,-'
		},
		{
			name: 'Koučink prodloužený',
			length: '80 minut',
			price: '1600,-'
		},
		{
			name: 'Zpráva z konzultací na žádost klienta',
			length: 'zhotovení do 7 dní',
			price: '800,-'
		},
		{
			name: 'Diagnostika',
			length: '-',
			price: 'cena dle zadání'
		}
	];

	titleStore.set('Ceník');
</script>

<div class="w-full text-lg">
	<table class="min-w-full table-auto text-left lg:whitespace-nowrap">
		<thead>
			<tr class="border-b border-xlavender">
				<th class="py-2 px-4">Služba</th>
				<th class="py-2 px-4">Délka sezení</th>
				<th class="py-2 px-4 text-right">Cena</th>
			</tr>
		</thead>
		<tbody>
			{#each services as service}
				<tr class="even:bg-gray-100">
					<td class="p-4">{service.name}</td>
					<td class="p-4">{service.length}</td>
					<td class="p-4 text-right">{service.price}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<Paragraph>Nejsem plátce DPH, cenu tedy o DPH nenavyšuji.</Paragraph>
<Paragraph>Cena on-line konzultací a koučování je shodná s cenou za osobní konzultaci.</Paragraph>
<Paragraph>
	Cena programů a balíčků aktivit pro firmy bude stanovena na základě rozsahu dohodnutých služeb.
	Platba na fakturu možná.
</Paragraph>
<Paragraph>
	Nejsem smluvním zařízením zdravotních pojišťoven, neboť nejsem klinický psycholog a neposkytuji
	služby v rámci zdravotní péče. Pro Vás to znamená, že nemáte záznam ve zdravotní kartě, na úvodní
	konzultaci je kratší čekací doba a je zajištěna anonymita.
</Paragraph>
<Paragraph>Pro osoby v tíživé finanční situaci a pro studenty možnost slevy.</Paragraph>

<Heading3>Změna či zrušení termínu</Heading3>

<div class="text-lg lg:w-2/3">
	<table class="table-auto min-w-full text-left lg:whitespace-nowrap">
		<tbody>
			<tr>
				<td class="px-4">Zrušení nebo změna více než 24h předem</td>
				<td class="align-top">poplatek 0,- Kč</td>
			</tr>
			<tr>
				<td class="px-4">Zrušení nebo změna méně než 24h předem</td>
				<td class="align-top">poplatek 80% z ceny</td>
			</tr>
			<tr>
				<td class="px-4">Neomluvená absence</td>
				<td class="align-top">poplatek 100% z ceny</td>
			</tr>
		</tbody>
	</table>
</div>
<Paragraph>Objednáním a čerpáním služeb se zavazujete k plnění uvedených podmínek.</Paragraph>

<Heading3>Jak platit?</Heading3>
<Paragraph>
	Za úvodní konzultaci nebo koučink je vyžadována platba na účet dva dny předem. Za každou další
	konzultaci nebo koučink se platí vždy na konci aktuální konzultace nebo koučinku, a to buď hotově
	nebo prostřednictvím poskytnutého QR kódu. <span class="font-bold"
		>Do poznámky, prosím, vždy uvádějte Vaše příjmení.</span
	>
</Paragraph>
<Paragraph>
	Konzultace lze hradit také z programů Benefit+ a eBenefity. Při úhradě benefity lze využít
	terminálu nebo on-line platby.
</Paragraph>
<div class="flex flex-col gap-10 justify-start items-start md:flex-row mx-8">
	<img class="h-8 object-contain max-w-min" src={BenefitPlusLogo} alt="Benefit+ logo" />
	<img class="bg-slate-700 h-8 object-contain max-w-min" src={EbenefityLogo} alt="eBenefity logo" />
</div>
<Paragraph>
	Pro dlouhodobé klienty možnost platit jednou za určitou dohodnutou dobu prostřednictvím faktury.
</Paragraph>
<Paragraph bold>
	Jako poskytovatel služeb si vyhrazuji právo s nesolidními klienty ukončit spolupráci.
</Paragraph>
<Paragraph bold>Všem zodpovědným klientům děkuji za pochopení a zodpovědnost.</Paragraph>
<Heading3>Frekvence a počet setkání</Heading3>
<Paragraph>
	Frekvence setkávání se domlouvá individuálně podle tématu, které chcete řešit, nebo dle Vaší
	potřeby. Nejčastější počáteční frekvence u poradenství je obvykle 1x za 3-4 týdny. Může to však
	být častěji a nebo naopak méně často. U koučinku je nejčastěji volená počáteční frekvence
	setkávání 1x za 14 dní.
</Paragraph>
<Paragraph>
	Poradenství stejně jako koučink může být jednorázovou záležitostí. Všechny typy služeb mohou být
	nastaveny jako krátkodobé, střednědobé nebo dlouhodobé provázení. Tím, že ke mně přijdete, se
	nezavazujete k počtu ani konkrétní frekvenci setkání. Vždy záleží na Vaší potřebě. Můžete
	absolvovat tolik setkání, kolik Vám bude připadat prospěšných.
</Paragraph>
<Heading3>Objednání</Heading3>
<Paragraph
	>Objednat se lze telefonicky, SMS zprávou, e-mailem nebo prostřednictvím <Anchor href="kontakt"
		>kontaktního formuláře</Anchor
	>. V případě úhrady prostřednictvím benefitních služeb je potřeba se předem domluvit na termínu.</Paragraph
>
<Paragraph>
	Při kontaktování prostřednictvím SMS zprávy nebo e-mailu uveďte pro rychlejší domluvu do poptávky
	preferovaný den v týdnu a také preferovanou denní dobu (dopoledne/odpoledne). V co nejkratší možné
	době se Vám ozvu zpět s nabídkou termínů. Až si je potvrdíme, zašlu také platební údaje.
</Paragraph>
<Paragraph>
	Pokud telefon nebudu zvedat, pravděpodobně se věnuji klientovi. Prosím, zavolejte znovu později.
</Paragraph>
<Heading3>První setkání</Heading3>
<Paragraph
	>Během prvního setkání si stanovíme podmínky spolupráce, seznámím Vás s tím, kdo jsem, jak pracuji
	a také dostanete k podpisu <Anchor href={GDPRImg} external
		>Souhlas se zpracováním osobních údajů (GDPR)</Anchor
	>. Následně bude prostor pro Váš příběh, pro stanovení cílů spolupráce a vybrání nejvhodnější
	služby.</Paragraph
>
