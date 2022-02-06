import React from 'react';

import TopTabBar from './TopTabBar';

const tabs = [
	{
		"title": "Hex"
	},
	{
		"title": "RGB"
	},
	{
		"title": "HSL"
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
		<div className="ColorInput bg-slate-300 py-8">
			<div className="max-w-xl m-auto bg-slate-100">
				<TopTabBar {...topTabBarProps} />
				<div className="p-4">
					<h2>Hallo</h2>
				</div>
			</div>
		</div>
	);
}
