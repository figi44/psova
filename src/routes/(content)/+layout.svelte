<script>
	import { Footer, NavBar } from '$lib';
</script>

<div class="bg-xlavender">
	<div class="max-w-[1120px] mx-auto">
		<NavBar />
	</div>
</div>
<div class="max-w-[1120px] mx-auto">
	<slot />
</div>
<div class="background pt-32">
	<div class="max-w-[1120px] mx-auto">
		<Footer />
	</div>
</div>

<style global>
	.background {
		background: var(--background, linear-gradient(180deg, white 0%, #dfdfdf 100%));
		font-family: 'play';
	}
</style>
