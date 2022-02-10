import './NumberSlider.css';



export default function NumberSlider ({
	x, setX, min, max,
	bg, border, title
}) {

	let sliderClass = `appearance-none border-2 border-transparent ${bg} ${border} outline-none w-full form-range rounded`;

	return (
		<div className="NumberSlider px-6 py-3 font-bold text-sm outline-none">
			<div>
				<h2 className="px-1 mb-2 hidden">{title}</h2>
				<div className="NumberSlider">
					<input type="range" min={min} max={max} value={x}
						className={sliderClass}
						onChange={(e) => setX(parseInt(e.target.value))} />
				</div>
			</div>
		</div>
	);
}
