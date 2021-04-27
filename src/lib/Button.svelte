<script>
	export let type;
</script>

<a
	class="ui-button inline-block px-[14px] py-[11px] tablet:px-[27px] tablet:py-4 rounded-lg font-bold uppercase type-{type} transition-colors"
	href="#"><slot /></a
>

<style>
	/* normal state */
	.type-primary {
		@apply text-white bg-orange hover:bg-orange-light;
	}

	.type-secondary {
		@apply text-blue-dark bg-gray-light hover:text-white hover:bg-blue-dark;
	}
</style>
