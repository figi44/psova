<script lang="ts">
	import { Paragraph, Heading3, Anchor } from '$lib';
	import { titleStore } from '../store';
	let services = [
		{
			name: 'Psychologická konzultace standard',
			length: '50 minut',
			price: '1000,-'
		},
		{
			name: 'Psychologická konzultace prodloužená',
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
			name: 'Podpůrná skupina',
			length: '60 minut',
			price: '150,-'
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
<Paragraph>
	Všechny služby jsou poskytovány bez záměrného terapeutického účinku, neboť nejsem terapeut.
	Terapeuticky však někdy může působit jen to, že se člověk svěří nezúčastněné osobě - v takovém
	případě nenesu za terapeutický efekt žádnou odpovědnost.
</Paragraph>
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

<Heading3>Jak platit?</Heading3>
<Paragraph>
	Za úvodní konzultaci nebo koučink je vyžadována platba na účet dva dny předem. Za každou další
	konzultaci nebo koučink se platí vždy na konci aktuální konzultace nebo koučinku, a to buď hotově
	nebo prostřednictvím poskytnutého QR kódu.
</Paragraph>
<Paragraph>Do poznámky, prosím, vždy uvádějte Vaše příjmení.</Paragraph>
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
	>.</Paragraph
>
<Paragraph>
	Při kontaktování prostřednictvím SMS zprávy nebo e-mailu uveďte pro rychlejší domluvu do poptávky
	preferovaný den v týdnu a také preferovanou denní dobu (dopoledne/odpoledne). V co nejkratší možné
	době se Vám ozvu zpět s nabídkou termínů. Až si je potvrdíme, zašlu také platební údaje.
</Paragraph>
<Paragraph>
	Pokud telefon nebudu zvedat, pravděpodobně se věnuji klientovi. Prosím, zavolejte znovu později.
</Paragraph>
