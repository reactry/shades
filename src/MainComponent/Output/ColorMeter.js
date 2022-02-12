


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
				<div key={i} className="grow -my-2 rounded" style={style}></div>
			);
		} else {
			return (
				<div key={i} className="h-16 md:h-28 grow duration-300 cursor-pointer hover:px-4" style={style} onClick={() => setHexColor(c.hex)}></div>
			);
		}
	});

	return (
		<div className="ColorMeter flex bg-slate-200 border-slate-300">
			{colorItems}
		</div>
	);
}
