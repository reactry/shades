


export default function CopyTab ({
	r, g, b, h, s, l, hex, shade,
	contrastWhite, contrastBlack
}) {

	let textDivClass = "py-3";
	let textClass = "bg-slate-200 px-3 py-2 rounded";
	let rgbText = `rgb (${r}, ${g}, ${b})`;
	let hslText = `hsl (${h}, ${s}%, ${l}%)`;

	return (
		<div className="CopyTab">
			<div className="text-slate-700 py-4">
				<div className={textDivClass}>
					<span className={textClass}>{hex}</span>
				</div>
				<div className={textDivClass}>
					<span className={textClass}>{rgbText}</span>
				</div>
				<div className={textDivClass}>
					<span className={textClass}>{hslText}</span>
				</div>
			</div>
		</div>
	);
}
