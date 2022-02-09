import React from 'react';

import NumberSlider from './NumberSlider';



export default function HSLTab ({
	red, green, blue,
	setRed, setGreen, setBlue
}) {

	let [hue, saturation, lightness] = [150, 50, 50];
	const [h, setH] = React.useState(hue);
	const [s, setS] = React.useState(saturation);
	const [l, setL] = React.useState(lightness);

	function updateRGB () {
		//
	}

	function setHue (value) {
		setH(value);
		updateRGB();
	}

	function setSaturation (value) {
		setS(value);
		updateRGB();
	}

	function setLightness (value) {
		setL(value);
		updateRGB();
	}

	let hueSliderProps = {
		min: 0,
		max: 360,
		x: h,
		setX: setHue,
		bg: "bg-slate-500",
		border: "hover:border-slate-700",
		title: "Green"
	};

	let commonProps = {
		min: 0,
		max: 100,
		bg: "bg-slate-500",
		border: "hover:border-slate-700",
	};

	let saturationSliderProps = {
		...commonProps,
		x: s,
		setX: setSaturation,
		title: "Saturation"
	};

	let lightnessSliderProps = {
		...commonProps,
		x: l,
		setX: setLightness,
		title: "Lightness"
	};

	let hslBoxClass = "grow pt-4 pb-2 bg-slate-200 basis-0 rounded-lg";

	return (
		<div className="HSLTab select-none">
			<div className="flex text-center font-bold text-slate-700 px-8 pt-4 space-x-1 max-w-md mx-auto">
				<div className={hslBoxClass}>
					<div className="text-4xl">{h}</div>
					<div className="text-sm py-1">Hue</div>
				</div>
				<div className={hslBoxClass}>
					<div className="text-4xl">{s}</div>
					<div className="text-sm py-1">Saturation</div>
				</div>
				<div className={hslBoxClass}>
					<div className="text-4xl">{l}</div>
					<div className="text-sm py-1">Lightness</div>
				</div>
			</div>

			<div className="pt-4">
				<NumberSlider {...hueSliderProps} />
				<NumberSlider {...saturationSliderProps} />
				<NumberSlider {...lightnessSliderProps} />
			</div>
		</div>
	);
}
