


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
			(newX >= min) ? setX(newX) : setX(min);
		} else if (keyCode === 39) {
			// right arrow
			e.preventDefault();
			let newX = x + step;
			(newX <= max) ? setX(newX) : setX(max);
		}
	}

	let style = {
		width: Math.floor((x/max) * 100) + "%"
	}
	let parentClass = bgPassive + " cursor-pointer";

	return (
		<div className="NumberSlider px-4 py-3 font-bold text-sm outline-none border-2 border-transparent focus:bg-slate-200 focus:border-slate-400"
			tabIndex="0" onKeyDown={handleKeyDown}>
			<div>
				<h2 className="mb-1 px-1">{title}</h2>
				<div className={parentClass} onClick={handleClick}>
					<div className={"h-4 relative " + bgActive} style={style}>
						<div className="absolute -right-1 -top-1 h-6 w-2 bg-slate-600 border-2 border-white outline outline-2 outline-slate-800"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
