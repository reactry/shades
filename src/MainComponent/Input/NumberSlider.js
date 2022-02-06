


export default function NumberSlider ({
	x, setX, min, max, step,
	bgActive, bgPassive, title
}) {

	function handleClick (e) {
		//
	}

	function handleKeyDown (e) {
		let keyCode = e.keyCode;
		if (keyCode === 37) {
			// left arrow
			e.preventDefault();
			let newX = x - step;
			if (newX >= min) setX(newX);
		} else if (keyCode === 39) {
			// right arrow
			e.preventDefault();
			let newX = x + step;
			if (newX <= max) setX(newX);
		}
	}

	let parentClass = bgPassive + " cursor-pointer";

	return (
		<div className="NumberSlider px-4 py-3 font-bold text-sm outline-none border-2 border-transparent focus:bg-slate-200 focus:border-slate-400"
			tabIndex="0" onKeyDown={handleKeyDown}>
			<div>
				<h2 className="mb-1 px-1">{title}</h2>
				<div className={parentClass} onClick={handleClick}>
					<div className={"h-4 w-24 relative " + bgActive}>
						<div className="absolute -right-1 -top-1 h-6 w-2 bg-slate-600 border-2 border-white outline outline-2 outline-slate-800"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
