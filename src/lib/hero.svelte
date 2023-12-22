<script lang="ts">
	import { CTAButton } from '$lib';

	export let title: string;
	export let subtitle: string;
	export let buttonTitle: string;
	export let imgPath: string;
</script>

<div class="flex flex-col-reverse xl:flex-row w-full justify-between pt-24 mb-24 items-center">
	<div class="flex xl:w-3/5 flex-col items-center xl:items-start mt-20 xl:mt-0">
		<h1 class="text-white text-[48px] text-center md:text-[56px] font-bold">
			{title}
		</h1>
		<p class="text-white text-center text-lg md:text-2xl mt-2 mb-16">{subtitle}</p>
		<div class="w-fit h-fit">
			<CTAButton title={buttonTitle} />
		</div>
	</div>
	<img src={imgPath} alt="Obrazek" class="rounded-full xl:w-2/5" />
</div>
