import React from 'react';

import Tints from './Tints';
import Shades from './Shades';
import OutputTabBar from './OutputTabBar';

const outputTabs = [
	{
		"title": "Single"
	},
	{
		"title": "Multi"
	}
];



export default function ColorOutput ({
	red, green, blue, n
}) {

	let [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	let outputTabBarProps = {
		tabs: outputTabs,
		currentTabIndex, setCurrentTabIndex
	};

	let props = {red, green, blue, n};

	return (
		<div className="ColorOutput bg-slate-200 min-h-screen pb-20">
			<OutputTabBar {...outputTabBarProps} />
			<div className="max-w-5xl mx-auto px-2">
				<Tints {...props} />
				<Shades {...props} />
			</div>
		</div>
	);
}
