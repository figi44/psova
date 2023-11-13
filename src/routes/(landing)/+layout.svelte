<script>
	import { Footer, NavBar } from '$lib';
</script>

<div class="background">
	<div class="max-w-[1120px] mx-auto">
		<NavBar />
		<slot />
		<Footer />
	</div>
</div>

<style global>
	.background {
		background: var(
			--background,
			linear-gradient(180deg, #a192c8 0%, #dfdfdf 99.47%, #dfdfdf 99.48%)
		);
		font-family: 'play';
	}
</style>
