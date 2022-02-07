import React from 'react';

import ColorInput from './Input';
import ColorOutput from './Output';



export default function MainComponent ({settings}) {
	const [red, setRed] = React.useState(120);
	const [green, setGreen] = React.useState(70);
	const [blue, setBlue] = React.useState(230);

	const [n, setN] = React.useState(6);

	const shadeNames = settings.shadeNames;

	let colorInputProps = {
		red, green, blue, n,
		setRed, setGreen, setBlue, setN
	};
	let colorOutputProps = {
		red, green, blue, n, shadeNames
	};

	return (
		<>
			<ColorInput {...colorInputProps} />
			<ColorOutput {...colorOutputProps} />
		</>
	);
}
