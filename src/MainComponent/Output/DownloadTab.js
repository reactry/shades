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

	let numberOfClasses = 0;
	let cssCode = colors.map((v, i) => {
		let name = v.name;
		let hex = v.hex;
		let cssCodeLine = "";
		if (cssBg) {
			cssCodeLine += `.bg-${name} {background-color: ${hex};}\n`; numberOfClasses++;
		}
		if (cssFg) {
			cssCodeLine += `.text-${name} {color: ${hex};}\n`; numberOfClasses++;
		}
		if (cssOutline) {
			cssCodeLine += `.outline-${name} {outline-color: ${hex};}\n`; numberOfClasses++;
		}
		if (cssBorder) {
			cssCodeLine += `.border-${name} {border-color: ${hex};}\n`; numberOfClasses++;
		}
		if (cssBorderSides) {
			cssCodeLine += `.border-b-${name} {border-bottom-color: ${hex};}\n`;
			cssCodeLine += `.border-l-${name} {border-left-color: ${hex};}\n`;
			cssCodeLine += `.border-r-${name} {border-right-color: ${hex};}\n`;
			cssCodeLine += `.border-t-${name} {border-top-color: ${hex};}\n`;

			cssCodeLine += `.border-x-${name} {border-left-color: ${hex}; border-right-color: ${hex};}\n`;
			cssCodeLine += `.border-y-${name} {border-top-color: ${hex}; border-bottom-color: ${hex};}\n`;
			numberOfClasses += 6;
		}
		return cssCodeLine;
	}).join("\n\n");

	function getSummary () {
		let boxClass = "px-3 py-3 bg-slate-50 w-24 mr-1 grow";
		let bigClasses = "text-4xl py-3";
		let smallClasses = "text-sm";
		return (
			<div className="flex font-bold text-slate-700 text-center py-4 max-w-sm">
				<div className={boxClass}>
					<div className={bigClasses}>{colors.length}</div>
					<div className={smallClasses}>Shades</div>
				</div>
				<div className={boxClass}>
					<div className={bigClasses}>{numberOfClasses}</div>
					<div className={smallClasses}>Classes</div>
				</div>
				<div className={boxClass}>
					<div className={bigClasses}>{(cssCode.length / 1000).toFixed(1)}k</div>
					<div className={smallClasses}>Size</div>
				</div>
			</div>
		);
	}

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
			<div>
				{getSummary()}
				<div className="px-4 py-4 bg-slate-300 text-blue-900 leading-8 max-h-screen overflow-y-scroll">
					<pre>{cssCode}</pre>
				</div>
			</div>
		</div>
	);
}
