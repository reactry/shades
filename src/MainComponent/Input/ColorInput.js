import React from 'react';

import BigBox from './BigBox';

import TopTabBar from './TopTabBar';
import NSelector from './NSelector';

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
	let [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	let topTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	function randomizeColor () {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		setRed(r); setGreen(g); setBlue(b);
	}

	let bigBoxProps = {red, green, blue, randomizeColor};

	React.useEffect(() => {
		function keydownEvent (e) {
			let keyCode = e.keyCode;
			if (keyCode === 32) {
				e.preventDefault();
				randomizeColor();
			}
		}
		document.addEventListener('keydown', keydownEvent, false);

		return function cleanUp () {
			document.removeEventListener('keydown', keydownEvent, false);
		}
	}, []);

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
		n, setN, maxN: 15
	};

	return (
		<div className="ColorInput bg-slate-300">
			<div className="md:flex max-w-5xl m-auto">
				<div className="grow bg-slate-100">
					<TopTabBar {...topTabBarProps} />
					<div className="pt-4">
						{getCurrentTab()}
					</div>
					<NSelector {...nSelectorProps} />
				</div>
				<div className="md:w-1/2">
					<BigBox {...bigBoxProps} />
				</div>
			</div>
		</div>
	);
}
