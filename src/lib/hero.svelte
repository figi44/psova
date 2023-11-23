<script lang="ts">
	import { CTAButton } from '$lib';

	export let title: string;
	export let subtitle: string;
	export let buttonTitle: string;
	export let imgPath: string;
</script>

<div class="flex w-full justify-between pt-24 mb-24 items-center">
	<div class="flex w-1/2 flex-col items-start">
		<h1 class="text-white text-[56px] font-bold tracking-[-0.175rem]">{title}</h1>
		<p class="text-white text-2xl mt-2 mb-16">{subtitle}</p>
		<div class="w-fit h-fit">
			<CTAButton title={buttonTitle} />
		</div>
	</div>
	<img src={imgPath} alt="Obrazek" class="rounded-full" />
</div>
