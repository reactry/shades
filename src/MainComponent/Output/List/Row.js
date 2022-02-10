import React from 'react';



export default function Row ({
	r, g, b, hex, shade, active
}) {

	let [showInfo, setShowInfo] = React.useState(false);

	let style = {
		backgroundColor: hex
	};

	let rowClasses = "md:w-64 font-bold";

	let cRGB = "grow bg-slate-200 px-2 pt-3 pb-2";
	let cH2 = "text-slate-700 text-2xl";
	let cH4 = "text-slate-400 text-sm";

	return (
		<div className={rowClasses}>
			<div onClick={() => setShowInfo(showInfo => !showInfo)} style={style}
				className="flex px-4 py-2 cursor-pointer">
				<div className="w-1/2 capitalize">{shade}</div>
				<div className="w-1/2 text-right">{hex}</div>
			</div>
			{showInfo && <div className="bg-slate-100 border-x-2 border-slate-400 px-4 py-4 text-center">
				<div className="flex space-x-1 font-bold bg-slate-100">
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
			</div>}
		</div>
	);
}
