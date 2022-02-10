import React from 'react';

import Vault from './Vault';
import ColorInput from './Input';
import ColorOutput from './Output';

import {rgbToHex, hexToRgb} from '../Utils';



export default function MainComponent ({settings}) {
	const [red, setRed] = React.useState(120);
	const [green, setGreen] = React.useState(70);
	const [blue, setBlue] = React.useState(230);
	const hex = rgbToHex(red, green, blue);
	function setHexColor (hex) {
		let [r, g, b] = hexToRgb(hex);
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
		toggleVault, openVaultTab, settings
	};
	let colorOutputProps = {
		red, green, blue, hex, n, shadeNames,
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
