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
		<div className="Shades py-4">
			<h1 className="text-slate-600 text-lg px-1">Shades</h1>
			<List colors={colors} />
		</div>
	);
}
