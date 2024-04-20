import fleeAnimation from "./fleeAnimation.js";

// huddle up
gsap.to("#B", { x: 1200, duration: 0 });
gsap.to("#O", { x: 900, duration: 0 });
gsap.to("#G", { x: 500, duration: 0 });

fleeAnimation({
	id: "#B",
	duration: 5,
	bounceDelay: 2.2,
	runDelay: 2.2,
	runDistance: -550,
});

fleeAnimation({
	id: "#O",
	duration: 5,
	bounceDelay: 2,
	runDelay: 2,
	runDistance: -630,
});

fleeAnimation({
	id: "#G",
	duration: 5,
	bounceDelay: 2.1,
	runDelay: 2.1,
	runDistance: -670,
	shouldRoll: true,
});

// place bog
const boggoTimeline = gsap.timeline();
boggoTimeline.to("#boggo", { x: 1150, duration: 0 });
boggoTimeline.to("#boggo", { x: 550, duration: 2, ease: "none" });
boggoTimeline.to("#boggo", { x: -600, duration: 6, ease: "power4" });
