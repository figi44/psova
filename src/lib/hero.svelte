<script>
	import PortraitImage from '$lib/assets/potrait1.jpg';
</script>

<div class="flex justify-center my-10 mx-2 items-center">
	<div class="w-1/2 flex flex-col items-center">
		<h1 class="text-6xl font-bold my-5">Hero title</h1>
		<p class="text-xl my-5">subtitle</p>
		<button
			class="py-1 px-4 my-5 rounded-md text-slate-700 font-medium bg-slate-200
        hover:bg-slate-400 hover:text-slate-900 hover:border-slate-900 border mx-auto"
			>Learn more!</button
		>
	</div>
	<div class="w-1/2">
		<img src={PortraitImage} alt="Obrazek" class="mx-auto max-h-96 rounded-3xl" />
	</div>
</div>
