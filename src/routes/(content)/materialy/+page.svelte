<script lang="ts">
	import { Anchor, Heading3, Paragraph } from '$lib';
	import AsertivniPrava from '$lib/assets/edukace/Asertivní práva.pdf';
	import DechoveCviceni from '$lib/assets/edukace/Dechové cvičení.png';
	import KoloEmoci from '$lib/assets/edukace/Kolo emocí.pdf';
	import Mindfulness from '$lib/assets/edukace/Mindfulness.png';
	import VystraznySystem from '$lib/assets/edukace/Výstražný systém.pdf';
	import BludnyKruh from '$lib/assets/pracovni_listy/Bludný kruh.pdf';
	import BodVolby from '$lib/assets/pracovni_listy/Bod volby.pdf';
	import KoloRovnovahy from '$lib/assets/pracovni_listy/Kolo rovnováhy.pdf';
	import KonceptAProces from '$lib/assets/pracovni_listy/Koncept a proces.pdf';
	import Kvetinka from '$lib/assets/pracovni_listy/Květinka.pdf';
	import MujKrizovyPlan from '$lib/assets/pracovni_listy/Můj krizový plán.pdf';
	import SpojteTecky from '$lib/assets/pracovni_listy/Spojte TEČKY.pdf';
	import Triflex from '$lib/assets/pracovni_listy/Triflex.pdf';
	import ZaznamProzitku from '$lib/assets/pracovni_listy/Záznam prožitků.pdf';
	import CerneMyslenky from '$lib/assets/pracovni_listy/Černé myšlenky.pdf';
	import Zebrik from '$lib/assets/pracovni_listy/Žebřík.pdf';
	import DrzeniTela from '$lib/assets/preklady/Držení těla.pdf';
	import Ztelesneni from '$lib/assets/ztelesneni.mp3';
	import { onMount } from 'svelte';
	import { titleStore } from '../store';

	titleStore.set('Materiály');

	// File types
	type FileType = 'pdf' | 'image' | 'audio';
	type FilterType = FileType | string; // Can be file type or category

	interface FileTypeInfo {
		id: FileType;
		label: string;
		icon: string;
	}

	const fileTypeInfos: { [key in FileType]: FileTypeInfo } = {
		pdf: { id: 'pdf', label: 'PDF', icon: '📄' },
		image: { id: 'image', label: 'Obrázek', icon: '🖼️' },
		audio: { id: 'audio', label: 'Audio', icon: '🎵' }
	};

	enum Category {
		workSheet = 'pracovní list',
		education = 'edukace',
		translation = 'překlad',
		recording = 'nahrávka'
	}

	// Category icons mapping
	const categoryIcons: Record<string, string> = {
		[Category.workSheet]: '📋',
		[Category.education]: '📚',
		[Category.translation]: '🌍',
		[Category.recording]: '🎤'
	};

	// Get category icon helper function
	function getCategoryIcon(category: string): string {
		return categoryIcons[category] || '🏷️';
	}

	interface Material {
		id: string;
		name: string;
		description: string;
		type: FileTypeInfo;
		categories: string[];
		url: string;
		size?: string;
	}

	const materials: Material[] = [
		{
			id: 'asertivni-prava',
			name: 'Asertivní práva',
			description: '10 Asertivních práv, která tvoří základ asertivní komunikace',
			type: fileTypeInfos.pdf,
			categories: [Category.education],
			url: AsertivniPrava
		},
		{
			id: 'dechove-cviceni',
			name: 'Dechové cvičení',
			description: 'Krátké a jednoduché dechové cvičení',
			type: fileTypeInfos.image,
			categories: [Category.education],
			url: DechoveCviceni
		},
		{
			id: 'kolo-emoci',
			name: 'Kolo emocí',
			description: 'Česká verze kola emocí přeložená Ráchel Bícovou',
			type: fileTypeInfos.pdf,
			categories: [Category.education],
			url: KoloEmoci
		},
		{
			id: 'mindfulness',
			name: 'Mindfulness',
			description: 'Jednoduché možnosti pro praktikování mindfulness',
			type: fileTypeInfos.image,
			categories: [Category.education],
			url: Mindfulness
		},
		{
			id: 'vystrazny-system',
			name: 'Výstražný systém',
			description: 'Infografika o tom, co se děje v našem těle, když přijde úzkost',
			type: fileTypeInfos.pdf,
			categories: [Category.education],
			url: VystraznySystem
		},
		{
			id: 'bludny-kruh',
			name: 'Bludný kruh',
			description: 'Pracovní list ke zpracování neustále se opakujících situací',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: BludnyKruh
		},
		{
			id: 'bod-volby',
			name: 'Bod volby',
			description: 'Pracovní list pro bod volby v ACT terapii',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: BodVolby
		},
		{
			id: 'cerne-myslenky',
			name: 'Černé myšlenky',
			description: 'Pracovní list pro zvládání černých myšlenek',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: CerneMyslenky
		},
		{
			id: 'kolo-rovnovahy',
			name: 'Kolo rovnováhy',
			description: 'Pracovní list pro škálování hodnot a asertivních práv',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: KoloRovnovahy
		},
		{
			id: 'koncept-a-proces',
			name: 'Koncept a proces',
			description: 'Pracovní list pro zacházení s koncepty a procesy našeho JÁ v ACT terapii',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: KonceptAProces
		},
		{
			id: 'kvetinka',
			name: 'Květinka',
			description: 'Pracovní list sloužící k pozastavení se nad sebepéčí',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: Kvetinka
		},
		{
			id: 'muj-krizovy-plan',
			name: 'Můj krizový plán',
			description: 'Pracovní list sloužící jako záchrana v náročných situacích',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: MujKrizovyPlan
		},
		{
			id: 'spojte-tecky',
			name: 'Spojte TEČKY',
			description: 'Pracovní list k metodě Russe Harisse využívané v ACT terapii',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: SpojteTecky
		},
		{
			id: 'triflex',
			name: 'Triflex',
			description: 'Pracovní list pro zpracování vlastního problému se třemi pilíři ACT terapie',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: Triflex
		},
		{
			id: 'zaznam-prozitku',
			name: 'Záznam prožitků',
			description:
				'Pracovní list k zaznamenávání prožitků na úrovni myšlenek, emocí, fyzických pocitů a nutkání',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: ZaznamProzitku
		},
		{
			id: 'zebrik',
			name: 'Žebřík',
			description: 'Pracovní list pro rozpracování velkého cíle na malé kroky',
			type: fileTypeInfos.pdf,
			categories: [Category.workSheet],
			url: Zebrik
		},
		{
			id: 'drzeni-tela',
			name: 'Držení těla',
			description:
				'Překlad anglické verze Extra Bits z knihy ACT jednoduše od Russe Harisse (Working with Body Posture in ACT)',
			type: fileTypeInfos.pdf,
			categories: [Category.translation],
			url: DrzeniTela
		},
		{
			id: 'ztelesneni',
			name: 'Ztělesnění',
			description:
				'Nahrávka, skrze kterou se lze propojit s přítomným okamžikem, budovat odstup a nahlížet na emoce z jiného úhlu pohledu',
			type: fileTypeInfos.audio,
			categories: [Category.recording],
			url: Ztelesneni
		}
	];

	// Filter state
	let selectedFilters: FilterType[] = [];
	let filteredMaterials: Material[] = materials;

	// Audio player visibility state
	let audioPlayersReady = false;

	// Get all unique categories from materials
	function getAllCategories(): string[] {
		const categoriesSet = new Set<string>();
		materials.forEach((material) => {
			material.categories.forEach((category) => {
				categoriesSet.add(category);
			});
		});
		return Array.from(categoriesSet).sort();
	}

	// Get all file types
	const fileTypes: FileType[] = Object.keys(fileTypeInfos) as FileType[];

	// Get all available filters (file types + categories)
	function getAllFilters(): { type: 'category'; value: FilterType; label: string }[] {
		const filters: { type: 'category'; value: FilterType; label: string }[] = [];

		// Add category filters
		getAllCategories().forEach((category) => {
			filters.push({
				type: 'category' as const,
				value: category,
				label: category
			});
		});

		return filters;
	}

	// Filter functions
	function toggleFilter(filterValue: FilterType) {
		if (selectedFilters.includes(filterValue)) {
			selectedFilters = selectedFilters.filter((f) => f !== filterValue);
		} else {
			selectedFilters = [...selectedFilters, filterValue];
		}
		updateFilteredMaterials();
	}

	function updateFilteredMaterials() {
		if (selectedFilters.length === 0) {
			filteredMaterials = materials;
		} else {
			filteredMaterials = materials.filter((material) => {
				// Check if material matches any selected filter (union)
				return selectedFilters.some((filter) => {
					// Check if filter is a file type
					if (fileTypes.includes(filter as FileType)) {
						return material.type.id === filter;
					}
					// Check if filter is a category
					return material.categories.includes(filter);
				});
			});
		}
	}

	// Clear all filters
	function clearFilters() {
		selectedFilters = [];
		updateFilteredMaterials();
	}

	// Get filter count
	function getFilterCount(filterValue: FilterType): number {
		if (fileTypes.includes(filterValue as FileType)) {
			return materials.filter((m) => m.type.id === filterValue).length;
		}
		return materials.filter((m) => m.categories.includes(filterValue)).length;
	}

	// Check if filter is a file type
	function isFileType(filter: FilterType): boolean {
		return fileTypes.includes(filter as FileType);
	}

	// Get filter icon (returns type icon for file types, category icon for categories)
	function getFilterIcon(filter: FilterType): string {
		if (isFileType(filter)) {
			return fileTypeInfos[filter as FileType].icon;
		}
		return getCategoryIcon(filter);
	}

	// Get button text based on file type (for non-audio files)
	function getActionButtonText(material: Material): string {
		return 'Stáhnout';
	}

	// Get button icon based on file type (for non-audio files)
	function getActionButtonIcon(material: Material): string {
		return 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
	}

	onMount(() => {
		updateFilteredMaterials();

		// Wait for layout to stabilize before showing audio players
		setTimeout(() => {
			audioPlayersReady = true;
		}, 1);
	});
</script>

<Paragraph>
	Zde najdete všechny dostupné materiály ke stažení. Můžete si stáhnout certifikáty, dokumenty,
	fotografie a další materiály související s mou prací a vzdělávacími aktivitami. TODO: doplnit text
</Paragraph>

<!-- Filter Pills -->
<div class="mb-8">
	<div class="flex flex-wrap gap-3 items-center">
		{#each getAllFilters() as filter}
			<button
				class="px-4 py-2 rounded-full border-2 transition-all duration-200 font-medium
					{selectedFilters.includes(filter.value)
					? isFileType(filter.value)
						? 'bg-xlavender text-white border-xlavender shadow-md'
						: 'bg-indigo-500 text-white border-indigo-500 shadow-md'
					: 'bg-white text-gray-700 border-gray-300 hover:border-xlavender hover:text-xlavender'}"
				on:click={() => toggleFilter(filter.value)}
			>
				<span class="mr-1">{getFilterIcon(filter.value)}</span>
				{filter.label}
				<span class="ml-1 text-sm opacity-75">
					({getFilterCount(filter.value)})
				</span>
			</button>
		{/each}

		{#if selectedFilters.length > 0}
			<button
				class="px-4 py-2 rounded-full bg-gray-100 text-gray-600 border border-gray-300
					hover:bg-gray-200 transition-all duration-200 font-medium"
				on:click={clearFilters}
			>
				Zrušit filtry
			</button>
		{/if}
	</div>

	{#if selectedFilters.length > 0}
		<div class="mt-3 text-sm text-gray-600">
			Zobrazeno {filteredMaterials.length} z {materials.length} materiálů
		</div>
	{/if}
</div>

<!-- Materials Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
	{#each filteredMaterials as material}
		<div
			class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200 flex flex-col h-full"
		>
			<div class="flex items-start justify-between mb-3">
				<div class="flex items-center gap-2">
					<span class="text-2xl">{material.type.icon}</span>
					<span
						class="px-2 py-1 text-xs font-medium rounded-full
						{material.type.id === 'pdf'
							? 'bg-red-100 text-red-700'
							: material.type.id === 'image'
							? 'bg-blue-100 text-blue-700'
							: 'bg-green-100 text-green-700'}"
					>
						{material.type.label.toUpperCase()}
					</span>
				</div>
				{#if material.size}
					<span class="text-xs text-gray-500 font-mono">{material.size}</span>
				{/if}
			</div>

			<h3 class="text-lg font-semibold text-gray-900 mb-2">{material.name}</h3>
			<p class="text-gray-600 text-sm mb-3 flex-1">{material.description}</p>

			<!-- Categories -->
			<div class="flex flex-wrap gap-1 mb-4">
				{#each material.categories as category}
					<span
						class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full flex items-center gap-1"
					>
						<span class="text-sm">{getCategoryIcon(category)}</span>
						{category}
					</span>
				{/each}
			</div>

			{#if material.type.id === 'audio'}
				<!-- Inline Audio Player -->
				<div class="w-full h-10 mt-auto">
					{#if audioPlayersReady}
						<audio
							controls
							controlslist="nodownload"
							class="w-full h-10 rounded-md"
							src={material.url}
							preload="metadata"
						>
							Váš prohlížeč nepodporuje přehrávání audio souborů.
						</audio>
					{:else}
						<!-- Placeholder while loading -->
						<div
							class="h-10 bg-gray-200 rounded-md animate-pulse flex items-center justify-center relative z-0"
						>
							<span class="text-gray-500 text-sm relative z-0">Načítání přehrávače...</span>
						</div>
					{/if}
				</div>
			{:else}
				<!-- Download Button for PDFs and Images -->
				<div class="mt-auto">
					<Anchor
						href={material.url}
						external={true}
						cls="inline-flex items-center px-4 py-2 bg-xlavender text-white rounded-md hover:bg-opacity-90 transition-colors duration-200 font-medium"
					>
						<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d={getActionButtonIcon(material)}
							/>
						</svg>
						{getActionButtonText(material)}
					</Anchor>
				</div>
			{/if}
		</div>
	{/each}
</div>

{#if filteredMaterials.length === 0}
	<div class="text-center py-12">
		<div class="text-gray-400 text-6xl mb-4">📭</div>
		<Heading3>Žádné materiály nenalezeny</Heading3>
		<Paragraph>Pro zadané filtry nejsou k dispozici žádné materiály.</Paragraph>
		<button
			class="mt-4 px-6 py-2 bg-xlavender text-white rounded-md hover:bg-opacity-90 transition-colors duration-200 font-medium"
			on:click={clearFilters}
		>
			Zobrazit všechny materiály
		</button>
	</div>
{/if}

<div class="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
	<Heading3>Poznámka k použití materiálů TODO doplnit text</Heading3>
	<Paragraph>
		Všechny zde uvedené materiály jsou k dispozici pouze pro informační účely. Certifikáty a
		dokumenty jsou chráněny autorskými právy. Při jejich použití prosím respektujte autorská práva a
		používejte je pouze pro účely, ke kterým jsou určeny.
	</Paragraph>
	<Paragraph>
		Pro další dotazy ohledně materiálů nebo jejich použití mě můžete kontaktovat prostřednictvím <Anchor
			href="kontakt">kontaktního formuláře</Anchor
		>.
	</Paragraph>
</div>
