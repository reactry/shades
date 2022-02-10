


export default function ColorMeter ({
	colors
}) {

	let colorItems = colors.map((c, i) => {
		let style = {
			backgroundColor: c.hex
		}
		return (
			<div key={i} className="h-20 grow" style={style}></div>
		);
	});

	return (
		<div className="ColorMeter flex border-2 border-slate-300 mt-8">
			{colorItems}
		</div>
	);
}
