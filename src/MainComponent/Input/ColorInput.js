import React from 'react';

import BigBox from './BigBox';

import TopTabBar from './TopTabBar';
import NSelector from './NSelector';

import HexTab from './HexTab';
import RGBTab from './RGBTab';
import HSLTab from './HSLTab';

import {darken, lighten} from '../../Utils';

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

	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	let topTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	function randomizeRed () {setRed(Math.floor(Math.random() * 255));}
	function randomizeGreen () {setGreen(Math.floor(Math.random() * 255));}
	function randomizeBlue () {setBlue(Math.floor(Math.random() * 255));}

	function transformColor (t) {
		setRed(t(red));
		setGreen(t(green));
		setBlue(t(blue));
	}

	function shadeColor () {
		transformColor(darken);
	}

	function tintColor () {
		transformColor(lighten);
	}

	function toneColor () {
		// transformColor((x) => (255 - x));
	}

	function flipColor () {
		transformColor((x) => (255 - x));
	}

	function randomizeColor () {
		transformColor((x) => Math.floor(Math.random() * 255));
	}

	function saveColor () {
		//
	}

	let bigBoxProps = {
		red, green, blue,
		tintColor, toneColor, shadeColor,
		flipColor, randomizeColor, saveColor
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
		let keyCode = e.keyCode;
		let key = e.key.toUpperCase();

		if (keyCode === 32) {
			e.preventDefault();
			randomizeColor();
			return;
		}

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
			<div className="md:flex max-w-5xl m-auto">
				<div className="grow bg-slate-100">
					<TopTabBar {...topTabBarProps} />
					<div className="pt-4">
						{getCurrentTab()}
					</div>
					<NSelector {...nSelectorProps} />
				</div>
				<div className="md:w-1/2 md:pl-2">
					<BigBox {...bigBoxProps} />
				</div>
			</div>
		</div>
	);
}
