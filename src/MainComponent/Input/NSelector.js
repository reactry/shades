


export default function NSelector ({
	n, setN, maxN
}) {

	let arr = [...Array(maxN).keys()]
	let items = arr.map((v, i) => {
		let innerClass = "cursor-pointer h-6 ";
		innerClass += (i < n) ? "bg-red-500" : "bg-slate-300";
		return (
			<div className="grow">
				<div key={i} className={innerClass} onClick={() => setN(i+1)}></div>
			</div>
		);
	});

	return (
		<div className="NSelector py-2 px-6">
			<h4 className="px-2 font-bold text-sm">Select N</h4>
			<div className="flex py-4 space-x-1">
				{items}
			</div>
		</div>
	);
}
