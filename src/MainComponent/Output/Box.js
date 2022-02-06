import {rgbToHex} from '../../Utils';



export default function Box ({r, g, b}) {
	let hexColor = rgbToHex(r, g, b);
	let style = {
		backgroundColor: hexColor
	};
	return (
		<div className="Box w-28 mr-3 my-2">
			<div className="h-16" style={style}></div>
			<div className="bg-slate-200 py-2 text-sm text-center font-bold text-slate-700">{hexColor}</div>
		</div>
	);
}
