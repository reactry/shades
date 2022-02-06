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
	red, green, blue, n,
	setRed, setGreen, setBlue, setN
}) {
	let [currentTabIndex, setCurrentTabIndex] = React.useState(0);
	let topTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	function getCurrentTab () {
		let currentTabTitle = tabs[currentTabIndex].title;
		let colorsAndSetters = {
			red, green, blue,
			setRed, setGreen, setBlue
		};

		if (currentTabTitle === "Hex") {
			let hexProps = {
				...colorsAndSetters
			};
			return <HexTab {...hexProps} />;
		} else if (currentTabTitle === "RGB") {
			let rgbProps = {
				...colorsAndSetters
			};
			return <RGBTab {...rgbProps} />;
		} else if (currentTabTitle === "HSL") {
			let hslProps = {
				...colorsAndSetters
			};
			return <HSLTab {...hslProps} />;
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
