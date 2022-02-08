import React from 'react';

import BigButton from './BigButton';



export default function Preferences () {
	const [showPreferences, setShowPreferences] = React.useState(false);

	return (
		<div className="Preferences px-4 py-24 bg-slate-700 text-slate-200">
			<div className="max-w-5xl m-auto">
				<div className="px-4 py-8 flex">
					<div>
						<BigButton title={showPreferences ? "Hide" : "Show"} handleClick={() => setShowPreferences(!showPreferences)} />
					</div>
					<div className="text-3xl pt-2">Preferences</div>
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
