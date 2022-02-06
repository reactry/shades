


export default function NumberSlider ({
	x, setX, min, max,
	bgActive, bgPassive, title
}) {

	let parentClass = bgPassive + " cursor-pointer outline outline-2 outline-transparent focus:outline-slate-600";

	return (
		<div className="NumberSlider py-3 font-bold text-sm">
			<div>
				<h2 className="mb-1 px-1">{title}</h2>
				<div className={parentClass} tabIndex="0">
					<div className={"h-4 w-24 relative " + bgActive}>
						<div className="absolute -right-1 -top-1 h-6 w-2 bg-slate-600 border-2 border-white outline outline-2 outline-slate-800"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
