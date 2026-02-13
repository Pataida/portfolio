gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

// DESKTOP ANIMATIONS
mm.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
        }
    });

    tl.to(".text-mute", { opacity: 0, filter: "blur(10px)", duration: 1 })
      .to(".text-main", { opacity: 1, scale: 1, duration: 1 }, "-=0.5");
});

// MOBILE ANIMATIONS (Fixes flickering/visibility)
mm.add("(max-width: 768px)", () => {
    // Force clean start states
    gsap.set(".text-main", { autoAlpha: 0, scale: 0.8 });
    gsap.set(".text-mute", { autoAlpha: 1 });

    const mobileTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=100%", 
            scrub: 0.5,
            pin: true,
            anticipatePin: 1
        }
    });

    mobileTl
        .to(".text-mute", { autoAlpha: 0, filter: "blur(10px)", duration: 1 })
        .to(".text-main", { autoAlpha: 1, scale: 1, duration: 1 }, "-=0.5");
});

// GLOBAL ANIMATIONS (Portfolio & Pipeline)
gsap.to(".reveal-img", {
    scrollTrigger: {
        trigger: ".project-visual",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    scale: 1,
    ease: "none"
});

gsap.from(".pipeline-card", {
    scrollTrigger: {
        trigger: ".pipeline-grid",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Back to Top Logic
const backToTop = document.querySelector("#back-to-top");
if(backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// CTA Button Reveal
gsap.from(".cta-button", {
    scrollTrigger: {
        trigger: ".footer-section",
        start: "top 95%",
    },
    y: 20,
    opacity: 0,
    duration: 1
});
