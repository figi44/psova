<script>
	import InstagramIcon from '$lib/assets/Instagram.svg';
	import LinkedInIcon from '$lib/assets/LinkedIn.svg';
	let year = new Date().getFullYear();
</script>

<div class="flex flex-col justify-center items-center top-shaddow-md mt-20 pt-8 pb-4 bg-white">
	<p class="text-center text-slate-400 text-lg font-normal leading-5">
		© {year} Kristýna Sznapková
	</p>
	<div class="flex mt-4">
		<a href="https://instagram.com/psycho.knihy" target="_blank" class="mx-2"
			><img class="" src={InstagramIcon} alt="Instagram" /></a
		><a href="https://www.linkedin.com/in/sznapkovakristyna/" target="_blank" class="mx-2">
			<img class="" src={LinkedInIcon} alt="LinkedIn" /></a
		>
	</div>
</div>

<style>
	.top-shaddow-md {
		box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1);
	}
</style>
