<script>
	import { Anchor, Paragraph, TextLink } from '$lib';
	import ImgKriceos from '$lib/assets/kriceos.svg';
	import ImgCssostrava from '$lib/assets/cssostrava.svg';
	import ImgNepanikar from '$lib/assets/nepanikar.png';
	import ImgLinkabezpeci from '$lib/assets/linkabezpeci.svg';
	import ImgLinkappp from '$lib/assets/linkappp.svg';
	import ImgSluchatko from '$lib/assets/sluchatko.jpg';
	import ImgFlyer1 from '$lib/assets/krize-flyer1.jpg';
	import ImgFlyer2 from '$lib/assets/krize-flyer2.jpg';
	import { titleStore } from '../store';
	titleStore.set('Akutní problémy');

	let cards = [
		{
			title: 'Krizové centrum Ostrava',
			href: 'http://www.kriceos.cz/contact.html',
			img: ImgKriceos
		},
		{
			title: 'Krizové centrum pro děti a rodinu',
			href: 'https://css-ostrava.cz/kontakt',
			img: ImgCssostrava
		},
		{
			title: 'První psychologická pomoc prostřednictvím aplikace Nepanikař',
			href: 'https://nepanikar.eu/aplikace-nepanikar/',
			img: ImgNepanikar
		},
		{
			title: 'Linka bezpečí',
			href: 'https://www.linkabezpeci.cz/pomoc',
			img: ImgLinkabezpeci
		},
		{
			title: 'Linka první psychické pomoci',
			href: 'https://linkapsychickepomoci.cz/',
			img: ImgLinkappp
		},
		{
			title: 'Terapeutická linka Sluchátko',
			href: 'https://www.linkasluchatko.cz/',
			img: ImgSluchatko
		}
	];
</script>

<Paragraph>
	Nedisponuji non-stop krizovou linkou a nemám vzdělání v krizové intervenci. Proto pokud se
	nacházíte v akutně krizové situaci, využijte, prosím, některou z nabízených možností:
</Paragraph>
<div class="flex flex-wrap justify-center items-stretch gap-6 mt-12">
	{#each cards as card}
		<Anchor
			href={card.href}
			external
			cls="basis-[75%] sm:basis-[51%] md:basis-[45%] lg:basis-[30%] flex flex-col justify-between border border-xlavender rounded-[30px] group"
		>
			<div class="h-28 w-full border-b border-xlavender">
				<img src={card.img} alt="" class="object-contain w-full h-full mx-auto p-4" />
			</div>
			<h1 class="mx-4 my-6 grow font-bold text-xl leading-[1.15] text-center">
				{card.title}
			</h1>
			<div class="flex justify-center mb-6">
				<TextLink href={card.href} external>Přejít</TextLink>
			</div>
		</Anchor>
	{/each}
</div>
<div class="flex flex-col items-center xl:items-start xl:flex-row justify-between gap-10 mt-24">
	<div class="flex flex-col">
		<Paragraph
			>Krize a náročné situace patří k životu a není potřeba se za to stydět. Pro takovéto případy
			můžete využít krizových kontaktů a služeb, které jsem zpracovala v podobě letáčků. Ty si
			můžete stáhnout, vytisknout a vylepit doma na takové místo, kde to bude užitečné (například na
			lednici).</Paragraph
		>
		<Paragraph>Nezůstávejte na trápení sami a řekněte si o pomoc.</Paragraph>
	</div>

	<div class="flex gap-6">
		<div class="w-40 flex flex-col items-center">
			<a href={ImgFlyer1} download="Letak1.jpg"><img class="w-40" src={ImgFlyer1} alt="" /></a>
			<Anchor href={ImgFlyer1} download="Letak1.jpg" omitBase={true}>Stáhnout</Anchor>
		</div>
		<div class="w-40 flex flex-col items-center">
			<a href={ImgFlyer2} download="Letak2.jpg"><img class="w-40" src={ImgFlyer2} alt="" /></a>
			<Anchor href={ImgFlyer2} download="Letak2.jpg" omitBase={true}>Stáhnout</Anchor>
		</div>
	</div>
</div>
