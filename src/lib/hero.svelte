<script lang="ts">
	import { CTAButton } from '$lib';

	export let title: string;
	export let subtitle: string;
	export let buttonTitle: string;
	export let imgPath: string;
</script>

<section
	class="flex w-full flex-col-reverse items-center justify-between pb-20 pt-16 xl:flex-row xl:pb-24 xl:pt-24"
>
	<div class="mt-14 flex flex-col items-center xl:mt-0 xl:w-3/5 xl:items-start">
		<h1
			class="text-center text-[42px] font-bold leading-[1.1] text-white md:text-[56px] xl:text-left"
		>
			{title}
		</h1>
		<p class="mb-10 mt-3 text-center text-lg text-white md:text-2xl xl:text-left">{subtitle}</p>
		<CTAButton title={buttonTitle} />
	</div>
	<img
		src={imgPath}
		alt="Portrét psycholožky Kristýny Sznapkové"
		class="w-[min(78vw,380px)] rounded-full xl:w-2/5"
	/>
</section>
