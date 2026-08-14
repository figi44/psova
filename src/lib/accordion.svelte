<script lang="ts">
	import { slide } from 'svelte/transition';

	export let title: string;
	export let isOpen = false;
	export let topHr = false;

	const id = title
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
	const triggerId = `accordion-trigger-${id}`;
	const panelId = `accordion-panel-${id}`;
</script>

{#if topHr}
	<hr class="border-0 border-t border-xlavender" />
{/if}
<div class="py-4">
	<button
		id={triggerId}
		type="button"
		aria-expanded={isOpen}
		aria-controls={panelId}
		class="group flex w-full items-start gap-3 rounded text-left text-lg font-bold"
		on:click={() => (isOpen = !isOpen)}
	>
		<svg
			class:open={isOpen}
			class="mt-[2px] h-6 w-6 shrink-0 stroke-xdarkgray transition-transform group-hover:stroke-xpink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="3"
			aria-hidden="true"
		>
			<polyline points="6 9 12 15 18 9" />
		</svg>
		<span>{title}</span>
	</button>
	{#if isOpen}
		<div
			id={panelId}
			role="region"
			aria-labelledby={triggerId}
			transition:slide
			data-testid="accordion-open"
			class="ml-3 mt-3 border-l-[3px] border-xpink pl-9 text-lg leading-relaxed"
		>
			<slot />
		</div>
	{/if}
</div>
<hr class="border-0 border-t border-xlavender" />

<style>
	.open {
		transform: rotate(180deg);
	}
</style>
