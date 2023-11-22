<script lang="ts">
	import { slide } from 'svelte/transition';

	export let title: string;
	export let isOpen = false;
	export let topHr = false;

	const onClick = () => (isOpen = !isOpen);
</script>

{#if topHr}
	<hr class="border-0 border-t-[1px] border-xlavender" />
{/if}
<div class="my-4 flex items-start gap-2">
	<div class="flex flex-col items-center self-stretch gap-1">
		<button on:click={onClick}>
			<svg
				class:open={isOpen}
				class="h-6 w-6 mt-[2px] stroke-xdarkgray transition-transform"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="3"
			>
				<polyline points="6 9 12 15 18 9" />
			</svg>
		</button>
		{#if isOpen}
			<div
				transition:slide
				data-testid="accordion-open"
				class="border-x-[3px] border-xpink rounded h-full"
			/>
		{/if}
	</div>
	<div class="">
		<button on:click={onClick} class="text-lg font-bold">{title}</button>
		{#if isOpen}
			<div transition:slide data-testid="accordion-open" class="text-lg">
				<slot />
			</div>
		{/if}
	</div>
</div>
<hr class="border-0 border-t-[1px] border-xlavender" />

<style>
	.open {
		transform: rotate(180deg);
	}
</style>
