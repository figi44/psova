<script lang="ts">
	import { NavButton } from '$lib';
	import type { NavButtonData } from './types';
	export let buttonData: Array<NavButtonData>;
</script>

<nav class="flex w-full justify-between items-center px-4 py-2 shadow-md bg-white">
	<a href="/"><img src="" alt="Logo" class="" /></a>
	<div class="">
		{#each buttonData as button}
			<NavButton title={button.title} href={button.href} />
		{/each}
	</div>
</nav>
