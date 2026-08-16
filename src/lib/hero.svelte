<script lang="ts">
	import { CTAButton } from '$lib';

	export let title: string;
	export let quote: string;
	export let author: string;
	export let description: string;
	export let buttonTitle: string;
	export let imgPath: string;
</script>

<section
	class="relative flex min-h-[650px] w-full flex-col items-center justify-center overflow-hidden py-14 text-center md:py-20"
	aria-labelledby="hero-heading"
>
	<div
		class="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
		aria-hidden="true"
	/>

	<div class="relative z-10 flex max-w-4xl flex-col items-center">
		<img
			src={imgPath}
			alt="Portrét psycholožky Kristýny Sznapkové"
			width="455"
			height="455"
			class="mb-7 h-28 w-28 rounded-full border-4 border-white/70 shadow-xl md:h-32 md:w-32"
		/>
		<p class="text-sm font-bold uppercase tracking-[0.2em] text-white/75">{title}</p>
		<blockquote class="mt-6 max-w-4xl">
			<h1
				id="hero-heading"
				class="text-[38px] font-bold leading-[1.12] text-white sm:text-[52px] xl:text-[60px]"
			>
				„{quote}“
			</h1>
			<cite class="mt-4 block text-base not-italic tracking-wider text-white/70">— {author}</cite>
		</blockquote>
		<p class="mb-8 mt-7 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
			{description}
		</p>
		<CTAButton title={buttonTitle} />
	</div>
</section>
