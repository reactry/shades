import React from 'react';
import colorita from 'colorita';

import NumberSlider from './NumberSlider';



export default function HSVTab ({
	red, green, blue, hex,
	setHSV
}) {

	let [H, S, V] = colorita.HSL2HSV(...colorita.rgbToHsl(red, green, blue));

	function updateColor () {
		setHSV(H, S, V);
	}

	function setH (value) {
		H = value;
		updateColor();
	}

	function setS (value) {
		S = value;
		updateColor();
	}

	function setV (value) {
		V = value;
		updateColor();
	}

	let hueSliderProps = {
		min: 0,
		max: 359,
		x: H,
		setX: setH,
		bg: "HueSlider",
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
		x: S,
		setX: setS,
		bg: "HSVSaturationSlider",
		title: "Saturation"
	};

	let valueSliderProps = {
		...commonProps,
		x: V,
		setX: setV,
		bg: "ValueSlider",
		title: "Value"
	};

	let hsvBoxClass = "grow pt-5 pb-3 bg-slate-200 basis-0 rounded border-4 border-transparent duration-300";

	return (
		<div className="HSVTab select-none">
			<div className="flex text-center font-bold text-slate-700 px-8 pt-4 space-x-1 max-w-md mx-auto">
				<div className={hsvBoxClass}>
					<div className="text-4xl relative left-2">
						<span>{H}</span>
						<span>&deg;</span>
					</div>
					<div className="text-sm py-1">Hue</div>
				</div>
				<div className={hsvBoxClass}>
					<div className="relative left-2">
						<span className="text-4xl">{S}</span>
						<span className="relative bottom-2 pl-1">%</span>
					</div>
					<div className="text-sm py-1">Saturation</div>
				</div>
				<div className={hsvBoxClass}>
					<div className="relative left-2">
						<span className="text-4xl">{V}</span>
						<span className="relative bottom-2 pl-1">%</span>
					</div>
					<div className="text-sm py-1">Value</div>
				</div>
			</div>

			<div className="pt-4">
				<NumberSlider {...hueSliderProps} />
				<NumberSlider {...saturationSliderProps} />
				<NumberSlider {...valueSliderProps} />
			</div>
		</div>
	);
}
