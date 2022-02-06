import React from 'react';

import ColorInput from './Input';
import ColorOutput from './Output';



export default function MainComponent ({settings}) {
	let [red, setRed] = React.useState(128);
	let [green, setGreen] = React.useState(128);
	let [blue, setBlue] = React.useState(128);

	let [n, setN] = React.useState(10);

	let colorInputProps = {
		red, green, blue, n,
		setRed, setGreen, setBlue, setN
	};
	let colorOutputProps = {
		red, green, blue, n
	};

	return (
		<>
			<ColorInput {...colorInputProps} />
			<ColorOutput {...colorOutputProps} />
		</>
	);
}
