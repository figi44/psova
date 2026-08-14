<script lang="ts">
	import { page } from '$app/stores';
	import { tick } from 'svelte';
	import { slide } from 'svelte/transition';
	import { Anchor, NavButton } from '$lib';
	import LogoImg from '$lib/assets/logo-nav.svg';

	const buttonData = [
		{ title: 'služby', href: '#services' },
		{ title: 'o mně', href: 'o-mne' },
		{ title: 'ceník', href: 'cenik' },
		{ title: 'faq', href: 'faq' },
		{ title: 'kontakt', href: 'kontakt' }
	];
	const servicePages = ['', 'poradenstvi', 'act-terapie', 'hlubinna-psychoterapie', 'koucink'];

	export let initialBg: string;

	let scrollY = 0;
	let isOpen = false;
	let menuButton: HTMLButtonElement;
	let mobileNav: HTMLElement;
	let currentPage: string;

	$: currentPage = $page.url.pathname.split('/').filter(Boolean).at(-1) ?? '';
	const isActive = (href: string, pageName: string) =>
		href === '#services' ? servicePages.includes(pageName) : pageName === href;

	async function toggleMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			await tick();
			mobileNav?.focus();
		}
	}

	function closeMenu(returnFocus = false) {
		isOpen = false;
		if (returnFocus) menuButton?.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) closeMenu(true);
	}
</script>

<svelte:window bind:scrollY on:keydown={handleKeydown} />
<svelte:body class:overflow-hidden={isOpen} />

<header
	class="sticky top-0 z-40 hidden transition-all duration-300 ease-out xl:block {scrollY
		? 'bg-xlavender shadow-md'
		: initialBg}"
>
	<nav
		class="mx-auto flex w-full max-w-[1120px] items-center justify-between pb-5 pt-4"
		aria-label="Hlavní navigace"
	>
		<Anchor href="" cls="rounded-sm">
			<img src={LogoImg} alt="PSOVA – domovská stránka" class="w-[200px]" />
		</Anchor>
		<div>
			<div class="flex items-center justify-center gap-7">
				{#each buttonData as button}
					<NavButton
						title={button.title}
						href={button.href}
						active={isActive(button.href, currentPage)}
					/>
				{/each}
			</div>
			<hr class="-mx-3 border-0 border-t border-white/30" />
		</div>
	</nav>
</header>

<header
	class="sticky top-0 z-50 flex w-full items-center justify-between bg-xlavender p-4 shadow-md xl:hidden"
>
	<Anchor href="" cls="rounded-sm">
		<img src={LogoImg} alt="PSOVA – domovská stránka" class="h-12" />
	</Anchor>
	<button
		bind:this={menuButton}
		type="button"
		aria-label={isOpen ? 'Zavřít menu' : 'Otevřít menu'}
		aria-expanded={isOpen}
		aria-controls="mobile-navigation"
		class="group flex h-12 w-12 flex-col items-center justify-center rounded-full"
		on:click={toggleMenu}
	>
		<span
			class="my-1 h-1 w-6 rounded-full bg-xdarkgray transition duration-300 {isOpen
				? 'translate-y-3 rotate-45'
				: ''}"
		/>
		<span
			class="my-1 h-1 w-6 rounded-full bg-xdarkgray transition duration-300 {isOpen
				? 'opacity-0'
				: ''}"
		/>
		<span
			class="my-1 h-1 w-6 rounded-full bg-xdarkgray transition duration-300 {isOpen
				? '-translate-y-3 -rotate-45'
				: ''}"
		/>
	</button>
</header>

{#if isOpen}
	<button
		type="button"
		class="fixed inset-0 z-30 bg-black/20 backdrop-blur-[1px] xl:hidden"
		aria-label="Zavřít menu"
		on:click={() => closeMenu(true)}
	/>
	<nav
		bind:this={mobileNav}
		id="mobile-navigation"
		tabindex="-1"
		transition:slide={{ axis: 'x' }}
		class="fixed right-0 top-0 z-40 flex h-full w-[82%] max-w-sm flex-col items-start bg-white px-8 pb-10 pt-28 shadow-[-5px_0_20px_rgba(0,0,0,0.14)] xl:hidden"
		aria-label="Mobilní navigace"
	>
		{#each buttonData as button}
			<Anchor
				href={button.href}
				ariaCurrent={isActive(button.href, currentPage) ? 'page' : undefined}
				cls="w-full border-b border-xlavender/30 py-4 text-2xl text-xdarkgray transition-colors hover:text-xpink aria-[current=page]:font-bold aria-[current=page]:text-xpink"
				on:click={() => closeMenu()}
			>
				{button.title}
			</Anchor>
		{/each}
	</nav>
{/if}
