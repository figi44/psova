<script lang="ts">
	import { Anchor } from '$lib';

	export let title: string;
	export let href: string;
	export let active = false;
</script>

<Anchor
	{href}
	ariaCurrent={active ? 'page' : undefined}
	cls={`group relative text-xl font-normal transition-colors hover:text-xpink ${
		active ? 'text-xpink' : 'text-white'
	}`}
>
	{title}
	<span
		class="absolute -bottom-px -left-3 z-10 h-px bg-xpink transition-all duration-300 {active
			? 'w-[calc(100%+24px)]'
			: 'w-0 group-hover:w-[calc(100%+24px)]'}"
		aria-hidden="true"
	/>
</Anchor>
