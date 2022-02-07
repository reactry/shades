import {rgbToHex} from '../../Utils';

import BigButton from '../../BigButton';



export default function BigBox ({
	red, green, blue,
	darkenColor, lightenColor,
	invertColor, randomizeColor
}) {

	let hex = rgbToHex(red, green, blue);
	let style = {
		backgroundColor: hex
	};

	return (
		<div className="BigBox px-8 py-8">
			<div className="pb-8 flex">
				<BigButton title="Darken" handleClick={darkenColor} />
				<BigButton title="Lighten" handleClick={lightenColor} />
			</div>
			<div>
				<div className="h-40 md:h-56" style={style}></div>
				<div className="bg-slate-100 px-4 py-4 text-slate-700 font-bold text-xl">{hex}</div>
			</div>
			<div className="pt-8 flex">
				<BigButton title="Invert" handleClick={invertColor} />
				<BigButton title="Randomize" handleClick={randomizeColor} />
			</div>
		</div>
	);
}
