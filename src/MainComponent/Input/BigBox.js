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
		<div className="BigBox px-4 py-8">
			<div className="flex">
				<BigButton title="Tint" handleClick={lightenColor} />
				<BigButton title="Shade" handleClick={darkenColor} />
				<BigButton title="Tone" />
			</div>
			<div className="my-5 rounded overflow-hidden shadow-md">
				<div className="h-40 md:h-56" style={style}></div>
				<div className="bg-slate-100 px-4 py-4 text-slate-700 font-bold text-xl">{hex}</div>
			</div>
			<div className="flex">
				<BigButton title="Random" handleClick={randomizeColor} />
				<BigButton title="Flip" handleClick={invertColor} />
				<BigButton title="Save" />
			</div>
		</div>
	);
}
