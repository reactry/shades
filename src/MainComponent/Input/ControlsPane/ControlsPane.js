import React from 'react';

import ControlsTabBar from './ControlsTabBar';
import BigBox from './BigBox';

const controlsTabs = [
	{
		"title": "1"
	},
	{
		"title": "2"
	},
	{
		"title": "3"
	},
	{
		"title": "4"
	}
];



export default function ControlsPane ({
	red, green, blue,
	tintColor, toneColor, shadeColor,
	flipColor, randomizeColor, saveColor,
	basicColors, mixColor
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	const [showContent, setShowContent] = React.useState(false);
	let controlsTabBarProps = {
		controlsTabs, currentTabIndex, setCurrentTabIndex,
		showContent, setShowContent
	};

	let bigBoxProps = {
		red, green, blue,
		tintColor, toneColor, shadeColor,
		flipColor, randomizeColor, saveColor,
		basicColors, mixColor
	};

	return (
		<div className="ControlsPane md:w-1/2 md:pl-2">
			<ControlsTabBar {...controlsTabBarProps} />
			<BigBox {...bigBoxProps} />
		</div>
	);
}
