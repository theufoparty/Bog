import bounce from "./bounce.js";

const bounceAnimation = ({ id, duration, height, delay }) => {
	const timeline = gsap.timeline({ repeat: 0, yoyo: true });
	const totalBounces = Math.ceil((duration - delay) / 0.4);
	const lastBounces = 10;

	bounce({ timeline, id, duration: 0.4, height, delay });

	for (let i = 0; i < totalBounces - lastBounces; i++) {
		bounce({ timeline, id, duration: 0.4, height });
	}

	let currentHeight = height;
	for (let i = 0; i < lastBounces; i++) {
		bounce({ timeline, id, duration: 0.4, height: currentHeight });
		currentHeight = height / 3;
	}
};

export default bounceAnimation;
