import {rgbToHex} from '../../Utils';


export default function BigBox ({
	red, green, blue
}) {

	let hex = rgbToHex(red, green, blue);
	let style = {
		backgroundColor: hex
	};

	return (
		<div className="BigBox px-8 py-8">
			<div className="h-40" style={style}></div>
			<div className="bg-slate-100 px-4 py-4 text-slate-700 font-bold text-md">{hex}</div>
		</div>
	);
}
