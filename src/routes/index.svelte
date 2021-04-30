<script>
	import Button from '$lib/Button.svelte';
	import Features from '$lib/Features.svelte';
</script>

<main
	class="ui-main relative mx-[-24px] tablet:mx-[-40px] flex flex-row flex-wrap tablet:items-center"
>
	<article class="mx-6 tablet:mx-10 w-[327px] tablet:w-[339px] desktop:w-[445px]">
		<h1>Typemaster Keyboard</h1>
		<p class="desktop:text-lg">
			Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
			mechanical typing experience.
		</p>
		<div class="container flex items-center">
			<Button type="primary">Pre-Order Now</Button>
			<div class="ui-release-info ml-8 tablet:ml-9 font-bold text-blue-light uppercase">
				Release on 5/27
			</div>
		</div>
	</article>

	<div class="crop-image-keyboard mt-16 overflow-hidden tablet:mt-[62px] desktop:ml-[57px]">
		<div class="image-keyboard" />
	</div>

	<div class="crop-image-phone-and-keyboard mt-6 overflow-hidden">
		<div class="image-phone-and-keyboard" />
	</div>

	<div class="crop-image-glass-and-keyboard mt-6 overflow-hidden">
		<div class="image-glass-and-keyboard" />
	</div>

	<article
		class="ui-article-mwk mx-6 tablet:mx-10 tablet:mt-[72px] tablet:flex tablet:flex-row tablet:items-center desktop:block desktop:ml-[125px]"
	>
		<h2>Mechanical Wireless Keyboard</h2>
		<p class="tablet:mt-0 tablet:ml-[50px] desktop:mt-7 desktop:ml-0">
			The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
			of switches and keycaps, along with reliable wireless connectivity.
		</p>
	</article>

	<Features />
</main>

<style>
	.ui-main > :global(.ui-features) {
		@apply px-6 tablet:px-10;
	}

	.crop-image-keyboard {
		width: calc(351px + 100vw - 375px);
		transform: translateX(24px);
	}

	.image-keyboard {
		@apply w-[372px] h-[331px] rounded-[20px] bg-cover bg-no-repeat;
		background-image: url('/mobile/image-keyboard.jpg');
	}

	.crop-image-phone-and-keyboard {
		transform: translateX(-22px);
	}

	.image-phone-and-keyboard {
		@apply relative w-[129px] h-[193px] rounded-[20px];
		background: #f16718;
	}
	.image-phone-and-keyboard::after {
		@apply absolute top-0 right-0 bottom-0 left-0 rounded-[20px] mix-blend-multiply opacity-75 bg-cover bg-no-repeat;
		content: '';
		background-image: url('/mobile/image-phone-and-keyboard.jpg');
	}

	.image-glass-and-keyboard {
		@apply w-[220px] h-[193px] rounded-[20px] bg-cover bg-no-repeat;
		background-image: url('/mobile/image-glass-and-keyboard.jpg');
	}

	@screen tablet {
		.crop-image-keyboard {
			width: clamp(321px, 321px + calc(100vw - 768px), 478px);
			transform: translateX(28px);
		}

		.image-keyboard {
			@apply w-[478px] h-[425px];
			background-image: url('/tablet/image-keyboard.jpg');
		}

		.crop-image-phone-and-keyboard {
			@apply ml-10 mt-10 w-[214px] h-[320px] transform-none;
		}

		.image-phone-and-keyboard {
			@apply w-[214px] h-[320px];
		}
		.image-phone-and-keyboard::after {
			background-image: url('/tablet/image-phone-and-keyboard.jpg');
		}

		.crop-image-glass-and-keyboard {
			@apply ml-[30px] mt-10;
		}

		.image-glass-and-keyboard {
			@apply w-[445px] h-[320px];
			background-image: url('/tablet/image-glass-and-keyboard.jpg');
		}
	}

	@screen desktop {
		.ui-main::before {
			content: '';
			@apply absolute w-[255px] h-[240px] bg-gray-light rounded-[20px];
			top: 62px;
			left: 1180px;
			opacity: 0;
			transition: opacity 1s ease-out;
		}

		.ui-main::after {
			content: '';
			@apply absolute w-[255px] h-[236px] bg-gray-light rounded-[20px];
			top: calc(62px + 480px + 40px + 480px - 236px);
			left: -245px;
			opacity: 0;
			transition: opacity 1s ease-out;
		}

		.crop-image-keyboard {
			width: unset;
		}

		.image-keyboard {
			@apply w-[540px] h-[480px];
			background-image: url('/desktop/image-keyboard.jpg');
		}

		.crop-image-phone-and-keyboard {
			width: unset;
			height: unset;
		}

		.image-phone-and-keyboard {
			@apply w-[255px] h-[480px];
		}
		.image-phone-and-keyboard::after {
			background-image: url('/desktop/image-phone-and-keyboard.jpg');
		}

		.crop-image-glass-and-keyboard {
			@apply ml-[30px] mt-10;
		}

		.image-glass-and-keyboard {
			@apply w-[445px] h-[480px];
			background-image: url('/desktop/image-glass-and-keyboard.jpg');
		}

		.ui-article-mwk {
			/* FIXME: for some reason required to reset width, otherwise it wraps to its own line */
			flex-basis: 255px;
		}
	}

	@media screen and (min-width: 1350px) {
		.ui-main::before,
		.ui-main::after {
			opacity: 1;
		}
	}
</style>
