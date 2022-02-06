import React from 'react';



export default function KeyboardShortcuts ({keyboardShortcuts}) {
	let [showShortcuts, setShowShortcuts] = React.useState(false);

	let shortcutItems = keyboardShortcuts.map((v, i) => {
		let keyClass = v.keyCode ? "bg-slate-300 px-3 py-2 w-12 text-center" : "py-2";

		return (
			<div key={i}>
				<div className="flex bg-slate-200 mb-1 max-w-lg">
					<div className="w-24 px-4 py-2 font-bold border-r-2 border-slate-300">
						<div className={keyClass}>
							{v.keyCode ? v.keyCode : v.keyName}
						</div>
					</div>
					<div className="grow px-4 py-4">
						<div className="font-bold text-slate-600">{v.description}</div>
					</div>
				</div>
				{v.separator && <div className="h-4"></div>}
			</div>
		);
	});
	return (
		<div className="KeyboardShortcuts bg-slate-300 text-slate-700 px-4 py-24">
			<div className="max-w-5xl m-auto">
				<div className="px-4 py-8 flex">
					<div onClick={() => setShowShortcuts(!showShortcuts)}
						className="bg-slate-200 px-3 py-4 w-32 text-center text-xl border-2 border-slate-400 cursor-pointer text-slate-700 rounded hover:bg-slate-100 focus:bg-slate-100">
						{showShortcuts ? "Hide" : "Show"}</div>
					<div className="text-3xl pl-5 pt-4">Shortcuts</div>
				</div>
				<div className="px-4 pt-8">
					{showShortcuts && shortcutItems}
				</div>
			</div>
		</div>
	);
}
