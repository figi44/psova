<script lang="ts">
	import { Anchor, CTAButton } from '$lib';

	export let duration: string;
	export let price: string;
</script>

<section
	class="mt-16 rounded-[30px] bg-xlavender/15 p-6 md:p-9"
	aria-labelledby="service-practical-info"
>
	<div class="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
		<div>
			<h2 id="service-practical-info" class="text-2xl font-bold md:text-3xl">
				Praktické informace
			</h2>
			<dl class="mt-6 grid gap-4 sm:grid-cols-3">
				<div class="rounded-2xl bg-white/70 p-4">
					<dt class="text-sm text-xdarkgray">Délka setkání</dt>
					<dd class="mt-1 font-bold">{duration}</dd>
				</div>
				<div class="rounded-2xl bg-white/70 p-4">
					<dt class="text-sm text-xdarkgray">Cena</dt>
					<dd class="mt-1 font-bold">{price}</dd>
				</div>
				<div class="rounded-2xl bg-white/70 p-4">
					<dt class="text-sm text-xdarkgray">Forma</dt>
					<dd class="mt-1 font-bold">Osobně v Ostravě</dd>
				</div>
			</dl>
		</div>
		<div class="flex flex-col items-start gap-4 lg:items-end">
			<CTAButton title="Vybrat termín" />
			<div class="flex flex-wrap gap-x-5 gap-y-2 text-sm">
				<Anchor href="cenik">Kompletní ceník a podmínky</Anchor>
				<Anchor href="kontakt">Kontakt</Anchor>
			</div>
		</div>
	</div>
</section>
