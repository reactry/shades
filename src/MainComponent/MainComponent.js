import React from 'react';

import RainbowBorder from './RainbowBorder';
import Branding from './Branding';



export default function MainComponent ({settings}) {
	let bgClasses = [
		"bg-red-500", "bg-slate-500",
		"bg-blue-500", "bg-slate-500-500",
		"bg-green-500"
	];

	return (
		<>
			<RainbowBorder bgClasses={bgClasses} />
			<Branding meta={settings.meta} />
			<main className="flex bg-slate-600 text-white min-h-screen">
				<h2 className="text-[120px] m-auto">shades</h2>
			</main>
		</>
	);
}
