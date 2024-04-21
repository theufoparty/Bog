import fleeAnimation from "./fleeAnimation.js";

// huddle up
gsap.to("#B", { x: 50, duration: 0 });
gsap.to("#O", { x: -100, duration: 0 });
gsap.to("#G", { x: -200, duration: 0 });

fleeAnimation({
	id: "#B",
	duration: 5,
	bounceDelay: 2.05,
	runDelay: 2.05,
	runDistance: 1050,
});

fleeAnimation({
	id: "#O",
	duration: 5,
	bounceDelay: 2,
	runDelay: 2,
	runDistance: 1130,
});

fleeAnimation({
	id: "#G",
	duration: 5,
	bounceDelay: 2.1,
	runDelay: 2.1,
	runDistance: 1270,
	shouldRoll: true,
});

// place bog
const boggoTimeline = gsap.timeline();
boggoTimeline.to("#Bog", { x: -1100, y: -200, duration: 0 });
boggoTimeline.to("#Bog", { x: -600, duration: 2, ease: "none" });
boggoTimeline.to("#Bog", { x: 500, duration: 6, ease: "power3" });
