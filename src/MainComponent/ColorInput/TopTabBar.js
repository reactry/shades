


export default function TopTabBar ({
	tabs, currentTabIndex, setCurrentTabIndex
}) {

	let tabItems = tabs.map((v, i) => {
		if (v.hidden) return null;

		let tabClass = "grow px-2 py-3 duration-300";
		tabClass += (i === currentTabIndex) ? " bg-slate-100" : " cursor-pointer hover:bg-slate-200";
		return (
			<div key={i} className={tabClass} onClick={() => setCurrentTabIndex(i)}>{v.title}</div>
		);
	});

	return (
		<div className="TopTabBar">
			<div className="flex text-center text-sm font-bold bg-slate-300">
				{tabItems}
			</div>
		</div>
	);
}
