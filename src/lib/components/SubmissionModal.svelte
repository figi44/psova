<script lang="ts">
	export let show = false;
	export let isError = false;
	export let onClose: () => void;
</script>

{#if show}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
		<div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
			<h3 class="text-lg font-semibold mb-4">
				{#if isError}
					Submission Failed
				{:else}
					Submission Successful
				{/if}
			</h3>
			<p class="mb-6">
				{#if isError}
					Failed to submit your choices. Please try again.
				{:else}
					Your choices have been successfully submitted!
				{/if}
			</p>
			<div class="flex justify-end">
				<button
					on:click={onClose}
					class="px-4 py-2 rounded-md text-sm font-medium bg-xlavender bg-opacity-20 hover:bg-opacity-30 transition-colors"
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}
