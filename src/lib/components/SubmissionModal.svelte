<script lang="ts">
	export let show = false;
	export let isError = false;
	export let onClose: () => void;
	export let onSubmit: (name: string, email: string) => void;
	export let isSubmitting = false;

	let name = '';
	let email = '';
	let nameError = '';
	let emailError = '';
	let isSubmitClicked = false;

	function validateForm(): boolean {
		let isValid = true;

		if (!name.trim()) {
			nameError = 'Name is required';
			isValid = false;
		} else {
			nameError = '';
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) {
			emailError = 'Email is required';
			isValid = false;
		} else if (!emailRegex.test(email)) {
			emailError = 'Please enter a valid email address';
			isValid = false;
		} else {
			emailError = '';
		}

		return isValid;
	}

	function handleSubmit() {
		if (validateForm()) {
			isSubmitClicked = true;
			onSubmit(name, email);
		}
	}
</script>

{#if show}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
		<div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
			<h3 class="text-lg font-semibold mb-4">
				{#if isError}
					Submission Failed
				{:else if isSubmitting}
					Submit Your Choices
				{:else}
					Submission Successful
				{/if}
			</h3>
			{#if isSubmitting}
				<div class="mb-6 space-y-4">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
							Your name
						</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-xlavender focus:border-transparent"
							placeholder="John Doe"
						/>
						{#if nameError}
							<p class="mt-1 text-sm text-red-500">{nameError}</p>
						{/if}
					</div>
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
							Your email
						</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-xlavender focus:border-transparent"
							placeholder="your@email.com"
						/>
						{#if emailError}
							<p class="mt-1 text-sm text-red-500">{emailError}</p>
						{/if}
					</div>
				</div>
				<div class="flex justify-end space-x-3">
					<button
						on:click={onClose}
						class="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
					>
						Cancel
					</button>
					<button
						on:click={handleSubmit}
						disabled={isSubmitClicked}
						class="px-4 py-2 rounded-md text-sm font-medium bg-xlavender bg-opacity-20 hover:bg-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						{isSubmitClicked ? 'Submitting...' : 'Submit'}
					</button>
				</div>
			{:else}
				<p class="mb-6">
					{#if isError}
						Failed to submit your choices. Please try again.
					{:else}
						<div class="space-y-2">
							<p>Your choices have been successfully submitted!</p>
							<div class="flex gap-1">
								<span>We'll send the results to:</span>
								<span>{email}</span>
							</div>
						</div>
					{/if}
				</p>
				<div class="flex justify-end">
					<button
						on:click={onClose}
						class="px-4 py-2 rounded-md text-sm font-medium bg-xlavender bg-opacity-20 hover:bg-opacity-30 transition-colors"
					>
						{isError ? 'Try Again' : 'Close'}
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
