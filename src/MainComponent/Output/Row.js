


export default function Row ({r, g, b, hex, shade, active}) {
	let style = {
		backgroundColor: hex
	};

	let rowClasses = "md:w-64 px-4 py-2 font-bold flex border-y-2 border-transparent";
	if (active) rowClasses += " border-slate-600";

	return (
		<div className={rowClasses} style={style}>
			<div className="w-1/2 capitalize">{shade}</div>
			<div className="w-1/2 text-right">{hex}</div>
		</div>
	);
}
