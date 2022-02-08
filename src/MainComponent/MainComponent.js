import React from 'react';

import Vault from './Vault';
import ColorInput from './Input';
import ColorOutput from './Output';

import {rgbToHex} from '../Utils';



export default function MainComponent ({settings}) {
	const [red, setRed] = React.useState(120);
	const [green, setGreen] = React.useState(70);
	const [blue, setBlue] = React.useState(230);
	const hex = rgbToHex(red, green, blue);

	const [n, setN] = React.useState(6);

	const [showVault, setShowVault] = React.useState(false);

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
		showVault, setShowVault
	};
	let colorInputProps = {
		red, green, blue, hex, n,
		setRed, setGreen, setBlue, setN,
		saveColor, addColorToHistory,
		showVault, setShowVault, settings
	};
	let colorOutputProps = {
		red, green, blue, hex, n, shadeNames
	};

	return (
		<>
			<Vault {...vaultProps} />
			<ColorInput {...colorInputProps} />
			<ColorOutput {...colorOutputProps} />
		</>
	);
}
