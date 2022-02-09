


export default function ColorTile ({
	hex
}) {

	let style = {
		backgroundColor: hex
	};

	let boxClasses = "ColorTile w-28 mr-3 mb-4 rounded-md cursor-pointer overflow-hidden text-center border-2 border-slate-400 hover:border-blue-700";

	return (
		<div className={boxClasses} onClick={() => {}}>
			<div className="h-16 flex" style={style}></div>
			<div className="bg-slate-100 py-2 text-sm font-bold text-slate-700 shadow">{hex}</div>
		</div>
	);
}
