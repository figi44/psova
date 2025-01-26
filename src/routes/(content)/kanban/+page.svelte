<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import { titleStore } from '../store';
	import kanbanData from '$lib/data/values_cards.json';
	import { onMount } from 'svelte';
	import ConfirmModal from '$lib/components/ConfirmModal.svelte';
	titleStore.set('Kanban Board');

	type Card = {
		id: string;
		text: string;
	};

	type Column = {
		id: string;
		title: string;
		cards: Card[];
		limit?: number;
	};

	const columnDefinitions = [
		{ id: '0', title: '' },
		{ id: '1', title: '😀', limit: 15 },
		{ id: '2', title: '🙂', limit: 15 },
		{ id: '3', title: '🙁', limit: 20 }
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
		const targetColumn = columnDefinitions[colIndex];

		// Check if the target column has a limit and would exceed it
		if (targetColumn.limit && e.detail.items.length > targetColumn.limit) {
			return; // Prevent the drop by not updating the column
		}

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

	function canAdvanceToStage2(): boolean {
		return stage === 1 && columns[0].cards.length === 0;
	}

	function canAdvanceToStage3(): boolean {
		if (stage !== 2) return false;

		// Check if all columns are exactly at their limits (10)
		return columns.every((col, index) => {
			if (index === 0) return col.cards.length === 0; // First column should be empty
			return col.cards.length === 10; // Other columns should be exactly at limit
		});
	}

	function handleContinue() {
		if (canAdvanceToStage2()) {
			// Clear column 3
			const colIndex = columns.findIndex((col) => col.id === '3');
			columns[colIndex].cards = [];

			// Update limits
			columnDefinitions[1].limit = 10; // Column 1
			columnDefinitions[2].limit = 10; // Column 2
			columnDefinitions[3].limit = 10; // Column 3

			stage += 1;
			columns = columns;
			saveState();
		} else if (canAdvanceToStage3()) {
			stage += 1;
			saveState();
		}
	}

	function isHighlighted(columnId: string, cardIndex: number): boolean {
		return stage === 3 && columnId === '1' && cardIndex < 5;
	}
</script>

<div class="space-y-4">
	<div class="flex justify-end gap-4 px-4">
		<button
			on:click={handleContinue}
			disabled={!(canAdvanceToStage2() || canAdvanceToStage3())}
			class="bg-xlavender bg-opacity-20 hover:bg-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-md text-sm font-medium"
		>
			{#if stage === 3}
				Complete
			{:else}
				Continue to Stage {stage + 1}
			{/if}
		</button>
		<button
			on:click={handleResetClick}
			class="bg-xlavender bg-opacity-20 hover:bg-opacity-30 transition-colors px-4 py-2 rounded-md text-sm font-medium"
		>
			Reset
		</button>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
		{#each columns as column}
			<div>
				<div class="h-12 text-center mb-2 flex items-center justify-center flex-col">
					<span class="text-3xl hover:scale-110 transition-transform cursor-default inline-block">
						{column.title}
					</span>
					{#if column.id !== '0'}
						<span class="text-sm text-gray-500">
							{column.cards.length}/{columnDefinitions[parseInt(column.id)].limit}
						</span>
					{/if}
				</div>
				<div class="bg-white rounded-lg p-4 shadow">
					<div
						use:dndzone={{ items: column.cards, flipDurationMs: 300 }}
						on:consider={(e) => handleDndConsider(e, column.id)}
						on:finalize={(e) => handleDndFinalize(e, column.id)}
						class="space-y-2 min-h-[50px]"
					>
						{#each column.cards as card, index (card.id)}
							<div
								class="bg-xlavender p-3 rounded cursor-move transition-colors"
								class:bg-opacity-20={!isHighlighted(column.id, index)}
								class:bg-opacity-60={isHighlighted(column.id, index)}
							>
								{#if isHighlighted(column.id, index)}
									<div class="flex justify-between items-center">
										<span>{card.text}</span>
										<span class="text-sm font-medium">Top {index + 1}</span>
									</div>
								{:else}
									{card.text}
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<ConfirmModal
	show={showResetConfirmation}
	onConfirm={handleResetConfirm}
	onCancel={handleResetCancel}
/>
