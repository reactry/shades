import React from 'react';



function SmallButton ({title, handleClick}) {
	return (
		<div className="w-16 bg-slate-300 px-1 py-2 mx-1 my-1 cursor-pointer rounded duration-300 hover:bg-slate-400" onClick={handleClick}>{title}</div>
	);
}

export default function Box ({
	r, g, b, hex, shade, active,
	setHexColor, saveColor
}) {

	let [showOptions, setShowOptions] = React.useState(false);

	let style = {
		backgroundColor: hex
	};

	let boxClasses = "Box flex mr-2 mb-6 border-y-[6px] text-sm font-bold text-slate-700 rounded select-none overflow-hidden text-center duration-300";
	boxClasses += (active || showOptions) ? " border-blue-800" : " hover:border-blue-600";

	return (
		<div className={boxClasses}>
			<div className="cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
				<div className="w-28 h-16 flex" style={style}>
					<div className="bg-slate-50 px-2 py-1 capitalize m-auto rounded">{shade}</div>
				</div>
				<div className="bg-slate-100 py-2 shadow">{hex}</div>
			</div>
			{showOptions && <div className="flex flex-wrap w-40 px-1 py-1 bg-slate-100 border-l-[5px] border-blue-800">
				<SmallButton title="Set" handleClick={() => setHexColor(hex)} />
				<SmallButton title="Copy" handleClick={() => navigator.clipboard.writeText(hex)} />
				<SmallButton title="Save" handleClick={() => saveColor({hex})} />
				<SmallButton title="Close" handleClick={() => setShowOptions(showOptions => !showOptions)} />
			</div>}
		</div>
	);
}
