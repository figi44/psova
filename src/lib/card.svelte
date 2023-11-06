<script lang="ts">
	import RightArrow from '$lib/assets/right-arrow.svg';
	import type { CardData } from './types';

	export let data: CardData;
</script>

<div class="flex flex-col justify-between bg-white rounded-[30px] p-5">
	<div class="flex gap-2 mb-10">
		<div class="border-x-4 border-xpink rounded" />
		<div>
			<h1 class="font-bold text-xl leading-[1.15] mb-5">{data.title}</h1>
			<p class="text-xdarkgray text-base">{data.text}</p>
		</div>
	</div>
	<a class="ml-4 text-xdarkgray text-base inline-flex gap-[6px]" href={data.linkHref}
		>{data.linkText || 'Chci vědět víc'}<img src={RightArrow} alt="" class="w-5 mt-[4px]" /></a
	>
</div>
