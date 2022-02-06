import List from './List';



export default function Shades ({
	red, green, blue, n
}) {

	let colors = [...Array(10).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red - (red * i / 10));
		let g = Math.floor(green - (green * i / 10));
		let b = Math.floor(blue - (blue * i / 10));
		return {r, g, b};
	});

	return (
		<div className="Shades">
			<h1 className="text-slate-600 text-lg">Shades</h1>
			<List colors={colors} />
		</div>
	);
}
