<script lang="ts">
	export let bold = false;
	export let italic = false;
</script>

<p
	class="mb-2 mt-6 text-lg leading-relaxed {bold ? 'font-bold' : 'font-normal'} {italic
		? 'italic'
		: ''}"
>
	<slot />
</p>
