import bounceAnimation from "./bounceAnimation.js";

const fleeAnimation = ({
	id,
	duration,
	bounceDelay,
	runDelay,
	runDistance,
	shouldRoll,
	bounceHeigt = 70,
	shouldWiggle,
}) => {
	bounceAnimation({
		id,
		duration,
		height: bounceHeigt,
		delay: bounceDelay,
	});

	if (shouldWiggle) {
		const timeline = gsap.timeline({});
		timeline.to(id, {
			x: runDistance + 100,
			rotation: 360 + 70,
			duration: duration - 0.2,
			transformOrigin: "center center",
			delay: runDelay,
			ease: "power3.outIn",
		});
		timeline.to(id, {
			x: runDistance,
			rotation: 360,
			transformOrigin: "center center",
			duration: 0.4,
			ease: "power3.in",
		});
	} else {
		gsap.to(id, {
			x: runDistance,
			...(shouldRoll ? { rotation: 720, transformOrigin: "center center" } : {}),
			duration,
			ease: "power3.out",
			delay: runDelay,
		});
	}
};

export default fleeAnimation;
