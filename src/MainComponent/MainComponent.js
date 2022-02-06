import React from 'react';



export default function MainComponent () {
	return (
		<>
			<div className="bg-purple-600 h-2 flex">
				<div className="bg-red-500 grow"></div>
				<div className="bg-slate-500 grow"></div>
				<div className="bg-blue-500 grow"></div>
				<div className="bg-slate-500 grow"></div>
				<div className="bg-green-500 grow"></div>
			</div>
			<main className="flex bg-slate-600 text-white min-h-screen">
				<h2 className="text-[120px] m-auto">shades</h2>
			</main>
		</>
	);
}
