import {rgbToHex} from '../../Utils';

import BigButton from '../../BigButton';



export default function BigBox ({
	red, green, blue,
	tintColor, toneColor, shadeColor,
	flipColor, randomizeColor, saveColor
}) {

	let hex = rgbToHex(red, green, blue);
	let style = {
		backgroundColor: hex
	};

	function saveButtonClick () {
		saveColor({hex});
	}

	return (
		<div className="BigBox px-4 py-8">
			<div className="flex">
				<BigButton title="Tint" handleClick={tintColor} />
				<BigButton title="Shade" handleClick={shadeColor} />
				<BigButton title="Tone" handleClick={toneColor} />
			</div>
			<div className="my-5 rounded overflow-hidden shadow-md">
				<div className="h-40 md:h-56" style={style}></div>
				<div className="bg-slate-100 px-4 py-4 text-slate-700 font-bold text-xl">{hex}</div>
			</div>
			<div className="flex">
				<BigButton title="Random" handleClick={randomizeColor} />
				<BigButton title="Flip" handleClick={flipColor} />
				<BigButton title="Save" handleClick={saveButtonClick} />
			</div>
		</div>
	);
}
