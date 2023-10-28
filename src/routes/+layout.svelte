<script>
	import { Footer, NavBar } from '$lib';

	let navButtonData = [
		{ title: 'Služby', href: '' },
		{ title: 'O mně', href: '' },
		{ title: 'Ceník', href: '' },
		{ title: 'Akutní problémy', href: '' },
		{ title: 'Etický kodex', href: '' },
		{ title: 'Kontakt', href: '' }
	];
</script>

<NavBar buttonData={navButtonData} />
<div class="w-10/12 mx-auto">
	<slot />
</div>
<Footer />
