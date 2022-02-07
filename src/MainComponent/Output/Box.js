import {rgbToHex} from '../../Utils';



export default function Box ({r, g, b, active}) {
	let hexColor = rgbToHex(r, g, b);
	let style = {
		backgroundColor: hexColor
	};

	let boxClasses = "Box w-28 mr-3 my-2 border-4";
	if (active) boxClasses += " border-blue-800"

	return (
		<div className={boxClasses}>
			{active && <div className="relative -top-1">
				<div className="absolute -left-1 w-6 h-6 border-4 border-blue-800"></div>
				<div className="absolute -right-1 w-6 h-6 border-4 border-blue-800"></div>
			</div>}
			<div className="h-16" style={style}></div>
			<div className="bg-slate-100 py-2 text-sm text-center font-bold text-slate-700 shadow">{hexColor}</div>
		</div>
	);
}
