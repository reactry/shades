import List from './List';



export default function Shades ({
	colors, n, setHexColor, saveColor
}) {

	let props = {setHexColor, saveColor};

	return (
		<div className="Shades">
			<List colors={colors} title="Shades" currentColorIndex={0} {...props} />
		</div>
	);
}
