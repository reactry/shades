import BigBox from './BigBox';



export default function ControlsPane ({
	red, green, blue,
	tintColor, toneColor, shadeColor,
	flipColor, randomizeColor, saveColor,
	basicColors, mixColor
}) {

	let bigBoxProps = {
		red, green, blue,
		tintColor, toneColor, shadeColor,
		flipColor, randomizeColor, saveColor,
		basicColors, mixColor
	};

	return (
		<div className="ControlsPane md:w-1/2 md:pl-2">
			<BigBox {...bigBoxProps} />
		</div>
	);
}
