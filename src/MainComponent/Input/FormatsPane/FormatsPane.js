import React from 'react';

import FormatsTabBar from './FormatsTabBar';
import NSelector from './NSelector';

import HexTab from './HexTab';
import RGBTab from './RGBTab';
import HSLTab from './HSLTab';
import HSVTab from './HSVTab';

import BigButton from '../../../BigButton';

const tabs = [
	{
		"title": "Hex"
	},
	{
		"title": "RGB"
	},
	{
		"title": "HSL"
	},
	{
		"title": "HSV"
	}
];



export default function FormatsPane ({
	red, green, blue, hex, n,
	setRed, setGreen, setBlue, setN,
	redIsFixed, greenIsFixed, blueIsFixed,
	setRedIsFixed, setGreenIsFixed, setBlueIsFixed,
	setRGB, setHSL, setHSV,
	saveColor, addColorToHistory,
	toggleVault, openVaultTab, settings, colors
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	const [showContent, setShowContent] = React.useState(false);
	let formatsTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex,
		showContent, setShowContent
	};

	function getCurrentTab () {
		let currentTabTitle = tabs[currentTabIndex].title;
		let commonProps = {
			red, green, blue, hex
		};

		if (currentTabTitle === "Hex") {
			let hexProps = {
				...commonProps,
				setRGB
			};
			return <HexTab {...hexProps} />;
		} else if (currentTabTitle === "RGB") {
			let rgbProps = {
				...commonProps,
				setRed, setGreen, setBlue,
				redIsFixed, greenIsFixed, blueIsFixed,
				setRedIsFixed, setGreenIsFixed, setBlueIsFixed
			};
			return <RGBTab {...rgbProps} />;
		} else if (currentTabTitle === "HSL") {
			let hslProps = {
				...commonProps,
				setHSL
			};
			return <HSLTab {...hslProps} />;
		} else if (currentTabTitle === "HSV") {
			let hsvProps = {
				...commonProps,
				setHSV
			};
			return <HSVTab {...hsvProps} />;
		}
	}

	let nSelectorProps = {
		n, setN, maxN: 10
	};

	return (
		<div className="FormatsPane grow bg-slate-100 border-b border-x border-slate-400">
			<FormatsTabBar {...formatsTabBarProps} />
			{showContent && <div className="px-8 pt-6 -mb-4 md:hidden">
				<div className="h-24" style={{backgroundColor: hex}}></div>
			</div>}
			{showContent && <div className="pt-4">
				{getCurrentTab()}
			</div>}
			{showContent && <NSelector {...nSelectorProps} />}
			{showContent && <div className="flex px-4 py-4 bg-slate-300">
				<BigButton title="Curated" handleClick={() => openVaultTab(0)} />
				<BigButton title="History" handleClick={() => openVaultTab(1)} />
				<BigButton title="Saved" handleClick={() => openVaultTab(2)} />
			</div>}
		</div>
	);
}
