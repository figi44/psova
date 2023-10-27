<script lang="ts">
	import type { CardData } from './types';

	export let data: CardData;
</script>

<div class="flex flex-col border border-gray-300 rounded-3xl p-4 pb-8">
	<div class="w-10 h-10 rounded-3xl {data.dotColor}" />
	<h1 class="font-bold text-2xl leading-9 mb-2 mt-6">{data.title}</h1>
	<p class="text-lg leading-7 mb-8">{data.text}</p>
	<a class="mt-auto" href={data.linkHref}>{data.linkText || 'Chci vědět víc'} (sipka)</a>
</div>
