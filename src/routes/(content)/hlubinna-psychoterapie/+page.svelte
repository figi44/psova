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

<ServiceCTA duration="50 nebo 75 minut" price="od 1 000 Kč" />
