import colorita from 'colorita';

import BigButton from '../../BigButton';
import ColorButton from './ColorButton';



export default function BigBox ({
	red, green, blue,
	tintColor, toneColor, shadeColor,
	flipColor, randomizeColor, saveColor,
	basicColors, mixColor
}) {

	let hex = colorita.rgbToHex(red, green, blue);
	let style = {
		backgroundColor: hex
	};

	let colorButtons = basicColors.map((c, i) => {
		return <ColorButton key={i} {...c} mixColor={mixColor} />;
	});

	function saveButtonClick () {
		saveColor({hex});
	}

	return (
		<div className="BigBox px-4 pt-6 pb-8">
			<div className="flex">
				<BigButton title="Tint" handleClick={tintColor} />
				<BigButton title="Shade" handleClick={shadeColor} />
				<BigButton title="Tone" handleClick={toneColor} />
			</div>
			<div className="flex">
				{colorButtons.slice(0, 6)}
			</div>
			<div className="my-1 rounded overflow-hidden shadow-md">
				<div className="h-40 md:h-48" style={style}></div>
				<div className="bg-slate-100 px-4 py-4 text-slate-700 font-bold text-xl">{hex}</div>
			</div>
			<div className="flex">
				{colorButtons.slice(6)}
			</div>
			<div className="flex">
				<BigButton title="Random" handleClick={randomizeColor} />
				<BigButton title="Flip" handleClick={flipColor} />
				<BigButton title="Save" handleClick={saveButtonClick} />
			</div>
		</div>
	);
}
