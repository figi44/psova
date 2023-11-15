<script lang="ts">
	export let bold = false;
</script>

<p class="mt-6 mb-2 text-lg {bold ? 'font-bold' : 'font-normal'}"><slot /></p>
