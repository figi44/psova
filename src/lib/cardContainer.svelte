<script lang="ts">
	import { Card } from '$lib';
	import type { CardData } from './types';

	export let cards: Array<CardData>;
</script>

<div class="grid grid-rows-2 grid-cols-3 gap-6">
	{#each cards as card}
		<Card data={card} />
	{/each}
</div>
