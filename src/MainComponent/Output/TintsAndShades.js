import ColorMeter from './ColorMeter';
import List from './List';



export default function TintsAndShades ({
	colors, n, setHexColor, saveColor
}) {

	let props = {setHexColor, saveColor};

	return (
		<div className="TintsAndShades">
			<ColorMeter colors={colors} />
			<List colors={colors} title="Tints and Shades" currentColorIndex={n-1} length={colors.length} {...props} />
		</div>
	);
}
