<script lang="ts">
	import CompassIconUrl from '$lib/assets/compass-icon.svg';
	import LogoImgUrl from '$lib/assets/logo-nav.svg';
	import type { Card } from '$lib/types/values';
	import { onMount } from 'svelte';

	let selectedValues: Card[] = [];

	onMount(() => {
		const savedValues = localStorage.getItem('valuesWorksheet');
		if (savedValues) {
			selectedValues = JSON.parse(savedValues);
		}
		setTimeout(() => {
			document.title = 'Hodnoty';
			window.print();
		}, 200);
	});
</script>

<div class="values-worksheet p-8 max-w-3xl mx-auto">
	<div class="flex items-center gap-4 mb-8">
		<div class="icon-container w-20 h-20 flex-shrink-0">
			<img id="compass-icon-img" src={CompassIconUrl} alt="Compass Icon" class="w-full h-full" />
		</div>
		<h2 class="text-xl font-bold">
			Abych věděl*a, jakým směrem ubírat své kroky,<br />
			jsou pro mě důležité následující hodnoty:
		</h2>
	</div>

	{#if selectedValues.length > 0}
		<div class="values-list mb-8 border-2 border-gray-300 rounded-lg p-4 text-sm">
			<ul class="list-disc pl-8 space-y-2">
				{#each selectedValues as value}
					<li>
						<span class="font-semibold">{value.title}</span>
						{#if value.text}
							<span> - {value.text}</span>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="mb-10">
		<h3 class="font-semibold">V jakých konkrétních situacích se těmito hodnotami řídím?</h3>
		<div class="dotted-lines mb-6">
			<div class="h-6 border-b border-dotted border-gray-400" />
			<div class="h-6 border-b border-dotted border-gray-400" />
			<div class="h-6 border-b border-dotted border-gray-400" />
		</div>

		<h3 class="font-semibold">Kdy bych se těmito hodnotami řídit chtěl*a, ale neumím to?</h3>
		<div class="dotted-lines mb-6">
			<div class="h-6 border-b border-dotted border-gray-400" />
			<div class="h-6 border-b border-dotted border-gray-400" />
			<div class="h-6 border-b border-dotted border-gray-400" />
		</div>

		<h3 class="font-semibold">Na které z těchto hodnot bych rád*a intenzivněji pracoval*a?</h3>
		<div class="dotted-lines mb-6">
			<div class="h-6 border-b border-dotted border-gray-400" />
			<div class="h-6 border-b border-dotted border-gray-400" />
		</div>

		<h3 class="font-semibold">Co mi přinese, když se těmito hodnotami začnu více řídit?</h3>
		<div class="dotted-lines mb-6">
			<div class="h-6 border-b border-dotted border-gray-400" />
			<div class="h-6 border-b border-dotted border-gray-400" />
		</div>

		<h3 class="font-semibold">Co ztratím, když se těmito hodnotami začnu více řídit?</h3>
		<div class="dotted-lines mb-6">
			<div class="h-6 border-b border-dotted border-gray-400" />
			<div class="h-6 border-b border-dotted border-gray-400" />
		</div>
	</div>

	<div class="flex justify-center items-center">
		<img id="logo-img-img" src={LogoImgUrl} alt="PSOVA Logo" class="w-24" />
		<div class="text-gray-500 ml-4">© Kristýna Sznapková, www.psova.cz</div>
	</div>
</div>

<style>
	.values-worksheet {
		font-family: system-ui, -apple-system, sans-serif;
		line-height: 1.5;
	}

	.dotted-lines {
		background-color: rgba(249, 250, 251, 0.8);
	}
</style>
