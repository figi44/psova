<script lang="ts">
	import { NavButton } from '$lib';
	import type { NavButtonData } from './types';
	export let buttonData: Array<NavButtonData>;
</script>

<nav class="flex w-full justify-between items-center my-4">
	<a href="/"><img src="" alt="Logo" class="text-white" /></a>
	<div>
		<div class="justify-center items-center gap-7 flex">
			{#each buttonData as button}
				<NavButton title={button.title} href={button.href} />
			{/each}
		</div>
		<hr class="border-0 border-t-[1px] border-white border-opacity-30 -mx-3" />
	</div>
</nav>
