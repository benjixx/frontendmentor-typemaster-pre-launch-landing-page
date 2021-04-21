<script>
	import Logo from '$lib/Logo.svelte';
	import Button from '$lib/Button.svelte';
	import Feature from '$lib/Feature.svelte';
</script>

<main>
	<header class="flex flex-row items-center justify-between">
		<Logo />
		<Button type="secondary">Pre-Order Now</Button>
	</header>

	<h1>Typemaster Keyboard</h1>
	<p>
		Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
		mechanical typing experience.
	</p>
	<div class="container flex items-center">
		<div>
			<Button type="primary">Pre-Order Now</Button>
		</div>
		<div class="ui-release-info ml-8 font-bold text-blue-light uppercase">Release on 5/27</div>
	</div>
	<img src="/mobile/image-keyboard.jpg" alt="" class="keyboard" />

	<img src="" alt="" class="keyboard-orange" />
	<img src="" alt="" class="keyboard2" />

	<h2>Mechanical Wireless Keyboard</h2>
	<p>
		The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of
		switches and keycaps, along with reliable wireless connectivity.
	</p>

	<div class="mt-28">
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
	</div>
</main>
