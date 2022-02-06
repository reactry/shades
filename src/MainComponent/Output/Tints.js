import List from './List';



export default function Tints ({
	red, green, blue, n
}) {

	let colors = [...Array(n).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red + ((255 - red) * i / n));
		let g = Math.floor(green + ((255 - green) * i / n));
		let b = Math.floor(blue + ((255 - blue) * i / n));
		return {r, g, b};
	});

	return (
		<div className="Tints">
			<List colors={colors} title="Tints" />
		</div>
	);
}
