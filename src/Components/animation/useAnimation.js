import { useEffect } from "react";

export const useAnimation = (breakpoint = 0) => {
    useEffect(() => {
        const body = document.querySelector("body");
        const animateItems = document.querySelectorAll("[data-animation]");

        const config = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        };

        let animationObserver = null;

        const attachObserver = () => {
            animateItems.forEach((item) => {
                if (item.getAttribute("data-animation")) {
                    animationObserver?.observe(item);
                }
            });
        };

        const animationOnScroll = () => {
            animationObserver = new IntersectionObserver(
                (entries) =>
                    entries.forEach(({ target, intersectionRatio }) => {
                        if (intersectionRatio > config.threshold) {
                            target.classList.add("m-animate");
                        }
                    }),
                config
            );
            attachObserver();
        };

        const toggleAnimationsBasedOnWindowSize = () => {
            if (
                "IntersectionObserver" in window &&
                window.matchMedia(`(min-width: ${breakpoint}px)`).matches
            ) {
                body?.classList.add("is-animation");
                if (!animationObserver) {
                    animationOnScroll();
                }
            } else {
                body?.classList.remove("is-animation");
                animationObserver?.disconnect();
                animationObserver = null;
            }
        };

        toggleAnimationsBasedOnWindowSize();
        window.addEventListener("resize", toggleAnimationsBasedOnWindowSize);

        return () => {
            window.removeEventListener("resize", toggleAnimationsBasedOnWindowSize);
            animationObserver?.disconnect();
        };
    }, [breakpoint]);
};