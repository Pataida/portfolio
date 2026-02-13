// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for the scroll animation
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=100%", // Animation lasts for one full scroll height
        scrub: true,   // Ties animation progress to scroll bar
        pin: true,     // Keeps the section stuck while animating
    }
});

// 1. Fade out the muted text
tl.to(".text-mute", {
    opacity: 0,
    filter: "blur(10px)",
    duration: 1
});

// 2. Fade in and scale up the main legacy text
tl.to(".text-main", {
    opacity: 1,
    scale: 1,
    duration: 1
}, "-=0.5"); // Starts slightly before the first one finishes

// Portfolio section animation
// Add this below your Hero animation code
gsap.to(".reveal-img", {
    scrollTrigger: {
        trigger: ".project-visual",
        start: "top bottom", // Start when the top of the box hits the bottom of the screen
        end: "bottom top",    // End when the bottom of the box hits the top
        scrub: true
    },
    scale: 1, // Zoom out to normal size
    ease: "none"
});

// Pipeline section animation
gsap.from(".pipeline-card", {
    scrollTrigger: {
        trigger: ".pipeline-grid",
        start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3, // One card follows the other
    ease: "power4.out"
});

// Back to Top Logic
const backToTop = document.querySelector("#back-to-top");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Optional: Apple-style Button Reveal
gsap.from(".cta-button", {
    scrollTrigger: {
        trigger: ".footer-section",
        start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});