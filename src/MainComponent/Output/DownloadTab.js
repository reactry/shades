import React from 'react';

import Toggle from '../../Toggle';



export default function DownloadTab () {
	let [cssBg, setCssBg] = React.useState(true);
	let [cssFg, setCssFg] = React.useState(true);
	let [cssOutline, setCssOutline] = React.useState(true);
	let [cssBorder, setCssBorder] = React.useState(true);
	let [cssBorderSides, setCssBorderSides] = React.useState(false);

	return (
		<div className="DownloadTab py-12">
			<h2 className="text-slate-600 text-3xl px-2 pt-2">Download Tab</h2>
			<div className="py-8 space-x-2 flex">
				<Toggle title="Background" x={cssBg} setX={setCssBg} />
				<Toggle title="Text" x={cssFg} setX={setCssFg} />
				<Toggle title="Outline" x={cssOutline} setX={setCssOutline} />
				<Toggle title="Border" x={cssBorder} setX={setCssBorder} />
				<Toggle title="Border Sides" x={cssBorderSides} setX={setCssBorderSides} />
			</div>
		</div>
	);
}
