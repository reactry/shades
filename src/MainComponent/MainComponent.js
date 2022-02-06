import React from 'react';

import RainbowBorder from './RainbowBorder';



export default function MainComponent () {
	let bgClasses = [
		"bg-red-500", "bg-slate-500",
		"bg-blue-500", "bg-slate-500-500",
		"bg-green-500"
	];

	return (
		<>
			<RainbowBorder bgClasses={bgClasses} />
			<main className="flex bg-slate-600 text-white min-h-screen">
				<h2 className="text-[120px] m-auto">shades</h2>
			</main>
		</>
	);
}
