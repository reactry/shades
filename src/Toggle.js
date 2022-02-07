


export default function Toggle ({
	x, setX, title
}) {

	let circleClass = "h-6 w-6 -translate-y-1 rounded-full duration-300";
	circleClass += x ? " bg-green-600 translate-x-10" : " bg-gray-600";

	function handleKeyPress (e) {
		if (e.keyCode === 32) {
			e.preventDefault();
			setX(!x);
		}
	}

	return (
		<div className="select-none px-4 py-4 w-32 bg-slate-50 border-2 cursor-pointer outline-none duration-300 shadow hover:border-blue-500 focus:border-blue-500"
			onClick={() => setX(!x)} tabIndex="0" onKeyDown={handleKeyPress}>
			<div className="px-3 py-5 rounded-md">
				<div className="bg-gray-400 w-16 h-4 rounded-full">
					<div className={circleClass}></div>
				</div>
			</div>
			<div>
				<h2 className="text-sm text-center font-bold">{title}</h2>
			</div>
		</div>
	);
}
