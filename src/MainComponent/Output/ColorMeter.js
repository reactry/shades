


export default function ColorMeter ({
	colors, length, title, currentColorIndex,
	setHexColor, saveColor
}) {

	let colorItems = colors.map((c, i) => {
		let style = {
			backgroundColor: c.hex
		}

		if (i === currentColorIndex) {
			return (
				<div key={i} className="h-20 grow -my-2" style={style}></div>
			);
		} else {
			return (
				<div key={i} className="h-16 grow duration-300 cursor-pointer hover:px-4" style={style} onClick={() => setHexColor(c.hex)}></div>
			);
		}
	});

	return (
		<div className="ColorMeter flex border-2 border-slate-300 mt-8 h-20">
			{colorItems}
		</div>
	);
}
