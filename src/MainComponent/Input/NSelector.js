


export default function NSelector ({
	n, setN, maxN
}) {

	let arr = [...Array(maxN).keys()]
	let items = arr.map((v, i) => {
		let innerClass = "cursor-pointer h-6 ";
		innerClass += (i < n) ? "bg-red-500" : "bg-slate-300";
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
		<div className="NSelector py-4 px-4 border-2 border-transparent outline-none focus:border-blue-400" tabIndex="0" onKeyDown={handleKeyDown}>
			<h4 className="px-1 font-bold text-sm">How many tints / shades?</h4>
			<div className="flex py-2 space-x-1">
				{items}
			</div>
		</div>
	);
}
