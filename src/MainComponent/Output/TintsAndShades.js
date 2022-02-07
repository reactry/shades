import List from './List';



export default function TintsAndShades ({
	colors, n
}) {

	return (
		<div className="TintsAndShades">
			<List colors={colors} title="Tints and Shades" currentColorIndex={n-1} length={n} />
		</div>
	);
}
