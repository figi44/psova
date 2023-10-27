<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let buttonTitle: string;
	export let imgPath: string;
</script>

<div class="flex justify-around my-10 mx-2 items-center">
	<div class="flex flex-col items-center m-6">
		<h1 class="text-6xl font-bold my-5">{title}</h1>
		<p class="text-xl my-5 self-start">{subtitle}</p>
		<button
			class="py-1 px-4 my-5 rounded-3xl text-slate-700 font-medium bg-slate-200
        hover:bg-slate-400 hover:text-slate-900 hover:border-slate-900 border self-end"
			>{buttonTitle}</button
		>
	</div>
	<div class="m-6">
		<img src={imgPath} alt="Obrazek" class="mx-auto max-h-96 rounded-3xl" />
	</div>
</div>
