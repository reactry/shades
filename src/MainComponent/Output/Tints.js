import List from './List';



export default function Tints ({
	colors, n, setHexColor, saveColor
}) {

	let props = {setHexColor, saveColor};

	return (
		<div className="Tints">
			<List colors={colors} title="Tints" currentColorIndex={0} {...props} />
		</div>
	);
}
