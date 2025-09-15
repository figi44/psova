<script>
	import { Anchor, CTAButton } from '$lib';
	import InstagramIcon from '$lib/assets/Instagram.svg';
	import LinkedInIcon from '$lib/assets/LinkedIn.svg';
	import LogoImg from '$lib/assets/logo-footer.svg';
	let year = new Date().getFullYear();
</script>

<hr class="border-0 border-t-[1px] border-xlavender xl:-mx-16 mt-72" />
<div class="grid lg:grid-cols-3 justify-items-center mt-8 gap-20 lg:gap-0">
	<img src={LogoImg} alt="Logo" class="lg:place-self-start h-[120px]" />
	<div class="self-center">
		<CTAButton title="Objednejte se" />
	</div>
	<p class="lg:justify-self-end text-xdarkgray text-center lg:text-left">
		Mgr. Kristýna Sznapková<br />
		IČ: 21031495<br />
		Bankovní spojení: 2869889028/3030<br />
		Na Hradbách 2632/18<br />
		Ostrava, 702 00
	</p>
</div>
<div class="flex justify-center mt-12">
	<Anchor href="https://instagram.com/psova_" external cls="mx-2"
		><img class="" src={InstagramIcon} alt="Instagram" />
	</Anchor>
	<Anchor href="https://www.linkedin.com/in/sznapkovakristyna/" external cls="mx-2">
		<img class="" src={LinkedInIcon} alt="LinkedIn" />
	</Anchor>
</div>
<p class="flex justify-center mt-7 pb-4 text-xdarkgray">
	© {year} Kristýna Sznapková
</p>
