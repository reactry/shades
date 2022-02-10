import ColorMeter from './ColorMeter';
import List from './List';



export default function TintsAndShades ({
	colors, n, setHexColor, saveColor
}) {

	let props = {
		colors,
		currentColorIndex: n-1,
		length: colors.length,
		setHexColor, saveColor
	};

	return (
		<div className="TintsAndShades">
			<ColorMeter {...props} />
			<List title="Tints and Shades" {...props} />
		</div>
	);
}
