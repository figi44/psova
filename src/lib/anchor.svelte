<script lang="ts">
	import { base } from '$app/paths';

	export let href: string;
	export let omitBase: boolean = false;
	export let external: boolean = false;
	export let cls: string = 'underline hover:text-xpink transition ease-in';
	export let download: string | undefined = undefined;

	const getRel = (): string => {
		if (!external) {
			return '';
		}
		return 'noopener noreferrer';
	};
	const getTarget = (): string => {
		if (!external) {
			return '';
		}
		return '_blank';
	};

	const getHref = (): string => {
		if (!external && !omitBase) {
			return `${base}/${href}`;
		}
		return href;
	};
</script>

<a href={getHref()} rel={getRel()} target={getTarget()} {download} class={cls}>
	<slot />
</a>
