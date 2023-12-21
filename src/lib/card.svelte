<script lang="ts">
	import { TextLink } from '$lib';
	import type { CardData } from './types';

	export let data: CardData;
</script>

<div class="flex flex-col justify-between bg-white rounded-[30px] p-5 group">
	<div class="flex gap-2 mb-10">
		<div class="border-x-4 border-xpink rounded" />
		<div>
			<h1 class="font-bold text-xl leading-[1.15] mb-5">{data.title}</h1>
			<p class="text-xdarkgray text-base">{data.text}</p>
		</div>
	</div>
	<TextLink href={data.linkHref}>{data.linkText || 'Chci vědět víc'}</TextLink>
</div>
