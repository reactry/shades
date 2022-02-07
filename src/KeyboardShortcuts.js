import React from 'react';

import BigButton from './BigButton';



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
					<BigButton title={showShortcuts ? "Hide" : "Show"} handleClick={() => setShowShortcuts(!showShortcuts)} />
					<div className="text-3xl pl-1 pt-3">Shortcuts</div>
				</div>
				<div className="px-4 pt-8">
					{showShortcuts && shortcutItems}
				</div>
			</div>
		</div>
	);
}
