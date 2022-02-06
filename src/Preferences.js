import React from 'react';



export default function Preferences () {
	let [showPreferences, setShowPreferences] = React.useState(false);

	return (
		<div className="Preferences px-4 py-24 bg-slate-700 text-slate-200">
			<div className="max-w-5xl m-auto">
				<div className="px-4 py-8 flex">
					<div onClick={() => setShowPreferences(!showPreferences)}
						className="bg-slate-200 px-3 py-4 w-32 text-center text-xl border-2 border-slate-400 cursor-pointer text-slate-700 rounded hover:bg-slate-100 focus:bg-slate-100">
						{showPreferences ? "Hide" : "Show"}</div>
					<div className="text-3xl pl-5 pt-4">Preferences</div>
				</div>
				{showPreferences && <div>
					<div className="px-4 pt-8">
						<p className="text-xl">Nothing here yet.</p>
					</div>
				</div>}
			</div>
		</div>
	);
}
