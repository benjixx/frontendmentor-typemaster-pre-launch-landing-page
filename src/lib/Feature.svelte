<script>
	export let icon;
	export let title;
	export let description;
</script>

<div class="ui-feature">
	<div
		class="mx-auto tablet:mx-0 w-[65px] h-[65px] rounded-2xl bg-orange bg-center bg-no-repeat icon-{icon}"
	/>
	<h3 class="tablet:max-w-[80%]">{title}</h3>
	<p>{description}</p>
</div>

<style>
	.icon-battery {
		background-image: url(/shared/icon-battery.svg);
	}

	.icon-bluetooth {
		background-image: url(/shared/icon-bluetooth.svg);
	}

	.icon-compatible {
		background-image: url(/shared/icon-compatible.svg);
	}

	.icon-light {
		background-image: url(/shared/icon-light.svg);
	}
</style>
