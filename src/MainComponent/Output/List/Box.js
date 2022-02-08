import React from 'react';



export default function Box ({r, g, b, hex, shade, active}) {
	let [showOptions, setShowOptions] = React.useState(false);

	let style = {
		backgroundColor: hex
	};

	let boxClasses = "Box w-28 mr-2 my-2 border-4 rounded-lg cursor-pointer overflow-hidden";
	boxClasses += (active) ? " border-blue-800" : " hover:border-blue-600";

	return (
		<div className={boxClasses} onClick={() => setShowOptions(!showOptions)}>
			{active && <div className="relative -top-1">
				<div className="absolute -left-1 w-6 h-6 border-4 border-blue-800"></div>
				<div className="absolute -right-1 w-6 h-6 border-4 border-blue-800"></div>
			</div>}
			{showOptions && <div className="">Options</div>}
			<div className="h-16 flex" style={style}>
				<div className="text-sm font-bold bg-slate-50 px-2 py-1 text-slate-700 capitalize m-auto rounded">{shade}</div>
			</div>
			<div className="bg-slate-100 py-2 text-sm font-bold text-slate-700 shadow">{hex}</div>
		</div>
	);
}
