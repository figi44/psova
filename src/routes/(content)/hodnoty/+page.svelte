<script lang="ts">
	import { Paragraph } from '$lib';
	import QrCode from '$lib/assets/qr-code.jpg';
	import ConfirmModal from '$lib/components/ConfirmModal.svelte';
	import kanbanData from '$lib/data/values_cards_all.json';
	import type { Card, Column, ColumnDefinition } from '$lib/types/values';
	import { onMount } from 'svelte';
	import { dndzone } from 'svelte-dnd-action';

	const columnDefinitions: ColumnDefinition[] = [
		{
			id: '0',
			title: '',
			stageLimits: {
				1: 0,
				2: 0
			}
		},
		{
			id: '1',
			title: '😀',
			stageLimits: {
				1: 15,
				2: 10
			}
		},
		{
			id: '2',
			title: '🙂',
			stageLimits: {
				1: 15,
				2: 10
			}
		},
		{
			id: '3',
			title: '🙁',
			stageLimits: {
				1: 20,
				2: 10
			}
		}
	];

	// Create a map of card id to card data for easy lookup
	const cardMap = new Map(kanbanData.cards.map((card) => [card.id, card]));

	// Initialize columns with empty arrays
	let columns: Column[] = columnDefinitions.map((col) => ({
		...col,
		cards: []
	}));

	let showResetConfirmation = false;
	let stage = 1;
	let canAdvance = false;
	const topCardsCount = 5;

	onMount(() => {
		const savedColumnIds = localStorage.getItem('kanbanColumnIds');
		const savedStage = localStorage.getItem('kanbanStage');

		if (savedColumnIds) {
			// Convert saved IDs back to full card objects
			const columnStates = JSON.parse(savedColumnIds) as Record<string, string[]>;
			columns = columnDefinitions.map((col) => ({
				...col,
				cards: (columnStates[col.id] || []).map((id) => cardMap.get(id)).filter(Boolean) as Card[]
			}));

			// Restore saved stage
			if (savedStage) {
				stage = parseInt(savedStage);
			}
		} else {
			columns = columnDefinitions.map((col, index) => ({
				...col,
				cards: index === 0 ? kanbanData.cards : []
			}));
		}
	});

	function saveState() {
		if (typeof window !== 'undefined') {
			// Save card IDs for each column
			const columnStates = Object.fromEntries(
				columns.map((col) => [col.id, col.cards.map((card) => card.id)])
			);
			localStorage.setItem('kanbanColumnIds', JSON.stringify(columnStates));

			// Save stage
			localStorage.setItem('kanbanStage', stage.toString());
		}
	}

	function handleDndConsider(e: CustomEvent, columnId: string) {
		const colIndex = columns.findIndex((col) => col.id === columnId);
		columns[colIndex].cards = e.detail.items;
		columns = columns;
		saveState();
	}

	function handleDndFinalize(e: CustomEvent, columnId: string) {
		const colIndex = columns.findIndex((col) => col.id === columnId);
		columns[colIndex].cards = e.detail.items;
		columns = columns;
		saveState();
	}

	function resetToDefault() {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('kanbanColumnIds');
			localStorage.removeItem('kanbanStage');
			stage = 1;
			columns = columnDefinitions.map((col, index) => ({
				...col,
				cards: index === 0 ? kanbanData.cards : []
			}));
		}
	}

	function handleResetClick() {
		showResetConfirmation = true;
	}

	function handleResetConfirm() {
		resetToDefault();
		showResetConfirmation = false;
	}

	function handleResetCancel() {
		showResetConfirmation = false;
	}

	// Add reactive statement to update canAdvance
	$: {
		if (stage === 1 || stage === 2) {
			canAdvance = columns.every(
				(col, index) => col.cards.length === columnDefinitions[index].stageLimits[stage]
			);
		} else if (stage === 3 && columns[1].cards.length >= topCardsCount) {
			canAdvance = true;
		} else {
			canAdvance = false;
		}
	}

	function handleContinue() {
		if (stage === 1) {
			// Clear column 3
			const colIndex = columns.findIndex((col) => col.id === '3');
			columns[colIndex].cards = [];
			stage = 2;
			columns = columns;
			saveState();
		} else if (stage === 2) {
			// Clear columns 2 and 3
			columns = columns.map((col) => ({
				...col,
				cards: ['2', '3'].includes(col.id) ? [] : col.cards
			}));
			stage = 3;
			saveState();
		} else if (stage === 3) {
			localStorage.setItem(
				'valuesWorksheet',
				JSON.stringify(columns[1].cards.slice(0, topCardsCount))
			);
			window.open('/values-worksheet', '_blank');
		}
	}

	function isHighlighted(columnId: string, cardIndex: number): boolean {
		return stage === 3 && columnId === '1' && cardIndex < topCardsCount;
	}

	function isOverLimit(column: Column): boolean {
		const definition = columnDefinitions.find((def) => def.id === column.id);
		const currentLimit = definition?.stageLimits[stage] ?? 0;
		return column.cards.length > currentLimit;
	}
</script>

<div class="space-y-4">
	<div class="mx-4 px-4 py-2 bg-white">
		{#if stage === 1}
			<Paragraph>
				Život někdy připomíná výlet, na který jsme se kdysi vydali s mapou nebo kompasem v ruce — s
				jasnou představou o tom, kam míříme a kudy jít. Jenže mapy se mohou rozmočit deštěm
				okolností a kompas občas zapadne mezi věci, které už nenosíme. A tak bloudíme, ne proto, že
				bychom byli ztracení, ale protože jsme ztratili směr. Právě v těchto chvílích nám mohou být
				oporou naše hodnoty — vnitřní kompas, který sice neukazuje konkrétní cestu, ale pomáhá nám
				jít správným směrem. S následujícím cvičením si svůj kompas můžete zkusit seřídit.
			</Paragraph>
			<Paragraph>
				<div class=" text-sm">Poznámka: Cvičení nejlépe funguje na notebooku nebo PC.</div>
			</Paragraph>
			<Paragraph>
				<span class="font-bold">Krok 1:</span> Vyberte oblast svého života, pro kterou chcete určit své
				hodnoty. Ty seřadte do tří sloupců podle jejich důležitosti. Zkuste se oprostit od toho, jak
				dobře danou hodnotu umíte naplnit. Jen si zvědomte, jak moc je pro vás důležitá:
			</Paragraph>

			<Paragraph>
				<div class="text-center">
					😀 (velmi důležitá, 15 hodnot), 🙂 (důležitá, 15 hodnot), 🙁 (málo důležitá, 20 hodnot)
				</div>
			</Paragraph>
		{:else if stage === 2}
			<Paragraph>
				<span class="font-bold">Krok 2:</span> Nyní můžete dle libosti hodnoty přesouvat tak, aby jich
				v každém sloupci bylo deset.
			</Paragraph>
		{:else if stage === 3}
			<Paragraph>
				Nyní na vás čeká krok poslední - seřadit hodnoty v prvním sloupci tak, abyste získali pět
				takových, které jsou pro vás ze všech nejdůležitější.
			</Paragraph>
		{/if}
	</div>
	<div class="flex justify-end gap-4 px-4">
		<button
			on:click={handleContinue}
			disabled={!canAdvance}
			class="bg-xlavender bg-opacity-20 hover:bg-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-md text-sm font-medium"
		>
			{#if stage === 3}
				Stáhnout výsledky
			{:else}
				Pokračovat ke kroku {stage + 1}
			{/if}
		</button>
		<button
			on:click={handleResetClick}
			class="bg-xlavender bg-opacity-20 hover:bg-opacity-30 transition-colors px-4 py-2 rounded-md text-sm font-medium"
		>
			Reset
		</button>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 p-4">
		{#each columns as column}
			<div>
				<div class="h-12 text-center mb-2 flex items-center justify-center flex-col">
					<span class="text-3xl hover:scale-110 transition-transform cursor-default inline-block">
						{column.title}
					</span>
					{#if column.id !== '0'}
						<span
							class="text-sm transition-colors h-[1.25rem] opacity-0"
							class:opacity-100={stage !== 3}
							class:text-red-500={isOverLimit(column)}
							class:text-gray-500={!isOverLimit(column)}
						>
							{#key stage}
								{column.cards.length}/{columnDefinitions.find((def) => def.id === column.id)
									?.stageLimits[stage] ?? 0}
							{/key}
						</span>
					{/if}
				</div>
				<div class="bg-white rounded-lg p-2 shadow">
					<div
						use:dndzone={{
							items: column.cards,
							dropTargetStyle: {
								'background-color': 'rgb(229 231 235 / 0.2)'
							}
						}}
						on:consider={(e) => handleDndConsider(e, column.id)}
						on:finalize={(e) => handleDndFinalize(e, column.id)}
						class="space-y-2 min-h-[50px] pb-14"
					>
						{#each column.cards as card, index (card.id)}
							<div
								class="bg-xlavender p-4 rounded-md cursor-move transition-colors shadow-sm border border-opacity-20 border-gray-200"
								class:bg-opacity-20={!isHighlighted(column.id, index)}
								class:bg-opacity-60={isHighlighted(column.id, index)}
							>
								{#if isHighlighted(column.id, index)}
									<div class="relative">
										<span
											class="absolute top-0 right-0 text-sm font-medium bg-xlavender bg-opacity-40 px-2 py-1 rounded-bl rounded-tr-md"
										>
											#{index + 1}
										</span>
										<div class="flex flex-col space-y-1 pt-1">
											<span class="font-semibold text-sm pr-8">{card.title}</span>
											<span class="text-sm text-gray-700">{card.text}</span>
										</div>
									</div>
								{:else}
									<div class="flex flex-col space-y-1">
										<span class="font-semibold text-sm">{card.title}</span>
										<span class="text-sm text-gray-700">{card.text}</span>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="flex justify-center items-center">
	<Paragraph>
		Volně k užívání všem ACT terapeutům. Kdybyste chtěli podpořit mou aktivitu a pozvat mě na kafe,
		můžete tak učinit prostřednictvím QR kódu. Posílám vděčné děkuji.
	</Paragraph>
	<img
		src={QrCode}
		alt="QR kód"
		width="588"
		height="588"
		loading="lazy"
		decoding="async"
		class="w-32"
	/>
</div>

<ConfirmModal
	show={showResetConfirmation}
	onConfirm={handleResetConfirm}
	onCancel={handleResetCancel}
/>
