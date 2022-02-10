


export default function NSelector ({
	n, setN, maxN
}) {

	let arr = [...Array(maxN).keys()]
	let items = arr.map((v, i) => {
		let innerClass = "cursor-pointer h-8 rounded duration-300 border-4 border-slate-400 hover:border-slate-700";
		innerClass += (i < n) ? " bg-slate-500" : " bg-slate-300";
		if ((i+1) < maxN && (i+1) % 5 === 0) innerClass += " mr-2"
		return (
			<div key={i} className="grow">
				<div className={innerClass} onClick={() => setN(i+1)}></div>
			</div>
		);
	});

	function handleKeyDown (e) {
		let keyCode = e.keyCode;
		if (keyCode === 37) {
			// left arrow
			e.preventDefault();
			if (n > 1) setN(n - 1);
		} else if (keyCode === 39) {
			// right arrow
			e.preventDefault();
			if (n < maxN) setN(n + 1)
		}
	}

	return (
		<div className="NSelector px-4 pb-2 outline-none select-none" tabIndex="0" onKeyDown={handleKeyDown}>
			<h4 className="px-1 font-bold text-sm">Choose number of tints / shades?</h4>
			<div className="flex py-2 space-x-1">
				{items}
			</div>
		</div>
	);
}
