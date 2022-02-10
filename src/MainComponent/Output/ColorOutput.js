import React from 'react';

import {rgbToHex, getTintsAndShades} from '../../Utils';
import TintsAndShades from './TintsAndShades';
import Tints from './Tints';
import Shades from './Shades';
import OutputTabBar from './OutputTabBar';
import DownloadTab from './DownloadTab';

const outputTabs = [
	{
		"title": "All"
	},
	{
		"title": "Split"
	},
	{
		"title": "Download"
	}
];



export default function ColorOutput ({
	red, green, blue, hex, n, shadeNames,
	setHexColor, saveColor
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	let outputTabBarProps = {
		tabs: outputTabs,
		currentTabIndex, setCurrentTabIndex
	};

	let rgbColors = getTintsAndShades(red, green, blue, n);
	let colorNames = shadeNames[rgbColors.length];
	let colors = rgbColors.map((v, i) => {
		return {
			"shade": colorNames[i],
			"hex": rgbToHex(v.r, v.g, v.b),
			...v
		};
	});

	function getCurrentOutputTab () {
		let currentTabTitle = outputTabs[currentTabIndex].title;
		let props = {n, setHexColor, saveColor};

		if (currentTabTitle === "All") {
			return (
				<div>
					<TintsAndShades colors={colors} {...props} />
				</div>
			);
		} else if (currentTabTitle === "Split") {
			return (
				<div>
					<Tints colors={colors.slice(0, n).reverse()} {...props} />
					<Shades colors={colors.slice(-n)} {...props} />
				</div>
			);
		} else if (currentTabTitle === "Download") {
			return (
				<div>
					<DownloadTab colors={colors} n={n} />
				</div>
			);
		}
		return null;
	}

	return (
		<div className="ColorOutput bg-slate-200 min-h-screen pb-20">
			<OutputTabBar {...outputTabBarProps} />
			<div className="max-w-5xl mx-auto px-2">
				{getCurrentOutputTab()}
			</div>
		</div>
	);
}
