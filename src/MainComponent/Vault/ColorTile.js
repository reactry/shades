


export default function ColorTile ({
	hex, setHexColor, toggleVault
}) {

	let style = {
		backgroundColor: hex
	};

	function handleClick () {
		setHexColor(hex);
		toggleVault();
	}

	let boxClasses = "ColorTile w-28 mr-3 mb-4 rounded cursor-pointer overflow-hidden text-center border-y-[6px] border-slate-400 duration-300 hover:border-blue-600";

	return (
		<div className={boxClasses} onClick={handleClick}>
			<div className="h-14 flex" style={style}></div>
			<div className="bg-slate-200 py-2 text-sm font-bold text-slate-700 shadow">{hex}</div>
		</div>
	);
}
