import React from 'react';
import colorita from 'colorita';

import BackgroundStrip from './BackgroundStrip';
import FormatsPane from './FormatsPane';
import ControlsPane from './ControlsPane';



export default function ColorInput ({
	red, green, blue, hex, n,
	setRed, setGreen, setBlue, setN,
	saveColor, addColorToHistory,
	toggleVault, openVaultTab, settings, colors
}) {

	const [redIsFixed, setRedIsFixed] = React.useState(false);
	const [greenIsFixed, setGreenIsFixed] = React.useState(false);
	const [blueIsFixed, setBlueIsFixed] = React.useState(false);

	function randomizeRed () {setRed(Math.floor(Math.random() * 255));}
	function randomizeGreen () {setGreen(Math.floor(Math.random() * 255));}
	function randomizeBlue () {setBlue(Math.floor(Math.random() * 255));}

	function setRedIf (r) {if (!redIsFixed) setRed(r);};
	function setGreenIf (g) {if (!greenIsFixed) setGreen(g);};
	function setBlueIf (b) {if (!blueIsFixed) setBlue(b);};

	function setRGBIf (r, g, b) {
		setRedIf(r);
		setGreenIf(g);
		setBlueIf(b);
	}

	function transformColor (t) {
		addColorToHistory();
		setRedIf(t(red));
		setGreenIf(t(green));
		setBlueIf(t(blue));
	}

	function shadeColor () {
		transformColor(colorita.shadeX);
	}

	function tintColor () {
		transformColor(colorita.tintX);
	}

	function toneColor () {
		transformColor(colorita.toneX);
	}

	function flipColor () {
		transformColor((x) => (255 - x));
	}

	function randomizeColor () {
		transformColor((x) => Math.floor(Math.random() * 255));
	}

	function mixColor (r, g, b) {
		const mixX = colorita.mixX;
		addColorToHistory();
		setRedIf(mixX(red, r));
		setGreenIf(mixX(green, g));
		setBlueIf(mixX(blue, b));
	}

	function setRGB (r, g, b) {
		addColorToHistory();
		setRed(r);
		setGreen(g);
		setBlue(b);
	}

	function setHSL (h, s, l) {
		let [r, g, b] = colorita.hslToRgb(h, s, l);
		setRGB(r, g, b);
	}

	function setHSV (h, s, v) {
		let [H, S, L] = colorita.HSV2HSL(h, s, v);
		let [r, g, b] = colorita.hslToRgb(H, S, L);
		setRGB(r, g, b);
	}

	const formatsPaneProps = {
		red, green, blue, hex, n,
		setRed, setGreen, setBlue,
		setRedIsFixed, setGreenIsFixed, setBlueIsFixed, setN,
		redIsFixed, greenIsFixed, blueIsFixed,
		setRedIsFixed, setGreenIsFixed, setBlueIsFixed,
		setRGB, setHSL, setHSV,
		saveColor, addColorToHistory,
		toggleVault, openVaultTab, settings, colors
	};

	const basicColors = settings.basicColors;
	const controlsPaneProps = {
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
		setRed, setGreen, setBlue,
		keydownEvent
	]);

	return (
		<div className="ColorInput bg-slate-300 relative min-h-screen">
			<BackgroundStrip colors={colors} />
			<div className="md:flex md:items-start max-w-5xl m-auto relative">
				<FormatsPane {...formatsPaneProps} />
				<ControlsPane {...controlsPaneProps} />
			</div>
		</div>
	);
}
