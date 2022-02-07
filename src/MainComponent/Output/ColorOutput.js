import React from 'react';

import {getTintsAndShades} from '../../Utils';
import TintsAndShades from './TintsAndShades';
import Tints from './Tints';
import Shades from './Shades';
import OutputTabBar from './OutputTabBar';
import DownloadTab from './DownloadTab';

const outputTabs = [
	{
		"title": "Single"
	},
	{
		"title": "Multi"
	},
	{
		"title": "Downloads"
	}
];



export default function ColorOutput ({
	red, green, blue, n
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(2);
	let outputTabBarProps = {
		tabs: outputTabs,
		currentTabIndex, setCurrentTabIndex
	};

	let colors = getTintsAndShades(red, green, blue, n);

	function getCurrentOutputTab () {
		let currentTabTitle = outputTabs[currentTabIndex].title;
		if (currentTabTitle === "Single") {
			return (
				<div>
					<TintsAndShades colors={colors} n={n} />
				</div>
			);
		} else if (currentTabTitle === "Multi") {
			return (
				<div>
					<Tints colors={colors.slice(0, n).reverse()} n={n} />
					<Shades colors={colors.slice(-n)} n={n} />
				</div>
			);
		} else if (currentTabTitle === "Downloads") {
			return (
				<div>
					<DownloadTab colors={colors} />
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
