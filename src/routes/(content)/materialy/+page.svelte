<script lang="ts">
	import { Anchor, Heading3, Paragraph } from '$lib';
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

	interface Material {
		id: string;
		name: string;
		description: string;
		type: FileTypeInfo;
		categories: string[];
		url: string;
		size?: string;
	}

	// Dummy materials data
	const materials: Material[] = [
		// PDFs
		{
			id: 'sample-cert-1',
			name: 'Vzorový certifikát 1',
			description: 'Ukázkový PDF certifikát pro testování',
			type: fileTypeInfos.pdf,
			categories: ['certifikáty', 'vzdělání'],
			url: '#',
			size: '1.2MB'
		},
		{
			id: 'sample-guide',
			name: 'Ukázkový průvodce',
			description: 'PDF průvodce s informacemi pro klienty',
			type: fileTypeInfos.pdf,
			categories: ['průvodce', 'informace'],
			url: '#',
			size: '850KB'
		},
		{
			id: 'sample-form',
			name: 'Vzorový formulář',
			description: 'Ukázkový formulář k vyplnění',
			type: fileTypeInfos.pdf,
			categories: ['formuláře', 'dokumenty'],
			url: '#',
			size: '320KB'
		},
		// Images
		{
			id: 'sample-photo-1',
			name: 'Ukázková fotografie 1',
			description: 'Vzorová fotografie pro demonstraci',
			type: fileTypeInfos.image,
			categories: ['fotografie', 'portfolio'],
			url: '#',
			size: '2.1MB'
		},
		{
			id: 'sample-diagram',
			name: 'Ukázkový diagram',
			description: 'Ilustrativní diagram nebo schéma',
			type: fileTypeInfos.image,
			categories: ['diagramy', 'vzdělání'],
			url: '#',
			size: '1.5MB'
		},
		{
			id: 'sample-infographic',
			name: 'Vzorová infografika',
			description: 'Informační grafika s daty',
			type: fileTypeInfos.image,
			categories: ['infografiky', 'informace'],
			url: '#',
			size: '3.2MB'
		},
		// Audio
		{
			id: 'sample-meditation',
			name: 'Ukázková meditace',
			description: 'Krátká audio meditace pro relaxaci',
			type: fileTypeInfos.audio,
			categories: ['meditace', 'relaxace'],
			url: '#',
			size: '15MB'
		},
		{
			id: 'sample-interview',
			name: 'Vzorový rozhovor',
			description: 'Audio záznam z rozhovoru nebo přednášky',
			type: fileTypeInfos.audio,
			categories: ['rozhovory', 'vzdělání'],
			url: '#',
			size: '45MB'
		},
		{
			id: 'sample-exercise',
			name: 'Ukázkové cvičení',
			description: 'Audio návod pro psychologické cvičení',
			type: fileTypeInfos.audio,
			categories: ['cvičení', 'okamura'],
			url: '#',
			size: '22MB'
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
	function getAllFilters(): { type: 'fileType' | 'category'; value: FilterType; label: string }[] {
		const filters: { type: 'fileType' | 'category'; value: FilterType; label: string }[] = [];

		// Add file type filters
		Object.values(fileTypeInfos).forEach((fileTypeInfo) => {
			filters.push({
				type: 'fileType' as const,
				value: fileTypeInfo.id,
				label: fileTypeInfo.label
			});
		});

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

	// Get filter icon (returns type icon for file types, tag icon for categories)
	function getFilterIcon(filter: FilterType): string {
		if (isFileType(filter)) {
			return fileTypeInfos[filter as FileType].icon;
		}
		return '🏷️';
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
			class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200"
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
			<p class="text-gray-600 text-sm mb-3">{material.description}</p>

			<!-- Categories -->
			<div class="flex flex-wrap gap-1 mb-4">
				{#each material.categories as category}
					<span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
						{category}
					</span>
				{/each}
			</div>

			{#if material.type.id === 'audio'}
				<!-- Inline Audio Player -->
				<div class="w-full h-10">
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
						<div class="h-10 bg-gray-200 rounded-md animate-pulse flex items-center justify-center">
							<span class="text-gray-500 text-sm">Načítání přehrávače...</span>
						</div>
					{/if}
				</div>
			{:else}
				<!-- Download Button for PDFs and Images -->
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
