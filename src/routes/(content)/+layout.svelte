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
<header class="bg-xlavender">
	<div class="mx-auto w-[90%] max-w-[1120px]">
		<h1
			class="py-10 text-center text-[40px] font-bold leading-[1.1] text-white md:py-12 md:text-[56px]"
		>
			{title}
		</h1>
	</div>
</header>
<main class="mx-auto w-[90%] max-w-[1120px] pt-10 md:pt-12">
	<slot />
</main>
<div class="background pt-20 md:pt-24">
	<div class="mx-auto w-[90%] max-w-[1120px]">
		<Footer />
	</div>
</div>

<style global>
	.background {
		background: var(--background, linear-gradient(180deg, white 0%, #dfdfdf 100%));
	}
</style>
