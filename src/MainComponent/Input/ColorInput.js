import React from 'react';

import BigBox from './BigBox';
import BigButton from '../../BigButton';

import TopTabBar from './TopTabBar';
import NSelector from './NSelector';

import HexTab from './HexTab';
import RGBTab from './RGBTab';
import HSLTab from './HSLTab';

import {shadeX, tintX, toneX, mixX} from '../../Utils';

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
	red, green, blue, hex, n,
	setRed, setGreen, setBlue, setN,
	saveColor, addColorToHistory,
	toggleVault, openVaultTab, settings
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	let topTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	function randomizeRed () {setRed(Math.floor(Math.random() * 255));}
	function randomizeGreen () {setGreen(Math.floor(Math.random() * 255));}
	function randomizeBlue () {setBlue(Math.floor(Math.random() * 255));}

	function transformColor (t) {
		addColorToHistory();
		setRed(t(red));
		setGreen(t(green));
		setBlue(t(blue));
	}

	function shadeColor () {
		transformColor(shadeX);
	}

	function tintColor () {
		transformColor(tintX);
	}

	function toneColor () {
		transformColor(toneX);
	}

	function flipColor () {
		transformColor((x) => (255 - x));
	}

	function randomizeColor () {
		transformColor((x) => Math.floor(Math.random() * 255));
	}

	function mixColor (r, g, b) {
		addColorToHistory();
		setRed(mixX(red, r));
		setGreen(mixX(green, g));
		setBlue(mixX(blue, b));
	}

	const basicColors = settings.basicColors;
	let bigBoxProps = {
		red, green, blue,
		tintColor, toneColor, shadeColor,
		flipColor, randomizeColor, saveColor,
		basicColors, mixColor
	};

	function changeX (x, setX, change) {
		let newX = x + change;
		if (newX < 0) {
			setX(0);
		} else if (newX > 255) {
			setX(255);
		} else {
			setX(newX);
		}
	}

	function keydownEvent (e) {
		if (e.altKey) return;
		if (e.ctrlKey) return;

		let keyCode = e.keyCode;
		let key = e.key.toUpperCase();

		if (keyCode === 32) {
			e.preventDefault();
			randomizeColor();
			return;
		}

		if (e.shiftKey) {
			switch (key) {
				case "V": toggleVault(); break;

				default: break;
			}
		} else {
			switch (key) {
				case "Q": changeX(red, setRed, -25); break;
				case "W": changeX(red, setRed, -5); break;
				case "E": changeX(red, setRed, 5); break;
				case "R": changeX(red, setRed, 25); break;
				case "T": randomizeRed(); break;

				case "A": changeX(green, setGreen, -25); break;
				case "S": changeX(green, setGreen, -5); break;
				case "D": changeX(green, setGreen, 5); break;
				case "F": changeX(green, setGreen, 25); break;
				case "G": randomizeGreen(); break;

				case "Z": changeX(blue, setBlue, -25); break;
				case "X": changeX(blue, setBlue, -5); break;
				case "C": changeX(blue, setBlue, 5); break;
				case "V": changeX(blue, setBlue, 25); break;
				case "B": randomizeBlue(); break;

				default: break;
			}
		}
	}

	React.useEffect(() => {
		document.addEventListener('keydown', keydownEvent, false);

		return function cleanUp () {
			document.removeEventListener('keydown', keydownEvent, false);
		}
	}, [
		red, green, blue,
		setRed, setGreen, setBlue
	]);

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

	let nSelectorProps = {
		n, setN, maxN: 10
	};

	return (
		<div className="ColorInput bg-slate-300 pb-12">
			<div className="md:flex md:items-start max-w-5xl m-auto">
				<div className="grow bg-white">
					<TopTabBar {...topTabBarProps} />
					<div className="pt-4">
						{getCurrentTab()}
					</div>
					<NSelector {...nSelectorProps} />
					<div className="flex px-4 py-4 bg-slate-300">
						<BigButton title="Curated" handleClick={() => openVaultTab(0)} />
						<BigButton title="History" handleClick={() => openVaultTab(1)} />
						<BigButton title="Saved" handleClick={() => openVaultTab(2)} />
					</div>
				</div>
				<div className="md:w-1/2 md:pl-2">
					<BigBox {...bigBoxProps} />
				</div>
			</div>
		</div>
	);
}
