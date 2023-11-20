<script>
	import { Paragraph } from '$lib';
	import RightArrow from '$lib/assets/right-arrow.svg';
	import ImgKriceos from '$lib/assets/kriceos.png';
	import ImgCssostrava from '$lib/assets/cssostrava.svg';
	import ImgNepanikar from '$lib/assets/nepanikar.png';
	import ImgLinkabezpeci from '$lib/assets/linkabezpeci.svg';
	import ImgLinkappp from '$lib/assets/linkappp.svg';
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
		}
	];
</script>

<Paragraph>
	Nedisponuji non-stop krizovou linkou a nemám vzdělání v krizové intervenci. Proto pokud se
	nacházíte v akutně krizové situaci, využijte, prosím, některou z nabízených možností:
</Paragraph>
<div class="flex flex-wrap justify-center items-stretch gap-6 mt-12">
	{#each cards as card}
		<div class="basis-[30%] flex flex-col justify-between border border-xlavender rounded-[30px]">
			<div class="h-28 w-full border-b border-xlavender">
				<img src={card.img} alt="" class="object-contain w-full h-full mx-auto p-4" />
			</div>
			<h1 class="mx-4 my-6 grow font-bold text-xl leading-[1.15] text-center">
				{card.title}
			</h1>
			<div class="flex justify-center mb-2">
				<a
					class="text-xdarkgray text-base inline-flex gap-[6px]"
					href={card.href}
					rel="noopener noreferrer"
					target="_blank">Přejít<img src={RightArrow} alt="" class="w-5 mt-[2px]" /></a
				>
			</div>
		</div>
	{/each}
</div>
