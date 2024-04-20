const bounce = ({ timeline, id, height, duration }) => {
	timeline.to(id, { duration: duration / 2, y: -height, ease: "circ.out" });
	timeline.to(id, { duration: duration / 2, y: 0, ease: "circ.in" });
};

export default bounce;
