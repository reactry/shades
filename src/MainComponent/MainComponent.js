import React from 'react';

import Vault from './Vault';
import ColorInput from './Input';
import ColorOutput from './Output';



export default function MainComponent ({settings}) {
	const [red, setRed] = React.useState(120);
	const [green, setGreen] = React.useState(70);
	const [blue, setBlue] = React.useState(230);

	const [n, setN] = React.useState(6);

	const [savedColors, setSavedColors] = React.useState([]);
	function saveColor (hex) {
		let colors = [...savedColors];
		colors.push(hex);
		setSavedColors(colors);
	}

	const shadeNames = settings.shadeNames;

	let vaultProps = {
		savedColors
	};
	let colorInputProps = {
		red, green, blue, n,
		setRed, setGreen, setBlue, setN, saveColor
	};
	let colorOutputProps = {
		red, green, blue, n, shadeNames
	};

	return (
		<>
			<Vault {...vaultProps} />
			<ColorInput {...colorInputProps} />
			<ColorOutput {...colorOutputProps} />
		</>
	);
}
