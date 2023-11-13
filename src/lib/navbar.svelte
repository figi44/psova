<script lang="ts">
	import { NavButton } from '$lib';
	let buttonData = [
		{ title: 'služby', href: 'sluzby' },
		{ title: 'o mně', href: 'o-mne' },
		{ title: 'ceník', href: 'cenik' },
		{ title: 'akutní problémy', href: 'akutni-problemy' },
		{ title: 'faq', href: 'faq' },
		{ title: 'kontakt', href: 'kontakt' }
	];
</script>

<nav class="flex w-full justify-between items-center py-4">
	<a href="/"><img src="" alt="Logo" class="text-white" /></a>
	<div>
		<div class="justify-center items-center gap-7 flex">
			{#each buttonData as button}
				<NavButton title={button.title} href={button.href} />
			{/each}
		</div>
		<hr class="border-0 border-t-[1px] border-white border-opacity-30 -mx-3" />
	</div>
</nav>
