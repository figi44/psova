<script lang="ts">
	import { Card } from '$lib';
	import { Heading2 } from '$lib';
	import type { CardData } from './types';

	export let cards: Array<CardData>;
</script>

<div id="services" class="pt-20">
	<Heading2>Nabízené služby</Heading2>
	<div
		class="grid grid-cols-1 w-10/12 md:w-full mx-auto md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 gap-6"
	>
		{#each cards as card}
			<Card data={card} />
		{/each}
	</div>
</div>
