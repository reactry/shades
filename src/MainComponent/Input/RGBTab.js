import NumberSlider from './NumberSlider';



export default function RGBTab ({
	red, green, blue,
	setRed, setGreen, setBlue
}) {

	let commonProps = {
		min: 0,
		max: 255,
		step: 10
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

	let rgbBoxClass = "grow pt-4 pb-2 bg-red-200 basis-0 rounded-lg";

	return (
		<div className="RGBTab select-none">

			<div className="flex text-center font-bold text-slate-700 px-8 pt-4 space-x-1 max-w-md mx-auto">
				<div className={rgbBoxClass + " bg-red-200"}>
					<div className="text-4xl">{red}</div>
					<div className="text-sm py-1">Red</div>
				</div>
				<div className={rgbBoxClass + " bg-green-200"}>
					<div className="text-4xl">{green}</div>
					<div className="text-sm py-1">Green</div>
				</div>
				<div className={rgbBoxClass + " bg-blue-200"}>
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
