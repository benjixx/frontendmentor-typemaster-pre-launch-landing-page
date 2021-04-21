<script>
	import Logo from '$lib/Logo.svelte';
	import Button from '$lib/Button.svelte';
	import Features from '$lib/Features.svelte';
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

	<div class="image image-keyboard" />
	<div class="image image-phone-and-keyboard" />
	<div class="image image-glass-and-keyboard" />

	<h2>Mechanical Wireless Keyboard</h2>
	<p>
		The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of
		switches and keycaps, along with reliable wireless connectivity.
	</p>

	<Features />
</main>

<style>
	.image-keyboard {
		@apply mt-16 rounded-tl-[20px] rounded-bl-[20px] bg-cover;
		width: 351px;
		height: 331px;
		background-image: url('/mobile/image-keyboard.jpg');
	}

	.image-phone-and-keyboard {
		@apply inline-block relative ml-[-24px] mt-6 rounded-tr-[20px] rounded-br-[20px];
		width: 107px;
		height: 193px;
		background: #f16718;
	}
	.image-phone-and-keyboard::after {
		@apply absolute top-0 right-0 bottom-0 left-0 rounded-tr-[20px] rounded-br-[20px] mix-blend-multiply opacity-75 bg-cover bg-no-repeat;
		content: '';
		background-image: url('/mobile/image-phone-and-keyboard.jpg');
		background-position: right;
	}

	.image-glass-and-keyboard {
		/* TODO: ml-5 is a workaround as there is another empty text node */
		@apply inline-block ml-5 rounded-[20px] bg-cover;
		width: 220px;
		height: 193px;
		background-image: url('/mobile/image-glass-and-keyboard.jpg');
	}

	.image {
		@apply bg-no-repeat;
	}
</style>
