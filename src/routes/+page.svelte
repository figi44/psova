<script>
	import { NavBar } from '$lib';
	import Hero from '$lib/hero.svelte';
</script>

<NavBar />
<div class="w-10/12 mx-auto">
	<Hero />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
