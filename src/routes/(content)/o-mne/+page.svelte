<script>
	import { Anchor, Heading3, Paragraph } from '$lib';
	import EducationIcon from '$lib/assets/educationIcon.svg';
	import groupIcon from '$lib/assets/group.svg';
	import IDCardIcon from '$lib/assets/id-card-icon.svg';
	import whiteboardIcon from '$lib/assets/whiteboard.svg';

	import AKPLogo from '$lib/assets/akplogo.png';
	import CSAPLogo from '$lib/assets/csaplogo.png';
	import ACTImg from '$lib/assets/act-cert.pdf';
	import acterasmusImg from '$lib/assets/ACT_Erasmus.png';
	import AIKLogo from '$lib/assets/aik.png';
	import CMPSYLogo from '$lib/assets/cmpsy.png';
	import FairytaleImg from '$lib/assets/fairytale-therapy.pdf';
	import JREKImg from '$lib/assets/JREK.pdf';
	import koucImg from '$lib/assets/kouc.png';
	import pvzImg from '$lib/assets/PvZ.pdf';
	import relaxaceImg from '$lib/assets/relaxace.png';
	import SandplayImg from '$lib/assets/sandplay.pdf';
	import TransgenImg from '$lib/assets/transgen-vzorce.pdf';
	import traumapristupImg from '$lib/assets/trauma_respektujici_pristup_SOFA.pdf';
	import dementiaImg from '$lib/assets/Understanding_Dementia_2023_11_Certificate_Kristyna_Sznapkova.pdf';
	import yinyogaImg from '$lib/assets/yin_yoga.png';
</script>

<Paragraph>
	Vystudovala jsem jednooborovou psychologii se zaměřením na klinickou psychologii a psychologii
	osobnosti. Pracuji jako psycholožka, koučka a terapeutka ACT směru (III. vlna
	kognitivně-behaviorálních terapií). Aktuálně jsem také frekventantkou psychoterapeutického výcviku
	v hlubinném směru. Aktivně se připravuji pro budoucí práci ve zdravotnictví.
</Paragraph>

<Paragraph>
	Míchám krupici a mám ráda ananas na pizze. Hodně a často čtu, poslouchám vážnou hudbu. V létě se
	ráda schovávám ve stínu a v zimě pozoruji ptáky na krmítku s hrnkem čaje v rukách. S vděčností
	naslouchám přírodě, jak mě zve k pobytu v ní. Praktikuji jógu, medituji.
</Paragraph>
<Paragraph>
	Aktivně se věnuji dobrovolnickým aktivitám v oblasti psychologie. Pracuji pod pravidelnou
	supervizí (individuální i skupinovou). Jsem v sebezkušenostní analýze.
</Paragraph>
<Heading3>
	<div class="flex items-center gap-2">
		<img src={EducationIcon} alt="" class="w-8" />
		Vzdělání
	</div>
</Heading3>
<table class="text-lg border-separate border-spacing-2 lg:border-spacing-4">
	<tbody>
		<tr>
			<td class="align-top font-bold whitespace-nowrap">2023–2025</td>
			<td>
				Magisterské studium psychologie se zaměřením na klinickou psychologii a psychologii
				osobnosti na univerzitě Humanitas s pobočkou ve Vsetíně (nostrifikováno UPOL).
			</td>
		</tr>
		<tr>
			<td class="align-top font-bold whitespace-nowrap">2020–2023</td>
			<td>
				Bakalářské studium psychologie na univerzitě Humanitas, která má svou pobočku ve Vsetíně.
			</td>
		</tr>
	</tbody>
</table>
<Heading3>
	<div class="flex items-center gap-2">
		<img src={IDCardIcon} alt="" class="w-8" />
		Členství
	</div>
</Heading3>
<div class="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
	<Anchor
		href="https://www.cmpsy.cz/?page=adresar&id=1159&action=detail"
		external
		cls="flex h-36 items-center justify-center"
	>
		<img
			src={CMPSYLogo}
			alt="Českomoravská psychologická společnost"
			width="172"
			height="172"
			loading="lazy"
			decoding="async"
			class="h-28 w-full max-w-[220px] object-contain"
		/>
	</Anchor>
	<Anchor
		href="https://www.asociacekoucu.com/profily-koucu/"
		external
		cls="flex h-36 items-center justify-center"
	>
		<img
			src={AIKLogo}
			alt="Asociace integrativních koučů"
			width="225"
			height="225"
			loading="lazy"
			decoding="async"
			class="h-28 w-full max-w-[220px] object-contain"
		/>
	</Anchor>
	<Anchor href="https://www.akpcr.cz/" external cls="flex h-36 items-center justify-center">
		<img
			src={AKPLogo}
			alt="Asociace klinických psychologů ČR"
			width="854"
			height="625"
			loading="lazy"
			decoding="async"
			class="h-28 w-full max-w-[220px] object-contain"
		/>
	</Anchor>
	<Anchor href="https://www.csap-cz.eu/" external cls="flex h-36 items-center justify-center">
		<img
			src={CSAPLogo}
			alt="Česká společnost pro analytickou psychologii"
			width="420"
			height="420"
			loading="lazy"
			decoding="async"
			class="h-28 w-full max-w-[220px] object-contain"
		/>
	</Anchor>
</div>
<Heading3>
	<div class="flex items-center gap-2">
		<img src={whiteboardIcon} alt="" class="w-8" />
		Kurzy, semináře, výcviky
	</div>
</Heading3>
<table class="text-lg border-separate border-spacing-2 lg:border-spacing-4">
	<tbody>
		<tr>
			<td class="align-top font-bold">07/2026-nyní</td>
			<td> Specializační vzdělávání v klinické psychologii (IPVZ) </td>
		</tr>
		<tr>
			<td class="align-top font-bold">09/2025-nyní</td>
			<td
				>Frekventantka výcviku v analytické psychoterapii vedený <Anchor
					href="https://www.csap-cz.eu/o-csap"
					external>ČSAP</Anchor
				></td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">03/2026</td>
			<td>
				<Anchor href={pvzImg} external>Psycholog ve zdravotnictví</Anchor> (Ambulance klinické psychologie
				Ostrava)
			</td>
		</tr>
		<tr>
			<td class="align-top font-bold">01/2026</td>
			<td
				><Anchor href={SandplayImg} external>Dvoudenní kurz Sandplay</Anchor> (Mgr. Alžběta Michalčíková;
				16 hodin)
			</td>
		</tr>
		<tr>
			<td class="align-top font-bold">04/2025</td>
			<td
				><Anchor href={TransgenImg} external>Transgenerační vzorce</Anchor> (Mansio; 16 hodin; Akreditace
				MPSV)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">12/2024</td>
			<td
				><Anchor href={ACTImg} external>Roční výcvik v ACTu - Terapie přijetí a odhodlání</Anchor> (Institut
				ACT+; 250 hodin)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">05/2024</td>
			<td
				><Anchor href={FairytaleImg} external>Fairytale Therapy</Anchor> (Erasmus+ Training program;
				56 hodin)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">04/2024</td>
			<td
				><Anchor href={koucImg} external>INTECO: Integrativní kouč</Anchor> (Škola manažerského rozvoje;
				230 hodin; Akreditace MŠMT)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">03/2024</td>
			<td
				><Anchor href={JREKImg} external
					>Jak reagovat na emoce klienta a první psychická pomoc</Anchor
				> (Táňa Mančíková; 23 hodin)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">02/2024</td>
			<td>
				<Anchor href={traumapristupImg} external>
					Trauma respektující přístup k řešení náročného chování u dětí
				</Anchor> (SoFA; 16 hodin; Akreditace MŠMT a MPSV)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">11/2023</td>
			<td>
				<Anchor href={dementiaImg} external>Understanding Dementia MOOC</Anchor> (University of Tasmania;
				21 hodin)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">09/2023</td>
			<td
				><Anchor href={acterasmusImg} external>ACT for your mental health</Anchor> (Erasmus+ Training
				program; 56 hodin)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">04/2019</td>
			<td
				><Anchor href={relaxaceImg} external>Relaxace, Yoga Nidra a Regresní terapie</Anchor> (Bhavasya
				Yoga School; 22 hodin; Akreditace MŠMT)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">04/2019</td>
			<td>
				<Anchor href={yinyogaImg} external>Yin Yoga I.</Anchor> (Monika Winklerová; 18 hodin)
			</td>
		</tr>
	</tbody>
</table>
<Heading3>
	<div class="flex items-center gap-2">
		<img src={groupIcon} alt="" class="w-8" />
		Praxe a zkušenosti
	</div>
</Heading3>
<table class="text-lg border-separate border-spacing-2 lg:border-spacing-4">
	<tbody>
		<tr>
			<td class="align-top font-bold">04/2026–nyní</td>
			<td>FNO, Rehabilitační ústav Chuchelná - Psycholog ve zdravotnictví</td>
		</tr>
		<tr>
			<td class="align-top font-bold">09/2025–nyní</td>
			<td>ZŠ J. Šoupala 1609, Ostrava-Poruba – Školní psycholog</td>
		</tr>
		<tr>
			<td class="align-top font-bold">11/2024–03/2026</td>
			<td>Statutární město Ostrava – Terénní psycholog projektu sociálního bydlení</td>
		</tr>
		<tr>
			<td class="align-top font-bold">03/2025–12/2025</td>
			<td>Nakladatelství Forum (skoleninaklic.cz) – Externí lektor</td>
		</tr>
		<tr>
			<td class="align-top font-bold">08/2024–05/2025</td>
			<td> ISNA-MSE z.s. – Psycholog a Snoezelen Terapeut</td>
		</tr>
		<tr>
			<td class="align-top font-bold">07/2024</td>
			<td>Mikasa z.s. Ostrava – Relax zóna (dobrovolnictví na festivalu Colours of Ostrava)</td>
		</tr>

		<tr>
			<td class="align-top font-bold">04/2024–nyní</td>
			<td>Ostrava Expat Centre – Psychologist, Therapist & Coach for English-speaking Clients</td>
		</tr>

		<tr>
			<td class="align-top font-bold">09/2023–12/2024</td>
			<td>PsyHub – Koordinátorka studentského projektu (dobrovolnictví)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">07/2023</td>
			<td>Mikasa z.s. Ostrava (dobrovolnictví na festivalu Colours of Ostrava)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">05–06/2023</td>
			<td>OSU – Administrátor výzkumu (dobrovolnictví)</td>
		</tr>

		<tr>
			<td class="align-top font-bold">01/2023–nyní</td>
			<td
				>IG PsychoKnihy – Recenze literatury s psychologickou a seberozvojovou tématikou (volný čas)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">12/2022–09/2023</td>
			<td>PsyHub – Koordinátorka Literární revue (dobrovolnictví)</td>
		</tr>
	</tbody>
</table>
