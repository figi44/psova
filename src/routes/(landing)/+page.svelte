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
		}
		// {
		// 	title: 'Psychodiagnostika',
		// 	text: 'Odhalte skryté rozměry vašeho chování a prožívání prostřednictvím precizní psychodiagnostiky, která vám umožní lépe porozumět sobě samým a efektivněji dosáhnout cílů spolupráce.',
		// 	linkText: '',
		// 	linkHref: `psychodiagnostika`
		// },
		// {
		// 	title: 'Firemní aktivity',
		// 	text: 'Rozvíjejte sílu a jedinečnost svého týmu skrze aktivity šité na míru, které podnítí kreativitu, inovaci a komunikaci pro prevenci syndromu vyhoření.',
		// 	linkText: '',
		// 	linkHref: `firmy`
		// }
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
		<div class="xl:w-5/12 text-justify xl:leading-relaxed">
			<p>
				Vystudovala jsem jednooborovou psychologii se zaměřením na klinickou psychologii a
				psychologii osobnosti. Pracuji jako psycholožka, koučka a terapeutka ACT směru (III. vlna
				kognitivně-behaviorálních terapií). Aktuálně jsem také frekventantkou psychoterapeutického
				výcviku v hlubinném směru. Aktivně se připravuji pro budoucí práci ve zdravotnictví.
			</p>
			<p class="mt-3">
				Míchám krupici a mám ráda ananas na pizze. Hodně a často čtu, poslouchám vážnou hudbu. V
				létě se ráda schovávám ve stínu a v zimě pozoruji ptáky na krmítku s hrnkem čaje v rukách. S
				vděčností naslouchám přírodě, jak mě zve k pobytu v ní. Praktikuji jógu, medituji.
			</p>
		</div>
		<p class="xl:w-5/12 mt-3 xl:mt-0 text-justify xl:leading-relaxed">
			V praxi se setkávám s lidmi z vyloučených lokalit nebo v náročných životních situacích, kteří
			využili nabídky města a splnili podmínky pro získání sociálního bydlení. U těchto klientů se
			starám o jejich psychickou pohodu a dosahování osobních cílů. Pracuji také jako školní
			psycholožka na sportovní škole, kde podporuji nejen žáky, ale i pedagogický sbor. Školím
			pedagogické pracovníky v oblasti well-beingu a předcházení syndromu vyhoření. Za dveřmi
			soukromé poradny se věnuji dospělé klientele a rozmanitým radostem i strastem, které život
			přináší. Především se vynořují témata zvyšování odolnosti, nastavování hranic, efektivní
			komunikace a sebepéče.
		</p>
	</div>
	<div class="w-full flex justify-end mt-5">
		<TextLink href="o-mne">Chci vědět víc</TextLink>
	</div>
</div>
<CardContainer {cards} />

