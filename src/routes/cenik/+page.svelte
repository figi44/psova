<script>
	import Heading1 from '$lib/heading1.svelte';
	let services = [
		{
			name: 'Psychologická konzultace standard',
			length: '50 minut',
			price: '900,-'
		},
		{
			name: 'Psychologická konzultace prodloužená',
			length: '75 minut',
			price: '1350,-'
		},
		{
			name: 'Koučink standard',
			length: '60 minut',
			price: '1200,-'
		},
		{
			name: 'Koučink prodloužený',
			length: '80 minut',
			price: '1600,-'
		},
		{
			name: 'Podpůrná skupina',
			length: '60 minut',
			price: '150,-'
		},
		{
			name: 'Zpráva z konzultací na žádost klienta',
			length: 'zhotovení do 7 dní',
			price: '800,-'
		},
		{
			name: 'Psychodiagnostika',
			length: '-',
			price: 'cena dle zadání'
		}
	];
</script>

<Heading1>Ceník a podmínky</Heading1>

<div class="w-full">
	<table class="min-w-full table-auto text-left">
		<thead>
			<tr>
				<th class="py-2">Služba</th>
				<th class="py-2">Délka sezení</th>
				<th class="py-2">Cena</th>
			</tr>
		</thead>
		<tbody>
			{#each services as service}
				<tr class="border-t even:bg-slate-50">
					<td class="py-4">{service.name}</td>
					<td class="py-4">{service.length}</td>
					<td class="py-4">{service.price}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
