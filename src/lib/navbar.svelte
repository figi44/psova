<script lang="ts">
	import { base } from '$app/paths';
	import { NavButton } from '$lib';
	export let sticky = false;
	let buttonData = [
		{ title: 'služby', href: `${base}/#services` },
		{ title: 'o mně', href: `${base}/o-mne` },
		{ title: 'ceník', href: `${base}/cenik` },
		{ title: 'akutní problémy', href: `${base}/akutni-problemy` },
		{ title: 'faq', href: `${base}/faq` },
		{ title: 'kontakt', href: `${base}/kontakt` }
	];
</script>

<div class={sticky ? 'fixed top-0 left-0 bg-xlavender w-full flex justify-center shadow-md' : ''}>
	<nav
		class="flex w-full justify-between items-center py-4 {sticky ? 'w-[1120px] bg-xlavender' : ''}"
	>
		<a href={base || '/'}><img src="" alt="Logo" class="text-white" /></a>
		<div>
			<div class="justify-center items-center gap-7 flex">
				{#each buttonData as button}
					<NavButton title={button.title} href={button.href} />
				{/each}
			</div>
			<hr class="border-0 border-t-[1px] border-white border-opacity-30" />
		</div>
	</nav>
</div>
