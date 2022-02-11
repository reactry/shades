import React from 'react';
import colorita from 'colorita';

import NumberSlider from './NumberSlider';



export default function HSVTab ({
	red, green, blue, hex,
	setHSL
}) {

	let [h, s, v] = colorita.rgbToHsl(red, green, blue);

	function updateColor () {
		setHSL(h, s, v);
	}

	function setH (value) {
		h = value;
		updateColor();
	}

	function setS (value) {
		s = value;
		updateColor();
	}

	function setV (value) {
		v = value;
		updateColor();
	}

	let hueSliderProps = {
		min: 0,
		max: 359,
		x: h,
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
		x: s,
		setX: setS,
		bg: "HSVSaturationSlider",
		title: "Saturation"
	};

	let valueSliderProps = {
		...commonProps,
		x: v,
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
						<span>{h}</span>
						<span>&deg;</span>
					</div>
					<div className="text-sm py-1">Hue</div>
				</div>
				<div className={hsvBoxClass}>
					<div className="relative left-2">
						<span className="text-4xl">{s}</span>
						<span className="relative bottom-2 pl-1">%</span>
					</div>
					<div className="text-sm py-1">Saturation</div>
				</div>
				<div className={hsvBoxClass}>
					<div className="relative left-2">
						<span className="text-4xl">{v}</span>
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
