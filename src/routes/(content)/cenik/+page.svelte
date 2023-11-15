<script>
	import { titleStore } from '../store';
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

	titleStore.set('Ceník');
</script>

<div class="w-full">
	<table class="min-w-full table-auto text-left whitespace-nowrap">
		<thead>
			<tr class="border-b border-xlavender">
				<th class="py-2 px-4">Služba</th>
				<th class="py-2 px-4">Délka sezení</th>
				<th class="py-2 px-4 text-right">Cena</th>
			</tr>
		</thead>
		<tbody>
			{#each services as service}
				<tr class="even:bg-gray-100">
					<td class="p-4">{service.name}</td>
					<td class="p-4">{service.length}</td>
					<td class="p-4 text-right">{service.price}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
