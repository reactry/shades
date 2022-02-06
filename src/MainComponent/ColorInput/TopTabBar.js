


export default function TopTabBar ({
	tabs, currentTabIndex, setCurrentTabIndex
}) {

	let tabItems = tabs.map((v, i) => {
		if (v.hidden) return null;

		let tabClass = "grow px-2 py-3 duration-300 cursor-pointer";
		tabClass += (i === currentTabIndex) ? " bg-slate-300" : " hover:bg-slate-100";
		return (
			<div key={i} className={tabClass} onClick={() => setCurrentTabIndex(i)}>{v.title}</div>
		);
	});

	return (
		<div className="TopTabBar">
			<div className="flex text-center text-sm font-bold bg-slate-400">
				{tabItems}
			</div>
		</div>
	);
}
