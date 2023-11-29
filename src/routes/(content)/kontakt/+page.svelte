<script lang="ts">
	import { base } from '$app/paths';
	import { Accordion, Heading3 } from '$lib';
	import { titleStore } from '../store';
	titleStore.set('Kontakt');

	async function handleSubmit(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);
		console.log(formData);

		const data: { [key: string]: string } = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value as string;
		}

		try {
			const response = await fetch('', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			if (response.ok) {
				//ok
			}
			// catch 429, 400, 500
		} catch (error) {
			console.error(error);
		}
	}
</script>

<div class="grid grid-cols-2 justify-between">
	<form class="w-4/5" on:submit|preventDefault={handleSubmit}>
		<label for="name">Jméno</label>
		<input name="name" id="name" type="text" />

		<label for="email">Email</label>
		<input name="email" id="email" type="email" />

		<label for="subject">Předmět</label>
		<input name="subject" id="subject" type="text" />

		<label for="msg">Zpráva</label>
		<textarea id="msg" name="msg" class="h-40 resize-y" />
		<div class="flex justify-end">
			<button
				class="py-0.5 px-3 rounded-xl text-white font-bold bg-xpink border-xpink border-2
			 hover:border-black hover:text-black transition-all ease-in
           "
			>
				Odeslat
			</button>
		</div>
	</form>
	<div>info</div>
</div>

<style lang="postcss">
	input,
	textarea {
		@apply px-4 py-0.5 w-full my-1 border border-xlavender rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-xlavender invalid:border-xpink invalid:text-xpink focus:invalid:border-xpink focus:invalid:ring-xpink;
	}
</style>
