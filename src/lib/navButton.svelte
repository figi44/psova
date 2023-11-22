<script lang="ts">
	export let title: string;
	export let href: string;
</script>

<a {href}
	><button class="text-white text-xl font-normal relative nav-button hover:text-xpink">
		{title}
	</button></a
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
		width: calc(100% + 28px);
		@apply bg-xpink;
		height: 1px;
		opacity: 1;
	}
</style>
