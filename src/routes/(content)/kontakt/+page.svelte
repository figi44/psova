<script lang="ts">
	import { titleStore } from '../store';
	titleStore.set('Kontakt');

	let disabled = false;
	let required = false;
	let errorMessage = '';
	let okMessage = '';
	let loading = false;

	async function handleSubmit(e: SubmitEvent) {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const data: { [key: string]: string } = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value as string;
			if (!value) {
				required = true;
				setTimeout(() => {
					form.reportValidity();
				}, 1);
				return;
			}
		}

		disabled = true;
		loading = true;
		try {
			const response = await fetch('https://vercel-resend.vercel.app/api/resend', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			loading = false;
			if (response.ok) {
				okMessage = 'Zpráva odeslána.';
				return;
			}

			if (response.status == 400) {
				errorMessage = 'Vyplňte všechna pole.';
				return;
			}

			if (response.status == 429) {
				errorMessage =
					'Formulář byl už před chvílí jednou odeslán, zkuste to prosím znovu později.';
				return;
			}

			if (response.status == 500) {
				errorMessage = 'Chyba, zkuste to prosím znovu.';
				return;
			}
		} catch (error) {
			loading = false;
			errorMessage = 'Chyba, zkuste to prosím znovu.';
			return;
		}
	}

	function handleBlur(e: Event) {
		const el = e.target as HTMLInputElement;
		el.required = true;
	}
</script>

<div class="grid grid-cols-2 justify-between">
	<form class="w-4/5" on:submit|preventDefault={handleSubmit}>
		<label for="name">Jméno</label>
		<input name="name" id="name" type="text" {disabled} {required} on:blur={handleBlur} />

		<label for="email">Email</label>
		<input name="email" id="email" type="email" {disabled} {required} on:blur={handleBlur} />

		<label for="subject">Předmět</label>
		<input name="subject" id="subject" type="text" {disabled} {required} on:blur={handleBlur} />

		<label for="msg">Zpráva</label>
		<textarea
			id="msg"
			name="body"
			class="h-40 resize-y"
			{disabled}
			{required}
			on:blur={handleBlur}
		/>
		<div class="flex justify-between items-start">
			<p class="{okMessage ? 'text-xdarkgray' : 'text-xpink'}  font-bold">
				{okMessage || errorMessage}
			</p>
			<div class="inline-flex gap-2 items-center">
				{#if loading}
					<div
						class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
						role="status"
					>
						<span
							class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
							>Loading...</span
						>
					</div>
				{/if}
				<button
					{disabled}
					class="py-0.5 px-3 rounded-xl text-white font-bold bg-xpink border-xpink border-2
				 hover:border-black hover:text-black transition-all ease-in disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200
						   "
				>
					Odeslat
				</button>
			</div>
		</div>
	</form>
	<div>info</div>
</div>

<style lang="postcss">
	input,
	textarea {
		@apply px-4 py-0.5 w-full my-1 border border-xlavender rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-xlavender invalid:border-xpink invalid:text-xpink focus:invalid:border-xpink focus:invalid:ring-xpink disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none;
	}
</style>
