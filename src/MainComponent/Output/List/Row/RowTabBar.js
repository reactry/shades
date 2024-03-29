

export default function RowTabBar ({
	rowTabs, currentRowTabIndex, setCurrentRowTabIndex
}) {

	let rowTabItems = rowTabs.map((v, i) => {
		if (v.hidden) return null;

		let tabClass = "grow px-2 py-4 duration-300";
		tabClass += (i === currentRowTabIndex) ? " bg-slate-100" : " cursor-pointer hover:bg-slate-200";
		return (
			<div key={i} className={tabClass} onClick={() => setCurrentRowTabIndex(i)}>{v.title}</div>
		);
	});

	return (
		<div className="RowTabBar select-none">
			<div className="flex text-center text-sm font-bold bg-slate-300">
				{rowTabItems}
			</div>
		</div>
	);
}

