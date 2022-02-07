import React from 'react';

import BigButton from '../../BigButton';
import Toggle from '../../Toggle';



function DownloadHeading (props) {
	return <h2 className="pt-12 pl-4 text-xl font-bold">{props.children}</h2>;
}

export default function DownloadTab ({
	colors, n
}) {

	const [cssBg, setCssBg] = React.useState(true);
	const [cssFg, setCssFg] = React.useState(true);
	const [cssOutline, setCssOutline] = React.useState(true);
	const [cssBorder, setCssBorder] = React.useState(true);
	const [cssBorderSides, setCssBorderSides] = React.useState(false);

	const [colorName, setColorName] = React.useState("purplish");

	const preTag = React.useRef(null);

	function copyCss (e) {
		navigator.clipboard.writeText(preTag.current.innerHTML)
	}

	function downloadCss (e) {
		let cssText = preTag.current.innerHTML;
		let filename = "reactry.css";

		let textFileAsBlob = new Blob([cssText], {type:'text/plain'});
		let downloadLink = document.createElement("a");
		downloadLink.download = filename;
		downloadLink.innerHTML = "Download CSS";

		function destroyClickedElement (event) {
			document.body.removeChild(event.target);
		}

		if (window.webkitURL != null) {
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		} else {
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroyClickedElement;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}

		downloadLink.click();
	}

	let numberOfClasses = 0;
	let cssCode = colors.map((v, i) => {
		let name = colorName + "-" + v.shade;
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
		let boxClass = "px-3 py-3 bg-slate-50 w-24 mr-1 grow select-none";
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
		<div className="DownloadTab pb-6">
			<DownloadHeading>Set color name</DownloadHeading>
			<div className="px-2 py-2">
				<input type="text" className="px-2 py-2 text-base bg-slate-100 border-2 border-slate-400 outline-none focus:border-blue-500"
					value={colorName} onChange={(e) => setColorName(e.target.value.trim())} />
			</div>

			<DownloadHeading>Select what you need?</DownloadHeading>
			<div className="py-4 gap-x-2 gap-y-2 flex flex-wrap">
				<Toggle title="Background" x={cssBg} setX={setCssBg} />
				<Toggle title="Text" x={cssFg} setX={setCssFg} />
				<Toggle title="Outline" x={cssOutline} setX={setCssOutline} />
				<Toggle title="Border" x={cssBorder} setX={setCssBorder} />
				<Toggle title="Border Sides" x={cssBorderSides} setX={setCssBorderSides} />
			</div>
			<div>
				<DownloadHeading>CSS Stats</DownloadHeading>
				{getSummary()}

				<DownloadHeading>Output</DownloadHeading>
				<div className="py-4">
					<BigButton title="Copy" handleClick={copyCss} />
					<BigButton title="Download" handleClick={downloadCss} />
				</div>

				<div className="px-4 py-4 bg-slate-300 text-blue-900 leading-8 max-h-screen overflow-y-scroll">
					<pre ref={preTag}>{cssCode}</pre>
				</div>
			</div>
		</div>
	);
}
