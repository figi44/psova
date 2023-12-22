<script lang="ts">
	import { Footer, NavBar } from '$lib';
	import { titleStore } from './store';

	let title: string;
	titleStore.subscribe((value) => {
		title = value;
	});
</script>

<svelte:head>
	<title>{title} - PSOVA</title>
</svelte:head>

<NavBar initialBg="bg-xlavender" />
<div class="bg-xlavender">
	<div class="w-[95%] xl:max-w-[1120px] mx-auto">
		<h1 class="text-white text-[56px] font-bold pt-12 pb-12 text-center">
			{title}
		</h1>
	</div>
</div>
<div class="w-[95%] xl:max-w-[1120px] mx-auto pt-12">
	<slot />
</div>
<div class="background pt-32">
	<div class="w-[95%] xl:max-w-[1120px] mx-auto">
		<Footer />
	</div>
</div>

<style global>
	.background {
		background: var(--background, linear-gradient(180deg, white 0%, #dfdfdf 100%));
	}
</style>
