


export default function RGBTab ({
	red, green, blue,
	setRed, setGreen, setBlue
}) {

	return (
		<div className="RGBTab">
			<div className="flex text-center font-bold text-slate-700 space-x-1 md:space-x-4">
				<div className="grow pt-4 pb-2 bg-red-200">
					<div className="text-5xl">{red}</div>
					<div className="py-1">Red</div>
				</div>
				<div className="grow pt-4 pb-2 bg-green-200">
					<div className="text-5xl">{green}</div>
					<div className="py-1">Green</div>
				</div>
				<div className="grow pt-4 pb-2 bg-blue-200">
					<div className="text-5xl">{blue}</div>
					<div className="py-1">Blue</div>
				</div>
			</div>
		</div>
	);
}
