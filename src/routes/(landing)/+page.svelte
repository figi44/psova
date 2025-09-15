<script lang="ts">
	import { Anchor, CardContainer, Heading2, Hero, TextLink } from '$lib';
	import PaspartaLogo from '$lib/assets/pasparta.png';
	import PortalLogo from '$lib/assets/portal.png';
	import PortraitImage from '$lib/assets/portrait1.png';

	let cards = [
		{
			title: 'Psychologické poradenství',
			text: 'Prozkoumejte hlubiny své mysli a objevte nové perspektivy prostřednictvím psychologického poradenství, které vám pomůže porozumět sobě samým a nastoupit na cestu řešení problémů a seberozvoje.',
			linkText: '',
			linkHref: `poradenstvi`
		},
		{
			title: 'Terapie',
			text: 'Objevte sílu přijetí a odhodlání skrze terapii založenou na principu ACT, která vám pomůže překonat překážky a žít hodnotnější a smysluplnější život.',
			linkText: '',
			linkHref: `terapie`
		},
		{
			title: 'Koučink',
			text: 'Získejte podporu a povzbuzení k dosažení svých cílů skrze koučink, který kombinuje empatické naslouchání, motivování a neexpertní přístup k dosažení vašeho plného potenciálu.',
			linkText: '',
			linkHref: `koucink`
		},
		{
			title: 'Psychohygiena',
			text: 'Obnovte svou duševní pohodu a balanc díky psychohygieně, která posiluje vaši mentální odolnost a pomáhá vám snáze zvládat každodenní výzvy a stres.',
			linkText: '',
			linkHref: `psychohygiena`
		},
		{
			title: 'Psychodiagnostika',
			text: 'Odhalte skryté rozměry vašeho chování a prožívání prostřednictvím precizní psychodiagnostiky, která vám umožní lépe porozumět sobě samým a efektivněji dosáhnout cílů spolupráce.',
			linkText: '',
			linkHref: `psychodiagnostika`
		},
		{
			title: 'Firemní aktivity',
			text: 'Rozvíjejte sílu a jedinečnost svého týmu skrze aktivity šité na míru, které podnítí kreativitu, inovaci a komunikaci pro prevenci syndromu vyhoření.',
			linkText: '',
			linkHref: `firmy`
		}
	];
</script>

<svelte:head>
	<title>PSOVA - Psychologické poradenství, terapie a koučink Ostrava</title>
</svelte:head>

<Hero
	title="Mgr. Kristýna Sznapková"
	subtitle="S pokorou pomáhám rozvíjet lidskou duši."
	buttonTitle="Objednejte se"
	imgPath={PortraitImage}
/>
<div class="bg-white rounded-[30px] w-full px-10 py-8 mt-60 mb-28">
	<Heading2>Kdo jsem?</Heading2>
	<div class="xl:flex justify-between text-xdarkgray">
		<p class="xl:w-5/12 text-justify xl:leading-relaxed">
			Svou kariéru jsem začala jako vývojář software. Během své cesty jsem vystřídala ohromné
			množství pozic a dlouho jsem nemohla najít takovou, která by mne opravdu bavila a naplňovala.
			Při manažerském postu jsem zjistila, že naslouchání lidem a jejich vedení je mi velmi blízké.
			Díky vzdělávání zaměstnanců jsem se dotkla základů psychologie, které mi naprosto učarovaly, a
			já se rozhodla nastoupit na univerzitu. Postupně jsem se tak propracovala k vývoji lidské
			duše, protože komunikace s lidmi je mi mnohem bližší než komunikace se stroji. Lidské příběhy
			jsou jako hvězdy ve vesmíru - každá je jiná a každá je unikátní.
		</p>
		<p class="xl:w-5/12 mt-3 xl:mt-0 text-justify xl:leading-relaxed">
			Proto ke každému klientovi zaujímám individuální přístup plný pokory a respektu. Ve své praxi
			čerpám kromě univerzitních poznatků také ze zkušeností z předchozího pracovního poměru. Dále
			se neustále vzdělávám formou kurzů a workshopů. Díky nekonečnému přísunu nové literatury takto
			obohacuji své obzory o nové techniky, metody a informace. Aktivně se věnuji dobrovolnickým
			aktivitám v oblasti psychologie. Docházím pravidelně na supervize a terapie.
		</p>
	</div>
	<div class="w-full flex justify-end mt-5">
		<TextLink href="o-mne">Chci vědět víc</TextLink>
	</div>
</div>
<CardContainer {cards} />
<div class="bg-white rounded-[30px] w-full px-10 py-8 mt-48 mb-44">
	<Heading2>Poděkování</Heading2>
	<div class="text-justify text-xdarkgray">
		<p>
			Založit si vlastní praxi není vůbec jednoduchou záležitostí. Je potřeba mít mnoho znalostí,
			dovedností, vytrvalosti při zajišťování administrativních úkonů a hlavně mít kolem sebe milé,
			podporující a přející lidi.
		</p>
		<p class="mt-3">
			Na tomto místě bych ráda poděkovala
			<Anchor href="https://sylvienavarova.cz/" external>PhDr. Sylvii Navarové</Anchor>, která se
			ujala mého odborného vedení a byla ochotná mne podpořit při administrativních krocích na této
			mé cestě. Další díky bezesporu patří Davidu Tomanovi. Ten nezištně vytvořil krásné logo, které
			zdobí mé stránky, vizitky, razítko i cedulku u poradny. Za podporu děkuji Adél Hudečkové,
			Beátě Linhartové a Jakubu Rubešovi, protože tato jejich podpora mi pomohla odhodlat se a
			naplnit můj sen o vlastní praxi. Nemalé poděkování si zaslouží také můj partner za to, že
			naprogramoval celé stránky a trpělivě vyhovoval mým změnám a požadavkům.
		</p>
		<p class="mt-3">
			A poslední díky plné vděčnosti posílám také do úžasných vydavatelství Pasparta a Portál, které
			mi neustále zasílají nové a zajímavé odborné publikace. Tím podporují nejen mou touhu po
			poznání, ale také rozšiřují portfolio mých technik a metod, které v praxi mohu využívat.
		</p>
	</div>
	<div class="flex flex-col gap-10 md:flex-row justify-around mt-10">
		<Anchor href="https://www.pasparta.cz/e-shop/" external cls="h-10">
			<img src={PaspartaLogo} alt="Pasparta logo" class="object-contain w-full h-full" />
		</Anchor>
		<Anchor href="https://obchod.portal.cz/" external cls="h-10">
			<img src={PortalLogo} alt="Portál logo" class="object-contain w-full h-full" />
		</Anchor>
	</div>
</div>
