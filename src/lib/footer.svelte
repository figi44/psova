<script>
	import { CTAButton } from '$lib';
	import InstagramIcon from '$lib/assets/Instagram.svg';
	import LinkedInIcon from '$lib/assets/LinkedIn.svg';
	import FacebookIcon from '$lib/assets/Facebook.svg';

	let year = new Date().getFullYear();
</script>

<hr class="border-0 border-t-[1px] border-xlavender -mx-16 mt-72" />
<div class="grid grid-cols-3 justify-items-center mt-8">
	<img src="" alt="Logo" class="place-self-start" />
	<div class="self-center">
		<CTAButton title="Objednejte se" />
	</div>
	<p class="justify-self-end text-xdarkgray">
		Kristýna Sznapková<br />
		IČO: 1234567890<br />
		Bankovní spojení: 123456/7890<br />
		Ulice 123/4<br />
		Ostrava
	</p>
</div>
<div class="flex justify-center mt-12">
	<a
		href="https://instagram.com/psycho.knihy"
		target="_blank"
		rel="noopener noreferrer"
		class="mx-2"
		><img class="" src={InstagramIcon} alt="Instagram" />
	</a>
	<a
		href="https://www.linkedin.com/in/sznapkovakristyna/"
		target="_blank"
		rel="noopener noreferrer"
		class="mx-2"
	>
		<img class="" src={LinkedInIcon} alt="LinkedIn" />
	</a>
	<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="mx-2">
		<img class="" src={FacebookIcon} alt="Facebook" />
	</a>
</div>
<p class="flex justify-center mt-7 pb-4 text-xdarkgray">
	© {year} Kristýna Sznapková
</p>
