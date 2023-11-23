<script lang="ts">
	import { Card } from '$lib';
	import { Heading2 } from '$lib';
	import type { CardData } from './types';

	export let cards: Array<CardData>;
</script>

<Heading2>Nabízené služby</Heading2>
<div id="services" class="grid grid-rows-2 grid-cols-3 gap-6">
	{#each cards as card}
		<Card data={card} />
	{/each}
</div>
