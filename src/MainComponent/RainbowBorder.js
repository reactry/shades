


export default function RainbowBorder ({bgClasses}) {
	let items = bgClasses.map((v, i) => {
		return <div key={i} className={"grow " + v}></div>
	});

	return (
		<div className="bg-slate-600 h-2 flex">
			{items}
		</div>
	);
}
