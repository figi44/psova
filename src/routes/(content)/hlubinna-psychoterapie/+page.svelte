<script>
	import { List, Paragraph, ServiceCTA } from '$lib';
	import Illustraion from '$lib/assets/psychohygiena.png';
</script>

<Paragraph>
	Zatímco v běžném životě se často soustředíme na to, co je vidět „na povrchu“, hlubinně orientovaná
	psychoterapie nás zve k prozkoumání toho, co leží pod ním. Vychází z předpokladu, že naše vědomí a
	nevědomí tvoří jeden vzájemně se doplňující celek. Pokud jsou tyto dvě složky v souladu, cítíme se
	v životě stabilnější a autentičtější.
</Paragraph>

<Paragraph>
	Jako terapeutka vám pomáhám navázat kontakt s vaším vnitřním světem a objevovat vaše vnitřní
	zdroje. Při společné práci využíváme tvořivé cesty, které nám umožňují nahlédnout tam, kde slova
	někdy nestačí. Využíváme k tomu práci se sny, obrazy a symboly, které k nám promlouvají z
	nevědomí, nebo aktivní imaginaci, která umožňuje vést dialog s různými částmi naší osobnosti.
	Prostor pro bezpečné zhmotnění vašich vnitřních témat nabízí také terapeutické pískoviště
	(Sandplay).
</Paragraph>

<div class="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-36">
	<div class="">
		<Paragraph><span class="font-bold">Kdy vám tato cesta může pomoci?</span></Paragraph>
		<List>
			<li>Cítíte, že se ve vašem životě opakují určité vzorce a chcete jim porozumět.</li>
			<li>Procházíte náročným obdobím (ztráta blízkého člověka, rozpad vztahu, vyhoření).</li>
			<li>Hledáte odpověď na otázku „jak dál“ a kam svůj život nasměrovat.</li>
			<li>Cítíte vnitřní prázdnotu nebo nespokojenost navzdory vnějšímu úspěchu.</li>
			<li>Přejete si hlouběji porozumět sami sobě a svému rozvoji.</li>
		</List>
	</div>
	<div class="w-1/2 self-center xl:w-1/3">
		<img
			src={Illustraion}
			alt="Ilustrace hlubinně orientované psychoterapie"
			width="1080"
			height="1080"
			loading="lazy"
			decoding="async"
			class="object-contain mx-auto"
		/>
	</div>
</div>

<Paragraph>
	Moje cílová skupina jsou dospělí lidé. Pracuji tedy s klienty, kteří již dosáhli plnoletosti.
</Paragraph>

<Paragraph>
	Nevěnuji se rodinné a partnerské sféře, nepracuji s dětmi. Pracuji vždy pouze s jednotlivci.
</Paragraph>

<aside class="mt-14" aria-label="Doporučení kolegy">
	<Paragraph>
		<span class="font-bold">Preferovali byste raději terapeuta - muže?</span>
		Ve stejné terapeutovně pracuje také můj kolega
		<a
			href="https://www.rubes-terapie.cz/"
			class="inline-flex items-center gap-[6px] font-bold text-xlavender transition-colors hover:text-xpink"
		>
			Jakub Rubeš
			<svg viewBox="0 0 21 9" fill="none" class="mt-[3px] w-5 stroke-current" aria-hidden="true">
				<path
					d="M20.3536 4.85355C20.5488 4.65829 20.5488 4.34171 20.3536 4.14645L17.1716 0.964466C16.9763 0.769204 16.6597 0.769204 16.4645 0.964466C16.2692 1.15973 16.2692 1.47631 16.4645 1.67157L19.2929 4.5L16.4645 7.32843C16.2692 7.52369 16.2692 7.84027 16.4645 8.03553C16.6597 8.2308 16.9763 8.2308 17.1716 8.03553L20.3536 4.85355ZM0 5H20V4H0V5Z"
				/>
			</svg>
		</a>.
	</Paragraph>
</aside>

<ServiceCTA duration="50 nebo 75 minut" price="od 1 000 Kč" />
