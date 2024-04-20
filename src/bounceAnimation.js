import bounce from "./bounce.js";

const bounceAnimation = ({ gsap, id, duration, height }) => {
	const timeline = gsap.timeline({ repeat: 0, yoyo: true });
	const bounces = Math.ceil(duration / 0.4);

	let currentHeight = height;
	for (let i = 0; i < bounces; i++) {
		bounce({ timeline, id, duration: 0.4, height: currentHeight });
		currentHeight = (3 * height) / 4;
	}
};

export default bounceAnimation;
