import {rgbToHex} from '../../Utils';



export default function Box ({r, g, b, active}) {
	let hexColor = rgbToHex(r, g, b);
	let style = {
		backgroundColor: hexColor
	};

	let boxClasses = "Box w-28 mr-3 my-2 border-4";
	if (active) boxClasses += " border-blue-600"

	return (
		<div className={boxClasses}>
			<div className="h-16" style={style}></div>
			<div className="bg-slate-100 py-2 text-sm text-center font-bold text-slate-700 shadow">{hexColor}</div>
		</div>
	);
}
