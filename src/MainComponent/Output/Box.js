


export default function Box ({r, g, b, hex, name, active}) {
	let style = {
		backgroundColor: hex
	};

	let boxClasses = "Box w-28 mr-3 my-2 border-4";
	if (active) boxClasses += " border-blue-800"

	return (
		<div className={boxClasses}>
			{active && <div className="relative -top-1">
				<div className="absolute -left-1 w-6 h-6 border-4 border-blue-800"></div>
				<div className="absolute -right-1 w-6 h-6 border-4 border-blue-800"></div>
			</div>}
			<div className="h-16 flex" style={style}>
				<div className="text-sm font-bold bg-slate-50 px-2 text-slate-700 capitalize m-auto">{name}</div>
			</div>
			<div className="bg-slate-100 py-2 text-sm text-center font-bold text-slate-700 shadow">{hex}</div>
		</div>
	);
}
