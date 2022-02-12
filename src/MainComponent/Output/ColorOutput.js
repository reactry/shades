import React from 'react';

import ColorMeter from './ColorMeter';
import OutputTabBar from './OutputTabBar';

import TintsAndShades from './TintsAndShades';
import Tints from './Tints';
import Shades from './Shades';
import PaletteTab from './PaletteTab';
import DownloadTab from './DownloadTab';

const outputTabs = [
	{
		"title": "All",
		"letter": "A"
	},
	{
		"title": "Split",
		"letter": "S"
	},
	{
		"title": "Palettes",
		"letter": "P"
	},
	{
		"title": "Download",
		"letter": "D"
	}
];



export default function ColorOutput ({
	red, green, blue, hex, n, shadeNames, colors,
	setHexColor, saveColor
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	let outputTabBarProps = {
		tabs: outputTabs,
		currentTabIndex, setCurrentTabIndex
	};

	

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
		} else if (currentTabTitle === "Palettes") {
			return (
				<div>
					<PaletteTab colors={colors} n={n} />
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

	let colorMeterProps = {
		colors,
		currentColorIndex: n-1,
		length: colors.length,
		setHexColor, saveColor
	};

	return (
		<div className="ColorOutput bg-slate-200 min-h-screen pb-20">
			<OutputTabBar {...outputTabBarProps} />
			<div className="h-8"></div>
			<ColorMeter {...colorMeterProps} />
			<div className="max-w-5xl mx-auto px-2">
				{getCurrentOutputTab()}
			</div>
			<ColorMeter {...colorMeterProps} />
		</div>
	);
}
