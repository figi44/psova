<script lang="ts">
	import { Anchor } from '$lib';
	import type { CardData } from './types';

	export let data: CardData;
</script>

<Anchor
	href={data.linkHref}
	cls="group grid min-h-[120px] grid-cols-[64px_1fr_42px] items-center gap-4 border-b border-xlavender/30 py-5 last:border-b-0 md:min-h-[142px] md:grid-cols-[80px_1fr_52px] md:gap-7 md:py-6"
>
	<div
		class="flex h-16 w-16 items-center justify-center rounded-[22px] bg-xlavender/20 text-xlavender transition-all duration-300 group-hover:rotate-3 group-hover:bg-xpink group-hover:text-white md:h-20 md:w-20 md:rounded-[26px]"
	>
		{#if data.icon === 'conversation'}
			<svg viewBox="0 0 48 48" class="h-9 w-9 md:h-11 md:w-11" fill="none" aria-hidden="true">
				<path
					d="M10 12.5h28v19H23l-8.5 6v-6H10v-19Z"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linejoin="round"
				/>
				<path
					d="M17 20h14M17 25h9"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
				/>
			</svg>
		{:else if data.icon === 'compass'}
			<svg viewBox="0 0 48 48" class="h-9 w-9 md:h-11 md:w-11" fill="none" aria-hidden="true">
				<circle cx="24" cy="24" r="15" stroke="currentColor" stroke-width="2.2" />
				<path
					d="m29.5 18.5-3.2 7.8-7.8 3.2 3.2-7.8 7.8-3.2Z"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linejoin="round"
				/>
			</svg>
		{:else if data.icon === 'depth'}
			<svg viewBox="0 0 48 48" class="h-9 w-9 md:h-11 md:w-11" fill="none" aria-hidden="true">
				<path
					d="M9 27c5-9 10-9 15 0s10 9 15 0"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
				/>
				<path
					d="M9 20c5-9 10-9 15 0s10 9 15 0"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
					opacity=".55"
				/>
			</svg>
		{:else}
			<svg viewBox="0 0 48 48" class="h-9 w-9 md:h-11 md:w-11" fill="none" aria-hidden="true">
				<path
					d="M11 35h8v-8h8v-8h10"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="m32 14 5 5-5 5"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}
	</div>

	<h3
		class="text-lg font-bold leading-[1.15] transition-transform duration-300 group-hover:translate-x-2 sm:text-xl md:text-[28px]"
	>
		{data.title}
	</h3>

	<span
		class="flex h-10 w-10 items-center justify-center rounded-full bg-xlavender/20 text-xl text-xdarkgray transition-all duration-300 group-hover:translate-x-1 group-hover:bg-xpink group-hover:text-white"
		aria-hidden="true">→</span
	>
</Anchor>
