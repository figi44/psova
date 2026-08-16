<script>
	import { List, Paragraph, ServiceCTA } from '$lib';
	import PoradenstviImg from '$lib/assets/poradenstvi.jpg';
</script>

<Paragraph>
	Psychologické poradenství je konzultace a činnost zaměřena na překonání aktuálních psychických
	problémů klientů nebo konfliktních situací za pomocí psychologickcýh metod a prostředků. Může se
	jednat o oblast kariéry (volba a změna povolání), rodiny, manželských a partnerských vztahů,
	školní a výchovnou nebo o oblast vztahu k sobě sama a rozvoje osobnosti.
</Paragraph>

<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph><span class="font-bold">Co konkrétně do této oblasti může patřit?</span></Paragraph>
		<List>
			<li>aktuální výskyt úzkostí před zkouškou nebo prezentací</li>
			<li>příprava na roli rodiče nebo prarodiče</li>
			<li>těžká rozhodnutí a složité životní křižovatky</li>
			<li>adaptace na situaci odchodu do důchodu</li>
			<li>změna povolání v produktivním věku</li>
			<li>pracovní zátěž a stres</li>
			<li>konfliktní situace</li>
			<li>otázky sebehodnoty a spirituality</li>
			<li>budování komunikačních dovedností</li>
			<li>seberozvojová témata (např. rozvíjení soft skills)</li>
			<li>ujasňování a hledání identity</li>
			<li>doprovázení na cestě za změnou pohlaví</li>
		</List>
	</div>
	<div class="w-1/2 self-center xl:w-1/3">
		<img
			src={PoradenstviImg}
			alt="Ilustrace psychologického poradenství"
			width="946"
			height="784"
			loading="lazy"
			decoding="async"
			class="object-contain mx-auto"
		/>
	</div>
</div>

<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph
			><span class="font-bold">Součástí služby je také psychohygiena, kam spadá:</span></Paragraph
		>
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
</div>

<Paragraph>
	Moje cílová skupina jsou dospělí lidé. Pracuji tedy s klienty, kteří již dosáhli plnoletosti.
</Paragraph>

<Paragraph>
	Nevěnuji se rodinné a partnerské sféře, nepracuji s dětmi a s osobami se závažnými psychickými
	poruchami. Pracuji vždy pouze s jednotlivci.
</Paragraph>

<ServiceCTA duration="50 nebo 75 minut" price="od 1 000 Kč" />
