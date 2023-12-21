<script lang="ts">
	import { Anchor } from '$lib';

	export let title: string;
	export let href: string;
</script>

<Anchor {href} cls=""
	><button class="text-white text-xl font-normal relative nav-button hover:text-xpink">
		{title}
	</button></Anchor
>

<style lang="postcss">
	.nav-button {
		transition: color 150ms ease-in;
	}

	.nav-button::after {
		content: '';
		display: block;
		width: 0;
		height: 1px;
		background-color: transparent;
		opacity: 0;
		position: absolute;
		bottom: -1px;
		left: -12px;
		transition: width 300ms ease-out, background-color 150ms ease-in;
	}

	.nav-button:hover::after {
		width: calc(100% + 24px);
		@apply bg-xpink;
		height: 1px;
		opacity: 1;
	}
</style>
