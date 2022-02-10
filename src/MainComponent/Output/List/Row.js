import React from 'react';

import {rgbToHsl} from '../../../Utils';



export default function Row ({
	r, g, b, hex, shade, active
}) {

	let [showInfo, setShowInfo] = React.useState(false);
	let [h, s, l] = rgbToHsl(r, g, b);

	let style = {
		backgroundColor: hex
	};

	let rowClasses = "md:w-72 font-bold";

	let cRGB = "grow basis-0 bg-slate-200 pt-3 pb-2";
	let cH2 = "text-slate-700 text-2xl";
	let cH4 = "text-slate-400 text-xs";

	return (
		<div className={rowClasses}>
			<div onClick={() => setShowInfo(showInfo => !showInfo)} style={style}
				className="flex px-4 py-2 cursor-pointer duration-300 hover:px-8">
				<div className="w-1/2 capitalize">{shade}</div>
				<div className="w-1/2 text-right">{hex}</div>
			</div>
			{showInfo && <div className="bg-slate-100 border-2 border-slate-400 px-4 py-2 text-center">

				<div className="flex space-x-1 font-bold bg-slate-100 py-2">
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

				<div className="pt-4 hidden">
					<span className="px-3 py-2 bg-slate-200 text-slate-600 border border-slate-300">{hex}</span>
				</div>

				<div className="flex space-x-1 font-bold bg-slate-100 py-2">
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

			</div>}
		</div>
	);
}