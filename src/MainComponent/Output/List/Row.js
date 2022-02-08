


export default function Row ({r, g, b, hex, shade, active}) {
	let style = {
		backgroundColor: hex
	};

	let rowClasses = "md:w-64 px-4 py-2 font-bold flex";

	return (
		<div className={rowClasses} style={style}>
			<div className="w-1/2 capitalize">{shade}</div>
			<div className="w-1/2 text-right">{hex}</div>
		</div>
	);
}
