import React from 'react';

import TopTabBar from './TopTabBar';

import HexTab from './HexTab';
import RGBTab from './RGBTab';
import HSLTab from './HSLTab';

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

	function getCurrentTab () {
		let currentTabTitle = tabs[currentTabIndex].title;
		if (currentTabTitle === "Hex") {
			return <HexTab />;
		} else if (currentTabTitle === "RGB") {
			return <RGBTab />;
		} else if (currentTabTitle === "HSL") {
			return <HSLTab />;
		}
	}

	return (
		<div className="ColorInput bg-slate-300 py-8">
			<div className="max-w-xl m-auto bg-slate-100">
				<TopTabBar {...topTabBarProps} />
				<div className="p-4">
					{getCurrentTab()}
				</div>
			</div>
		</div>
	);
}
