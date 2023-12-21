<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Anchor, NavButton } from '$lib';
	import LogoImg from '$lib/assets/logo-nav.svg';
	import { goto } from '$app/navigation';

	let buttonData = [
		{ title: 'služby', href: `#services` },
		{ title: 'o mně', href: `o-mne` },
		{ title: 'ceník', href: `cenik` },
		{ title: 'akutní problémy', href: `akutni-problemy` },
		{ title: 'faq', href: `faq` },
		{ title: 'kontakt', href: `kontakt` }
	];
	export let initialBg: string;
	let scrollY: number;
	let innerWidth: number;
	let isOpen = false;
</script>

<svelte:window bind:scrollY bind:innerWidth />

{#if innerWidth > 1280}
	<div
		class="sticky top-0 transition-all duration-300 ease-out
{scrollY ? 'bg-xlavender shadow-md' : initialBg} "
	>
		<nav class="max-w-[1120px] mx-auto flex w-full justify-between items-center pt-4 pb-5">
			<Anchor href="" cls=""><img src={LogoImg} alt="Logo" class="text-white w-[200px]" /></Anchor>
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
{:else}
	<div
		class="sticky top-0 bg-xlavender shadow-md flex w-full justify-between items-center p-4 z-10"
	>
		<Anchor href="" cls=""><img src={LogoImg} alt="Logo" class="text-white h-12" /></Anchor>
		<button
			aria-label="Menu"
			class="flex flex-col h-12 w-12 justify-center items-center group"
			on:click={() => {
				isOpen = !isOpen;
			}}
		>
			<div
				class="h-1 w-6 my-1 rounded-full bg-xdarkgray transition ease transform duration-300 {isOpen &&
					'rotate-45 translate-y-3'}"
			/>
			<div
				class="h-1 w-6 my-1 rounded-full bg-xdarkgray transition ease transform duration-300 {isOpen &&
					'opacity-0'}"
			/>
			<div
				class="h-1 w-6 my-1 rounded-full bg-xdarkgray transition ease transform duration-300 {isOpen &&
					'-rotate-45 -translate-y-3'}"
			/>
		</button>
	</div>
	{#if isOpen}
		<nav
			transition:slide={{ axis: 'x' }}
			class="fixed top-0 right-0 w-[75%] h-full py-24 flex flex-col items-center bg-white z-0 shadow-[-5px_0_10px_0_rgba(0,0,0,0.1)]"
		>
			{#each buttonData as button}
				<button
					class="my-4 p-4 text-3xl text-xdarkgray"
					on:click={() => {
						goto(button.href);
						isOpen = false;
					}}>{button.title}</button
				>
			{/each}
		</nav>
	{/if}
{/if}
