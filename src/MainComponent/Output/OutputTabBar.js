


export default function OutputTabBar ({
	tabs, currentTabIndex, setCurrentTabIndex
}) {

	let tabItems = tabs.map((v, i) => {
		if (v.hidden) return null;

		let tabClass = "px-8 py-5 -mb-1 border-x-2 border-t-2 border-transparent duration-300";
		tabClass += (i === currentTabIndex) ? " bg-slate-200 border-slate-600" : " cursor-pointer hover:bg-slate-300";
		return (
			<div key={i} className={tabClass} onClick={() => setCurrentTabIndex(i)}>{v.title}</div>
		);
	});

	return (
		<div className="OutputTabBar overflow-hidden">
			<div className="bg-slate-400 border-b-2 border-slate-600">
				<div className="flex max-w-5xl mx-auto text-center text-base font-bold">
					{tabItems}
				</div>
			</div>
		</div>
	);
}
