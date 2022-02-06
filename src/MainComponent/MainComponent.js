import React from 'react';

import RainbowBorder from './RainbowBorder';
import Branding from './Branding';
import ColorInput from './Input';
import ColorOutput from './Output';



export default function MainComponent ({settings}) {
	let [red, setRed] = React.useState(128);
	let [green, setGreen] = React.useState(128);
	let [blue, setBlue] = React.useState(128);

	let [n, setN] = React.useState(10);

	let bgClasses = [
		"bg-red-500", "bg-slate-500",
		"bg-blue-500", "bg-slate-500-500",
		"bg-green-500"
	];

	let colorInputProps = {
		red, green, blue, n,
		setRed, setGreen, setBlue, setN
	};
	let colorOutputProps = {
		red, green, blue, n
	};

	return (
		<>
			<RainbowBorder bgClasses={bgClasses} />
			<ColorInput {...colorInputProps} />
			<ColorOutput {...colorOutputProps} />
			<Branding meta={settings.meta} />
		</>
	);
}
