



function getContrastClass (contrast) {
	if (contrast < 3) {
		return "border-red-600";
	} else if (contrast < 4.5) {
		return "border-red-400";
	} else if (contrast < 7) {
		return "border-green-400";
	} else {
		return "border-green-600";
	}
}

function getContrastComment (contrast) {
	let baseClass = "px-2 py-1";
	if (contrast < 3) {
		return <div className={baseClass + " bg-red-600"}>POOR</div>;
	} else if (contrast < 4.5) {
		return <div className={baseClass + " bg-red-400"}>BAD</div>;
	} else if (contrast < 7) {
		return <div className={baseClass + " bg-green-400"}>GOOD</div>;
	} else {
		return <div className={baseClass + " bg-green-600"}>EXCELLENT</div>;
	}
}

function accTextBlock (bg, fg, contrast) {
	let style = {
		backgroundColor: bg,
		color: fg
	};

	return (
		<div className="py-2">
			<div className="flex py-2 rounded" style={style}>
				<div className="grow px-4">{fg} on {bg}</div>
				<div className="text-sm font-bold px-2 text-white">
					{getContrastComment(contrast)}
				</div>
			</div>
		</div>
	);
}


export default function AccTab ({
	r, g, b, h, s, l, hex, shade,
	contrastWhite, contrastBlack
}) {

	let cRGB = "grow basis-0 bg-slate-200 pt-3 pb-2";
	let cH2 = "text-slate-700 text-2xl";
	let cH4 = "text-slate-400 text-xs";

	let contrastWhiteClass = cRGB + " border-4 " + getContrastClass(contrastWhite);
	let contrastBlackClass = cRGB + " border-4 " + getContrastClass(contrastBlack);

	return (
		<div className="AccTab">
			<div className="flex px-4 space-x-1 font-bold bg-slate-100 py-2">
				<div className={cRGB + contrastWhiteClass}>
					<div className={cH2}>{contrastWhite}</div>
					<div className={cH4}>White</div>
				</div>
				<div className={cRGB + contrastBlackClass}>
					<div className={cH2}>{contrastBlack}</div>
					<div className={cH4}>Black</div>
				</div>
			</div>
			<div className="px-4 text-left">
				{accTextBlock("white", hex, contrastWhite)}
				{accTextBlock(hex, "white", contrastWhite)}
				{accTextBlock("black", hex, contrastBlack)}
				{accTextBlock(hex, "black", contrastBlack)}
			</div>
		</div>
	);
}
