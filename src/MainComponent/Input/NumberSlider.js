import {roundOffComponent} from '../../Utils';

import './NumberSlider.css';



export default function NumberSlider ({
	x, setX, min, max, step,
	bg, border, title
}) {

	let sliderClass = `appearance-none border-2 border-transparent ${bg} ${border} outline-none w-full form-range rounded`;

	return (
		<div className="NumberSlider px-4 py-2 font-bold text-sm outline-none">
			<div>
				<h2 className="mb-2 px-1">{title}</h2>
				<div className="NumberSlider">
					<input type="range" min="0" max="255" value={x}
						className={sliderClass}
						onChange={(e) => setX(parseInt(e.target.value))} />
				</div>
			</div>
		</div>
	);
}
