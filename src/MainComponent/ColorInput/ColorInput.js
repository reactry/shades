import React from 'react';

import TopTabBar from './TopTabBar';

const tabs = [
	{
		"title": "Hex"
	},
	{
		"title": "RGB"
	}
];



export default function ColorInput ({
	red, green, blue,
	setRed, setGreen, setBlue
}) {
	let [currentTabIndex, setCurrentTabIndex] = React.useState(0);
	let topTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};
	return (
		<div className="ColorInput bg-slate-300">
			<TopTabBar {...topTabBarProps} />
		</div>
	);
}
