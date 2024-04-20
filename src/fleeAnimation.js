import bounceAnimation from "./bounceAnimation.js";

const fleeAnimation = ({ id, duration, bounceDelay, runDelay, runDistance, shouldRoll }) => {
	bounceAnimation({
		id,
		duration,
		height: 70,
		delay: bounceDelay,
	});

	gsap.to(id, {
		x: runDistance,
		...(shouldRoll ? { rotation: -720, transformOrigin: "center center" } : {}),
		duration,
		ease: "power3.out",
		delay: runDelay,
	});
};

export default fleeAnimation;
