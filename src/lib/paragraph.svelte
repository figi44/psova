<script lang="ts">
	export let bold = false;
	export let italic = false;
</script>

<p class="mt-6 mb-2 text-lg {bold ? 'font-bold' : 'font-normal'} {italic ? 'italic' : ''} xl:leading-relaxed"><slot /></p>
