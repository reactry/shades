


export default function InfoTab ({
	r, g, b, h, s, l, hex, shade,
	contrastWhite, contrastBlack
}) {

	let rowClasses = "md:w-72 font-bold";

	let cRGB = "grow basis-0 bg-slate-200 pt-3 pb-2";
	let cH2 = "text-slate-700 text-2xl";
	let cH4 = "text-slate-400 text-xs";

	return (
		<div className="InfoTab">

			<div className="flex px-4 space-x-1 font-bold bg-slate-100 py-2">
				<div className={cRGB}>
					<div className={cH2}>{r}</div>
					<div className={cH4}>Red</div>
				</div>
				<div className={cRGB}>
					<div className={cH2}>{g}</div>
					<div className={cH4}>Green</div>
				</div>
				<div className={cRGB}>
					<div className={cH2}>{b}</div>
					<div className={cH4}>Blue</div>
				</div>
			</div>

			<div className="flex px-4 space-x-1 font-bold bg-slate-100 py-2">
				<div className={cRGB}>
					<div className={cH2}>{h}</div>
					<div className={cH4}>Hue</div>
				</div>
				<div className={cRGB}>
					<div className={cH2}>{s}</div>
					<div className={cH4}>Saturation</div>
				</div>
				<div className={cRGB}>
					<div className={cH2}>{l}</div>
					<div className={cH4}>Lightness</div>
				</div>
			</div>

		</div>
	);
}
