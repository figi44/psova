<script lang="ts">
	import { Card, Heading2 } from '$lib';
	import type { CardData } from './types';

	export let cards: CardData[];
</script>

<section id="services" class="pt-20">
	<Heading2>Nabízené služby</Heading2>
	<div class="overflow-hidden rounded-[30px] bg-white px-5 md:px-9">
		{#each cards as card}
			<Card data={card} />
		{/each}
	</div>
</section>
