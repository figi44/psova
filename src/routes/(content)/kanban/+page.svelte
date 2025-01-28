<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import { titleStore } from '../store';
	import kanbanData from '$lib/data/values_cards.json';
	import { onMount } from 'svelte';
	import ConfirmModal from '$lib/components/ConfirmModal.svelte';
	import SubmissionModal from '$lib/components/SubmissionModal.svelte';
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

	type ColumnDefinition = {
		id: string;
		title: string;
		stageLimits: {
			[key: number]: number;
		};
	};

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
				1: 3,
				2: 2
			}
		},
		{
			id: '2',
			title: '🙂',
			stageLimits: {
				1: 3,
				2: 2
			}
		},
		{
			id: '3',
			title: '🙁',
			stageLimits: {
				1: 3,
				2: 2
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
	let isSubmitting = false;
	let showSubmissionModal = false;
	let submissionError = false;
	let isSubmitted = false;
	const topCardsCount = 2; // TODO: change to 5

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
		} else if (stage === 3 && columns[1].cards.length >= topCardsCount && !isSubmitted) {
			canAdvance = true;
		} else {
			canAdvance = false;
		}
	}

	async function submitTopCards() {
		const topColumn = columns.find((col) => col.id === '1');
		if (!topColumn) return;

		const top5Cards = topColumn.cards.slice(0, topCardsCount);

		isSubmitting = true;
		try {
			// Simulate API request
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// This would be the actual API call when ready:
			// await fetch('/api/submit-cards', {
			//     method: 'POST',
			//     headers: { 'Content-Type': 'application/json' },
			//     body: JSON.stringify({ cards: top5Cards })
			// });

			submissionError = false;
			isSubmitted = true;
		} catch (error) {
			console.error('Failed to submit cards:', error);
			submissionError = true;
		} finally {
			isSubmitting = false;
			showSubmissionModal = true;
		}
	}

	function handleSubmissionModalClose() {
		showSubmissionModal = false;
		if (submissionError) {
			// Allow retry if there was an error
			isSubmitting = false;
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
			submitTopCards();
		}
	}

	function isHighlighted(columnId: string, cardIndex: number): boolean {
		return stage === 3 && columnId === '1' && cardIndex < topCardsCount;
	}

	function isOverLimit(column: Column): boolean {
		const definition = columnDefinitions[parseInt(column.id)];
		const currentLimit = definition?.stageLimits[stage] ?? 0;
		return column.cards.length > currentLimit;
	}
</script>

<div class="space-y-4">
	<div class="flex justify-end gap-4 px-4">
		<button
			on:click={handleContinue}
			disabled={!canAdvance || isSubmitting || isSubmitted}
			class="bg-xlavender bg-opacity-20 hover:bg-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-md text-sm font-medium"
		>
			{#if stage === 3}
				{#if isSubmitted}
					Submitted
				{:else if isSubmitting}
					Submitting...
				{:else}
					Complete
				{/if}
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
						<span
							class="text-sm transition-colors h-[1.25rem] opacity-0"
							class:opacity-100={stage !== 3}
							class:text-red-500={isOverLimit(column)}
							class:text-gray-500={!isOverLimit(column)}
						>
							{column.cards.length}/{columnDefinitions[parseInt(column.id)].stageLimits[stage] ?? 0}
						</span>
					{/if}
				</div>
				<div class="bg-white rounded-lg p-4 shadow">
					<div
						use:dndzone={{
							items: column.cards,
							flipDurationMs: 300,
							dragDisabled: false,
							dropTargetStyle: {
								'background-color': 'rgb(229 231 235 / 0.2)'
							}
						}}
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
										<span class="text-sm font-medium">#{index + 1}</span>
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

<SubmissionModal
	show={showSubmissionModal}
	isError={submissionError}
	onClose={handleSubmissionModalClose}
/>
