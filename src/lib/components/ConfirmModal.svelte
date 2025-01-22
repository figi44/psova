<script lang="ts">
	export let show = false;
	export let onConfirm: () => void;
	export let onCancel: () => void;
</script>

{#if show}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
		<div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
			<h3 class="text-lg font-semibold mb-4">Reset Board</h3>
			<p class="mb-6">
				Are you sure you want to reset the board to its default state? This action cannot be undone.
			</p>
			<div class="flex justify-end space-x-3">
				<button
					on:click={onCancel}
					class="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
				>
					Cancel
				</button>
				<button
					on:click={onConfirm}
					class="px-4 py-2 rounded-md text-sm font-medium bg-xlavender bg-opacity-20 hover:bg-opacity-30 transition-colors"
				>
					Reset
				</button>
			</div>
		</div>
	</div>
{/if}
