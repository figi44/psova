<script lang="ts">
	import { goto } from '$app/navigation';
	export let title: string;
</script>

<button
	class="py-[6px] px-[14px] rounded-[30px] text-white text-xl font-bold bg-xpink border-xpink border-2
			 hover:border-black hover:text-black transition-all ease-in
           "
	on:click={() => {
		goto('/kontakt');
	}}
>
	{title}
</button>
