import React from 'react';

import Toggle from '../../Toggle';



export default function DownloadTab ({
	colors, n
}) {

	const [cssBg, setCssBg] = React.useState(true);
	const [cssFg, setCssFg] = React.useState(true);
	const [cssOutline, setCssOutline] = React.useState(true);
	const [cssBorder, setCssBorder] = React.useState(true);
	const [cssBorderSides, setCssBorderSides] = React.useState(false);

	//

	return (
		<div className="DownloadTab py-6">
			<h2 className="text-slate-600 text-3xl px-4 pt-8 hidden">Download</h2>
			<div className="py-6 gap-x-2 gap-y-2 flex flex-wrap">
				<Toggle title="Background" x={cssBg} setX={setCssBg} />
				<Toggle title="Text" x={cssFg} setX={setCssFg} />
				<Toggle title="Outline" x={cssOutline} setX={setCssOutline} />
				<Toggle title="Border" x={cssBorder} setX={setCssBorder} />
				<Toggle title="Border Sides" x={cssBorderSides} setX={setCssBorderSides} />
			</div>
		</div>
	);
}
