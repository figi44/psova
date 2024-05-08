<script>
	import { Anchor, List, Paragraph } from '$lib';
	import { titleStore } from '../store';
	import Illustraion from '$lib/assets/firmy.png';
	titleStore.set('Firemní aktivity');
</script>

<Paragraph>
	Individuálně nastavené balíčky na míru firmám a kolektivům pro podporu a prevenci duševního zdraví
	zaměstnanců.
</Paragraph>
<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph
			><span class="font-bold">Může se jednat o následující aktivity nebo jejich kombinaci:</span
			></Paragraph
		>
		<List>
			<li>koučink pro skupiny nebo jednotlivce</li>
			<li>nácviky relaxačních technik</li>
			<li>teambuildingy</li>
			<li>zážitkové seberozvojové workshopy</li>
			<li>individuální poradenství</li>
			<li>meet-upy s přesahem</li>
			<li>pomoc při náboru zaměstnanců</li>
			<li>diagnostika zaměstnanců pro vhodnost k pracovní pozici</li>
			<li>kariérové poradenství</li>
			<li>dedikované hodiny pro psychologické poradenství</li></List
		>
	</div>
	<div class="w-1/2 self-center xl:w-1/3">
		<img src={Illustraion} alt="Ilustracni obrazek" class="object-contain mx-auto" />
	</div>
</div>

<Paragraph>
	Nastavení nejoptimálnějšího balíčku aktivit lze konzultovat e-mailem nebo po telefonu, případně se
	ráda potkám také osobně.
</Paragraph>

<Paragraph>
	Ceník, podmínky a další informace naleznete <Anchor href="cenik">ZDE.</Anchor>
</Paragraph>
