import List from './List';



export default function Shades ({
	red, green, blue, n
}) {

	let colors = [...Array(n).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red - (red * i / n));
		let g = Math.floor(green - (green * i / n));
		let b = Math.floor(blue - (blue * i / n));
		return {r, g, b};
	});

	return (
		<div className="Shades">
			<List colors={colors} title="Shades" />
		</div>
	);
}