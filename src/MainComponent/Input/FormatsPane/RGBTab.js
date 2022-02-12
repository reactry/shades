import NumberSlider from './NumberSlider';



export default function RGBTab ({
	red, green, blue, hex,
	setRed, setGreen, setBlue,
	redIsFixed, greenIsFixed, blueIsFixed,
	setRedIsFixed, setGreenIsFixed, setBlueIsFixed
}) {

	let commonProps = {
		min: 0,
		max: 255
	}

	let redSliderProps = {
		...commonProps,
		x: red,
		setX: setRed,
		bg: "bg-red-500",
		border: "hover:border-red-700",
		title: "Red"
	};

	let greenSliderProps = {
		...commonProps,
		x: green,
		setX: setGreen,
		bg: "bg-green-500",
		border: "hover:border-green-700",
		title: "Green"
	};

	let blueSliderProps = {
		...commonProps,
		x: blue,
		setX: setBlue,
		bg: "bg-blue-500",
		border: "hover:border-blue-700",
		title: "Blue"
	};

	let rgbBoxClass = "grow pt-5 pb-3 basis-0 rounded cursor-pointer border-4 border-transparent duration-300";
	let fixedBoxClass = rgbBoxClass + " text-slate-500 border-slate-500";
	let notFixedBoxClass = rgbBoxClass + " text-slate-700 hover:border-slate-700";
	let redBoxClass = (redIsFixed ? fixedBoxClass : notFixedBoxClass) + " bg-red-200";
	let greenBoxClass = (greenIsFixed ? fixedBoxClass : notFixedBoxClass) + " bg-green-200";
	let blueBoxClass = (blueIsFixed ? fixedBoxClass : notFixedBoxClass) + " bg-blue-200";

	return (
		<div className="RGBTab select-none">

			<div className="flex text-center font-bold px-8 pt-4 space-x-1 max-w-md mx-auto">
				<div className={redBoxClass} onClick={() => setRedIsFixed(redIsFixed => !redIsFixed)}>
					<div className="text-4xl">{red}</div>
					<div className="text-sm py-1">Red</div>
				</div>
				<div className={greenBoxClass} onClick={() => setGreenIsFixed(greenIsFixed => !greenIsFixed)}>
					<div className="text-4xl">{green}</div>
					<div className="text-sm py-1">Green</div>
				</div>
				<div className={blueBoxClass} onClick={() => setBlueIsFixed(blueIsFixed => !blueIsFixed)}>
					<div className="text-4xl">{blue}</div>
					<div className="text-sm py-1">Blue</div>
				</div>
			</div>

			<div className="pt-4">
				<NumberSlider {...redSliderProps} />
				<NumberSlider {...greenSliderProps} />
				<NumberSlider {...blueSliderProps} />
			</div>

		</div>
	);
}
