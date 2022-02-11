



function getContrastClass (contrast) {
	if (contrast < 3) {
		return "border-red-400";
	} else if (contrast < 4.5) {
		return "border-yellow-400";
	} else if (contrast < 7) {
		return "border-green-300";
	} else {
		return "border-green-500";
	}
}

function getContrastComment (contrast) {
	let baseClass = "inline-block px-3 py-1 rounded";
	if (contrast < 3) {
		return <span className={baseClass + " bg-red-400"}>BAD</span>;
	} else if (contrast < 4.5) {
		return <span className={baseClass + " bg-yellow-400"}>OK</span>;
	} else if (contrast < 7) {
		return <span className={baseClass + " bg-green-300"}>GOOD</span>;
	} else {
		return <span className={baseClass + " bg-green-500"}>EXCELLENT</span>;
	}
}

function accTextBlock (bg, fg, contrast) {
	let style = {
		backgroundColor: bg,
		color: fg
	};

	return (
		<div className="py-2">
			<div className="py-4 mb-2 rounded" style={style}>{fg} on {bg}</div>
			<div className="text-left text-sm">
				{getContrastComment(contrast)}
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
			<div className="px-4">
				{accTextBlock("white", hex, contrastWhite)}
				{accTextBlock(hex, "white", contrastWhite)}
				{accTextBlock("black", hex, contrastBlack)}
				{accTextBlock(hex, "black", contrastBlack)}
			</div>
		</div>
	);
}
