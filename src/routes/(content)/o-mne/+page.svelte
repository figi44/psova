<script>
	import { Anchor, Heading3, Paragraph } from '$lib';
	import EducationIcon from '$lib/assets/educationIcon.svg';
	import groupIcon from '$lib/assets/group.svg';
	import IDCardIcon from '$lib/assets/id-card-icon.svg';
	import whiteboardIcon from '$lib/assets/whiteboard.svg';
	import { titleStore } from '../store';

	import ACBSLogo from '$lib/assets/acbs-logo.png';
	import ACTImg from '$lib/assets/act-cert.pdf';
	import acterasmusImg from '$lib/assets/ACT_Erasmus.png';
	import AIKLogo from '$lib/assets/aik.png';
	import CMPSYLogo from '$lib/assets/cmpsy.png';
	import emocnileadershipImg from '$lib/assets/emocni_leadership.png';
	import FairytaleImg from '$lib/assets/fairytale-therapy.pdf';
	import JREKImg from '$lib/assets/JREK.pdf';
	import koucImg from '$lib/assets/kouc.png';
	import projevretorikaImg from '$lib/assets/projev_retorika.png';
	import relaxaceImg from '$lib/assets/relaxace.png';
	import TransgenImg from '$lib/assets/transgen-vzorce.pdf';
	import traumapristupImg from '$lib/assets/trauma_respektujici_pristup_SOFA.pdf';
	import dementiaImg from '$lib/assets/Understanding_Dementia_2023_11_Certificate_Kristyna_Sznapkova.pdf';
	import yinyogaImg from '$lib/assets/yin_yoga.png';

	titleStore.set('O mně');
</script>

<Paragraph>
	Svou kariéru jsem začala jako vývojář software. Během své cesty jsem vystřídala ohromné množství
	pozic a dlouho jsem nemohla najít takovou, která by mne opravdu bavila a naplňovala. Při
	manažerském postu jsem zjistila, že naslouchání lidem a jejich vedení je mi velmi blízké. Díky
	vzdělávání zaměstnanců jsem se dotkla základů psychologie, které mi naprosto učarovaly, a já se
	rozhodla nastoupit na univerzitu. Postupně jsem se tak propracovala k vývoji lidské duše, protože
	komunikace s lidmi je mi mnohem bližší než komunikace se stroji. Lidské příběhy jsou jako hvězdy
	ve vesmíru - každá je jiná a každá je unikátní. Proto ke každému klientovi zaujímám individuální
	přístup plný pokory a respektu.
</Paragraph>
<Paragraph>
	Aktivně se věnuji dobrovolnickým aktivitám v oblasti psychologie. Docházím pravidelně na supervize
	a terapie.
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
				osobnosti na univerzitě Humanitas s pobočkou ve Vsetíně.
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
<div class="flex gap-4 items-center justify-center">
	<Anchor href="https://www.cmpsy.cz/?page=adresar&id=1159&action=detail" external cls="">
		<img
			src={CMPSYLogo}
			alt="Českomoravská psychologická společnost"
			class="object-contain w-full h-full"
		/>
	</Anchor>
	<Anchor href="https://www.asociacekoucu.com/profily-koucu/" external cls="">
		<img
			src={AIKLogo}
			alt="Asociace integrativních koučů"
			class="object-contain w-3/4 h-3/4 mx-auto"
		/>
	</Anchor>
	<Anchor href="https://contextualscience.org/" external cls="">
		<img
			src={ACBSLogo}
			alt="Association for Contextual Behavioral Science"
			class="object-contain w-1/3 h-1/3"
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
			<td class="align-top font-bold">10/2025-nyní</td>
			<td> Psycholog ve zdravotnictví (Ambulance klinické psychologie Ostrava) </td>
		</tr>
		<tr>
			<td class="align-top font-bold">09/2025</td>
			<td
				>Frekventantka výcviku v analytické psychoterapii vedený <Anchor
					href="https://www.csap-cz.eu/o-csap"
					external>ČSAP</Anchor
				></td
			>
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
			<td class="align-top font-bold">09/2025–nyní</td>
			<td>ZŠ J. Šoupala 1609, Ostrava-Poruba – Školní psycholog (poloviční úvazek)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">03/2025–nyní</td>
			<td>Nakladatelství Forum (skoleninaklic.cz) – Externí lektor</td>
		</tr>
		<tr>
			<td class="align-top font-bold">11/2024–nyní</td>
			<td>Statutární město Ostrava – Terénní psycholog projektu sociálního bydlení (DPP)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">08/2024–05/2025</td>
			<td> ISNA-MSE z.s. – Psycholog a Snoezelen Terapeut (poloviční úvazek) </td>
		</tr>
		<tr>
			<td class="align-top font-bold">07/2024</td>
			<td
				>Mikasa z.s. Ostrava – Relax zóna (dobrovolnictví na festivalu Colours of Ostrava v rozsahu
				20 hodin)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">06/2024</td>
			<td>Poradenské a kariérní centrum OSU (školní praxe v rozsahu 24 hodin)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">04/2024–nyní</td>
			<td>Ostrava Expat Centre – Psychologist, Therapist & Coach for English-speaking Clients</td>
		</tr>
		<tr>
			<td class="align-top font-bold">04-06/2024</td>
			<td>ZŠ Provaznická 64 – Školní psycholog (školní praxe v rozsahu 60 hodin)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">09/2023–12/2024</td>
			<td>PsyHub – Koordinátorka studentského projektu (dobrovolnictví)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">07/2023</td>
			<td
				>Mikasa z.s. Ostrava (dobrovolnictví na festivalu Colours of Ostrava v rozsahu 15 hodin)</td
			>
		</tr>
		<tr>
			<td class="align-top font-bold">05–06/2023</td>
			<td>OSU – Administrátor výzkumu (dobrovolnictví v rozsahu 26 hodin)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">04–05/2023</td>
			<td>Anabell z.ú. Ostrava (školní praxe v rozsahu 70 hodin)</td>
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
		<tr>
			<td class="align-top font-bold">04/2022</td>
			<td>Diagnostický ústav Ostrava-Kunčičky (školní praxe v rozsahu 44 hodin)</td>
		</tr>
		<tr>
			<td class="align-top font-bold">01–02/2021</td>
			<td>Charitní středisko Michala Magone Ostrava – Dubina (školní praxe v rozsahu 36 hodin)</td>
		</tr>
	</tbody>
</table>
