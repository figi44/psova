<script lang="ts">
	import { base } from '$app/paths';
	import { NavButton } from '$lib';
	import LogoImg from '$lib/assets/logo-d.svg';
	let buttonData = [
		{ title: 'služby', href: `${base}/#services` },
		{ title: 'o mně', href: `${base}/o-mne` },
		{ title: 'ceník', href: `${base}/cenik` },
		{ title: 'akutní problémy', href: `${base}/akutni-problemy` },
		{ title: 'faq', href: `${base}/faq` },
		{ title: 'kontakt', href: `${base}/kontakt` }
	];
	export let initialBg: string;
	let scrollY: number;
</script>

<svelte:window bind:scrollY />

<div
	class="sticky top-0 transition-all duration-300 ease-out
		{scrollY ? 'bg-xlavender shadow-md' : initialBg} "
>
	<nav class="max-w-[1120px] mx-auto flex w-full justify-between items-center pt-4 pb-5">
		<a href={base || '/'}><img src={LogoImg} alt="Logo" class="text-white w-[200px]" /></a>
		<div>
			<div class="justify-center items-center gap-7 flex">
				{#each buttonData as button}
					<NavButton title={button.title} href={button.href} />
				{/each}
			</div>
			<hr class="border-0 border-t-[1px] border-white border-opacity-30 -mx-3" />
		</div>
	</nav>
</div>
