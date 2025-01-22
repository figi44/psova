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
	};

	const columnDefinitions = [
		{ id: '0', title: '' },
		{ id: '1', title: '😀' },
		{ id: '2', title: '🙂' },
		{ id: '3', title: '🙁' }
	];

	// Create a map of card id to card data for easy lookup
	const cardMap = new Map(kanbanData.cards.map((card) => [card.id, card]));

	// Initialize columns with empty arrays
	let columns: Column[] = columnDefinitions.map((col) => ({
		...col,
		cards: []
	}));

	let showResetConfirmation = false;

	onMount(() => {
		const savedColumnIds = localStorage.getItem('kanbanColumnIds');
		if (savedColumnIds) {
			// Convert saved IDs back to full card objects
			const columnStates = JSON.parse(savedColumnIds) as Record<string, string[]>;
			columns = columnDefinitions.map((col) => ({
				...col,
				cards: (columnStates[col.id] || []).map((id) => cardMap.get(id)).filter(Boolean) as Card[]
			}));
		} else {
			columns = columnDefinitions.map((col, index) => ({
				...col,
				cards: index === 0 ? kanbanData.cards : []
			}));
		}
	});

	function saveState() {
		if (typeof window !== 'undefined') {
			// Save only the card IDs for each column
			const columnStates = Object.fromEntries(
				columns.map((col) => [col.id, col.cards.map((card) => card.id)])
			);
			localStorage.setItem('kanbanColumnIds', JSON.stringify(columnStates));
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
</script>

<div class="space-y-4">
	<div class="flex justify-end px-4">
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
				<div class="h-12 text-center mb-2 flex items-center justify-center">
					<span class="text-3xl hover:scale-110 transition-transform cursor-default inline-block">
						{column.title}
					</span>
				</div>
				<div class="bg-white rounded-lg p-4 shadow">
					<div
						use:dndzone={{ items: column.cards, flipDurationMs: 300 }}
						on:consider={(e) => handleDndConsider(e, column.id)}
						on:finalize={(e) => handleDndFinalize(e, column.id)}
						class="space-y-2 min-h-[50px]"
					>
						{#each column.cards as card (card.id)}
							<div class="bg-xlavender bg-opacity-20 p-3 rounded cursor-move">
								{card.text}
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
