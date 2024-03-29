import React from 'react';
import colorita from 'colorita';

import Vault from './Vault';
import ColorInput from './Input';
import ColorOutput from './Output';



export default function MainComponent ({settings}) {
	const [red, setRed] = React.useState(120);
	const [green, setGreen] = React.useState(70);
	const [blue, setBlue] = React.useState(230);
	const hex = colorita.rgbToHex(red, green, blue);
	function setHexColor (hex) {
		let [r, g, b] = colorita.hexToRgb(hex);
		setRed(r); setGreen(g); setBlue(b);
	}

	const [n, setN] = React.useState(6);

	const [showVault, setShowVault] = React.useState(false);
	const toggleVault = () => setShowVault(showVault => !showVault);
	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	const openVaultTab = (n) => {
		setCurrentTabIndex(n);
		toggleVault();
	}

	const [colorHistory, setColorHistory] = React.useState([]);
	function addColorToHistory () {
		let colors = [...colorHistory];
		colors.push({hex});
		setColorHistory(colors);
	}

	const [savedColors, setSavedColors] = React.useState([]);
	function saveColor ({hex}) {
		if (savedColors.length > 0 && hex === savedColors[savedColors.length - 1].hex) return;
		let colors = [...savedColors];
		colors.push({hex});
		setSavedColors(colors);
	}

	const shadeNames = settings.shadeNames;

	const rgbColors = colorita.getTintsAndShades(red, green, blue, n);
	const colorNames = shadeNames[rgbColors.length];
	const colors = rgbColors.map((v, i) => {
		let c = [v.r, v.g, v.b];
		return {
			"shade": colorNames[i],
			"hex": colorita.rgbToHex(v.r, v.g, v.b),
			"contrastWhite": colorita.getContrastRounded(c, [255, 255, 255]),
			"contrastBlack": colorita.getContrastRounded(c, [0, 0, 0]),
			...v
		};
	});

	let vaultProps = {
		colorHistory, setColorHistory,
		savedColors, setSavedColors,
		setHexColor, toggleVault, showVault,
		currentTabIndex, setCurrentTabIndex
	};
	let colorInputProps = {
		red, green, blue, hex, n,
		setRed, setGreen, setBlue, setN,
		saveColor, addColorToHistory,
		toggleVault, openVaultTab, settings, colors
	};
	let colorOutputProps = {
		red, green, blue, hex, n, shadeNames, colors,
		setHexColor, saveColor
	};

	return (
		<>
			<Vault {...vaultProps} />
			<ColorInput {...colorInputProps} />
			<ColorOutput {...colorOutputProps} />
		</>
	);
}
