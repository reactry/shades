import React from 'react';

import {rgbToHsl} from '../../Utils';

import NumberSlider from './NumberSlider';



export default function HSLTab ({
	red, green, blue, hex,
	setHSL
}) {

	let [h, s, l] = rgbToHsl(red, green, blue);

	function updateColor () {
		setHSL(h, s, l);
	}

	function setH (value) {
		h = value;
		updateColor();
	}

	function setS (value) {
		s = value;
		updateColor();
	}

	function setL (value) {
		l = value;
		updateColor();
	}

	let hueSliderProps = {
		min: 0,
		max: 360,
		x: h,
		setX: setH,
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
		setX: setS,
		title: "Saturation"
	};

	let lightnessSliderProps = {
		...commonProps,
		x: l,
		setX: setL,
		title: "Lightness"
	};

	let hslBoxClass = "grow pt-5 pb-3 bg-slate-200 basis-0 rounded border-4 border-transparent duration-300";

	return (
		<div className="HSLTab select-none">
			<div className="flex text-center font-bold text-slate-700 px-8 pt-4 space-x-1 max-w-md mx-auto">
				<div className={hslBoxClass}>
					<div className="text-4xl relative left-2">
						<span>{h}</span>
						<span>&deg;</span>
					</div>
					<div className="text-sm py-1">Hue</div>
				</div>
				<div className={hslBoxClass}>
					<div className="relative left-2">
						<span className="text-4xl">{s}</span>
						<span className="relative bottom-2 pl-1">%</span>
					</div>
					<div className="text-sm py-1">Saturation</div>
				</div>
				<div className={hslBoxClass}>
					<div className="relative left-2">
						<span className="text-4xl">{l}</span>
						<span className="relative bottom-2 pl-1">%</span>
					</div>
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
