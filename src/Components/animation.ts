interface AnimationCheckerConfig {
	root: HTMLElement | null;
	rootMargin: string;
	threshold: number;
}

interface AnimationCheckerBaseConfig {
	body: HTMLElement | null;
	breakpoint: number;
	config: AnimationCheckerConfig;
	animationObserver: IntersectionObserver | null;
	animateItems: NodeListOf<HTMLElement> | null;
	animationOnScroll(): void;
	attachObserver(): void;
	disconnectObserver(): void;
	isObserverActive(): boolean;
	toggleAnimationsBasedOnWindowSize(): void;
	init(): void;
}

const AnimationChecker: AnimationCheckerBaseConfig = {
	body: document.querySelector('body'),
	breakpoint: 0, // set the breakpoint from which you want the animations to be active if you do not want the animations to be on mobile, set to zero if you want the animations to be on mobile
	config: {
		root: null, // an element whose surface our element is to overlap. Usually we want to use the whole viewport, so set `root: null`
		rootMargin: '0px', // outer edge around root element, when the watchdog is activated. RootMargin: '-50px 0px' - starts js fifty pixels before the element appears in the view
		threshold: 0.2 // value: 0 - 1, The value of how much of the element should be in the view when js is run for animation
	},
	animationObserver: null,
	animateItems: document.querySelectorAll('[data-animation]'),
	animationOnScroll() {
		if (!this.isObserverActive()) {
			const configIn = this.config;
			this.animationObserver = new IntersectionObserver(
				(entries) =>
					entries.forEach(
						({ target: { classList }, intersectionRatio }) => {
							if (intersectionRatio > configIn.threshold) {
								classList.add('m-animate');
							}
						}
					),
				configIn
			);
			this.attachObserver();
		}
	},
	attachObserver() {
		this.animateItems?.forEach((item: HTMLElement) => {
			if (item.dataset.animation) {
				this.animationObserver?.observe(item);
			}
		});
	},
	disconnectObserver() {
		if (this.isObserverActive()) {
			this.animationObserver?.disconnect();
			this.animationObserver = null;
		}
	},
	isObserverActive() {
		return this.animationObserver !== null;
	},
	toggleAnimationsBasedOnWindowSize() {
		if (
			'IntersectionObserver' in window &&
			window.matchMedia(`(min-width: ${this.breakpoint}px)`).matches
		) {
			this.body?.classList.add('is-animation');
			this.animationOnScroll();
		} else {
			this.body?.classList.remove('is-animation');
			this.disconnectObserver();
		}
	},
	init() {
		// Call once on initialization
		this.toggleAnimationsBasedOnWindowSize();

		// Add event listener for window resize
		window.onresize = this.toggleAnimationsBasedOnWindowSize.bind(this);
	}
};

AnimationChecker.init();
