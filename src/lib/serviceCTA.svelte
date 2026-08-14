<script lang="ts">
	import { Anchor, CTAButton } from '$lib';

	export let duration: string;
	export let price: string;
</script>

<section
	class="mt-16 rounded-[30px] border border-xlavender/20 bg-xlavender/10 p-6 md:p-9"
	aria-labelledby="service-practical-info"
>
	<div class="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
		<h2 id="service-practical-info" class="text-2xl font-bold md:text-3xl">Praktické informace</h2>
		<CTAButton title="Vybrat termín" />
	</div>

	<dl
		class="mt-7 grid overflow-hidden rounded-[22px] border border-xlavender/20 bg-white sm:grid-cols-3"
	>
		<div class="border-b border-xlavender/20 p-5 sm:border-b-0 sm:border-r md:px-6">
			<dt class="text-sm text-xdarkgray">Délka setkání</dt>
			<dd class="mt-1 font-bold">{duration}</dd>
		</div>
		<div class="border-b border-xlavender/20 p-5 sm:border-b-0 sm:border-r md:px-6">
			<dt class="text-sm text-xdarkgray">Cena</dt>
			<dd class="mt-1 font-bold">{price}</dd>
		</div>
		<div class="p-5 md:px-6">
			<dt class="text-sm text-xdarkgray">Forma</dt>
			<dd class="mt-1 font-bold">Osobně v Ostravě</dd>
		</div>
	</dl>

	<nav
		class="mt-5 flex flex-wrap justify-end gap-x-6 gap-y-3"
		aria-label="Další informace o službě"
	>
		<Anchor
			href="cenik"
			cls="inline-flex items-center gap-2 text-sm text-xdarkgray transition-colors hover:text-xpink"
		>
			Kompletní ceník a podmínky <span aria-hidden="true">→</span>
		</Anchor>
	</nav>
</section>
