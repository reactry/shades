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
			<div>
				<div className="h-40 md:h-56" style={style}></div>
				<div className="bg-slate-100 px-4 py-4 text-slate-700 font-bold text-md">{hex}</div>
			</div>
			<div className="pt-8 text-center flex">
				<button className="bg-slate-100 px-16 py-4 text-xl border-2 border-slate-400 text-slate-700 rounded hover:bg-slate-100 focus:bg-slate-100">Randomize</button>
			</div>
		</div>
	);
}
