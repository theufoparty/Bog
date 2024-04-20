const bounce = ({ timeline, id, height, duration, delay = 0 }) => {
	timeline.to(id, { duration: duration / 2, y: -height, ease: "circ.out", delay });
	timeline.to(id, { duration: duration / 2, y: 0, ease: "circ.in" });
};

export default bounce;
