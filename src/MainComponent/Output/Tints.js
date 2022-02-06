import List from './List';



export default function Tints ({
	red, green, blue, n
}) {

	let colors = [...Array(10).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red + ((255 - red) * i / 10));
		let g = Math.floor(green + ((255 - green) * i / 10));
		let b = Math.floor(blue + ((255 - blue) * i / 10));
		return {r, g, b};
	});

	return (
		<div className="Tints">
			<h1 className="text-slate-600 text-lg">Tints</h1>
			<List colors={colors} />
		</div>
	);
}
