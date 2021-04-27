<script>
	import Feature from '$lib/Feature.svelte';
</script>

<article class="ui-features mt-28 desktop:mt-[168px] flex flex-wrap">
	<Feature
		icon="compatible"
		title="Highly Compatible"
		description="Easy to use and works well with all major computer brands, gaming consoles and mobile devices.
Plug & play, no installation or driver needed."
	/>
	<Feature
		icon="bluetooth"
		title="Wireless with Bluetooth"
		description="Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away.
Simply plug the unifying receiver into your computer."
	/>
	<Feature
		icon="battery"
		title="High Capacity Battery"
		description="Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable
ones. Enjoy 40 hours of usage time between charges."
	/>
	<Feature
		icon="light"
		title="RGB Backlit Modes"
		description="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows
intensely in the dark and helps you type in low light conditions."
	/>
</article>

<style>
	.ui-features > :global(.ui-feature) {
		flex-basis: 100%;
	}

	@screen tablet {
		.ui-features > :global(.ui-feature) {
			flex-basis: 50%;
		}
	}

	@screen desktop {
		.ui-features > :global(.ui-feature) {
			flex-basis: 25%;
		}
	}

	/*
        gap between flex items
        see https://caniuse.com/?search=gap
        and https://gist.github.com/OliverJAsh/7f29d0fa1d35216ec681d2949c3fe8b7
    */
	.ui-features {
		margin-left: -64px;
		margin-bottom: -64px;
	}
	.ui-features > :global(.ui-feature) {
		padding-left: 64px;
		padding-bottom: 64px;
	}

	@screen tablet {
		.ui-features {
			margin-left: -69px;
			margin-bottom: -72px;
		}
		.ui-features > :global(.ui-feature) {
			padding-left: 69px;
			padding-bottom: 72px;
		}
	}

	@screen desktop {
		.ui-features {
			margin-left: -30px;
			margin-bottom: -30px;
		}
		.ui-features > :global(.ui-feature) {
			padding-left: 30px;
			padding-bottom: 30px;
		}
	}
</style>
