<script lang="ts">
	import { page } from '$app/stores';
	import { tick } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { Anchor, NavButton } from '$lib';
	import LogoImg from '$lib/assets/logo-nav.svg';

	const navigationItems = [
		{ title: 'o mně', href: 'o-mne' },
		{ title: 'ceník', href: 'cenik' },
		{ title: 'kontakt', href: 'kontakt' }
	];
	const serviceLinks = [
		{ title: 'Psychologické poradenství', href: 'poradenstvi' },
		{ title: 'Hlubinně orientovaná psychoterapie', href: 'hlubinna-psychoterapie' },
		{ title: 'ACT terapie', href: 'act-terapie' },
		{ title: 'Koučink', href: 'koucink' }
	];
	const servicePages = serviceLinks.map((service) => service.href);

	export let initialBg: string;

	let scrollY = 0;
	let isOpen = false;
	let desktopServicesOpen = false;
	let mobileServicesOpen = false;
	let menuButton: HTMLButtonElement;
	let mobileNav: HTMLElement;
	let currentPage: string;
	let currentHash = '';

	$: currentPage = $page.url.pathname.split('/').filter(Boolean).at(-1) ?? '';
	$: currentHash = $page.url.hash;

	const isServicesActive = (pageName: string, hash: string) =>
		servicePages.includes(pageName) || (pageName === '' && hash === '#services');

	async function toggleMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			await tick();
			mobileNav?.focus();
		} else {
			mobileServicesOpen = false;
		}
	}

	function closeMenu(returnFocus = false) {
		isOpen = false;
		mobileServicesOpen = false;
		if (returnFocus) menuButton?.focus();
	}

	function handleDesktopFocusOut(event: FocusEvent) {
		const container = event.currentTarget as HTMLElement;
		const nextTarget = event.relatedTarget;
		if (!(nextTarget instanceof Node) || !container.contains(nextTarget)) {
			desktopServicesOpen = false;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Escape') return;
		desktopServicesOpen = false;
		if (isOpen) closeMenu(true);
	}

	function handleHashChange() {
		currentHash = window.location.hash;
	}
</script>

<svelte:window bind:scrollY on:keydown={handleKeydown} on:hashchange={handleHashChange} />
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
				<div
					role="group"
					aria-label="Služby"
					class="relative flex items-center"
					on:mouseenter={() => (desktopServicesOpen = true)}
					on:mouseleave={() => (desktopServicesOpen = false)}
					on:focusout={handleDesktopFocusOut}
				>
					<NavButton
						title="služby"
						href="#services"
						active={isServicesActive(currentPage, currentHash)}
					/>
					<button
						type="button"
						aria-label="Zobrazit jednotlivé služby"
						aria-expanded={desktopServicesOpen}
						aria-controls="desktop-services-menu"
						class="ml-1 flex h-5 w-5 items-center justify-center text-white transition-colors hover:text-xpink"
						on:click={() => (desktopServicesOpen = !desktopServicesOpen)}
					>
						<svg
							viewBox="0 0 20 20"
							fill="none"
							class="h-4 w-4 stroke-current transition-transform duration-200 {desktopServicesOpen
								? 'rotate-180'
								: ''}"
							aria-hidden="true"
						>
							<path
								d="m5 7.5 5 5 5-5"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>

					{#if desktopServicesOpen}
						<div
							id="desktop-services-menu"
							class="absolute left-0 top-full w-[300px]"
							transition:fly={{ y: -6, duration: 160 }}
						>
							<div
								class="rounded-b-[18px] border-t border-white/30 bg-xlavender px-4 py-2 shadow-md"
							>
								{#each serviceLinks as service}
									<Anchor
										href={service.href}
										ariaCurrent={currentPage === service.href ? 'page' : undefined}
										cls={`block border-b border-white/20 py-2.5 text-base leading-tight text-white transition-colors last:border-b-0 hover:text-xpink ${
											currentPage === service.href ? 'font-bold text-xpink' : ''
										}`}
										on:click={() => (desktopServicesOpen = false)}
									>
										{service.title}
									</Anchor>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				{#each navigationItems as item}
					<NavButton title={item.title} href={item.href} active={currentPage === item.href} />
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
		class="fixed right-0 top-0 z-40 flex h-full w-[82%] max-w-sm flex-col items-start overflow-y-auto bg-white px-8 pb-10 pt-28 shadow-[-5px_0_20px_rgba(0,0,0,0.14)] xl:hidden"
		aria-label="Mobilní navigace"
	>
		<div class="w-full border-b border-xlavender/30">
			<div class="flex items-center">
				<Anchor
					href="#services"
					ariaCurrent={currentPage === '' && currentHash === '#services' ? 'page' : undefined}
					cls={`flex-1 py-4 text-2xl text-xdarkgray transition-colors hover:text-xpink ${
						isServicesActive(currentPage, currentHash) ? 'font-bold text-xpink' : ''
					}`}
					on:click={() => closeMenu()}
				>
					služby
				</Anchor>
				<button
					type="button"
					aria-label="Zobrazit jednotlivé služby"
					aria-expanded={mobileServicesOpen}
					aria-controls="mobile-services-menu"
					class="flex h-12 w-10 items-center justify-center text-xdarkgray transition-colors hover:text-xpink"
					on:click={() => (mobileServicesOpen = !mobileServicesOpen)}
				>
					<svg
						viewBox="0 0 20 20"
						fill="none"
						class="h-5 w-5 stroke-current transition-transform duration-200 {mobileServicesOpen
							? 'rotate-180'
							: ''}"
						aria-hidden="true"
					>
						<path
							d="m5 7.5 5 5 5-5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>

			{#if mobileServicesOpen}
				<div id="mobile-services-menu" class="mb-3 border-l border-xlavender pl-4" transition:slide>
					{#each serviceLinks as service}
						<Anchor
							href={service.href}
							ariaCurrent={currentPage === service.href ? 'page' : undefined}
							cls={`block py-2 text-base leading-tight text-xdarkgray transition-colors hover:text-xpink ${
								currentPage === service.href ? 'font-bold text-xpink' : ''
							}`}
							on:click={() => closeMenu()}
						>
							{service.title}
						</Anchor>
					{/each}
				</div>
			{/if}
		</div>

		{#each navigationItems as item}
			<Anchor
				href={item.href}
				ariaCurrent={currentPage === item.href ? 'page' : undefined}
				cls="w-full border-b border-xlavender/30 py-4 text-2xl text-xdarkgray transition-colors hover:text-xpink aria-[current=page]:font-bold aria-[current=page]:text-xpink"
				on:click={() => closeMenu()}
			>
				{item.title}
			</Anchor>
		{/each}
	</nav>
{/if}
