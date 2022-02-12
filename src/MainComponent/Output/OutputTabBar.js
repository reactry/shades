


export default function OutputTabBar ({
	tabs, currentTabIndex, setCurrentTabIndex
}) {

	let tabItems = tabs.map((v, i) => {
		if (v.hidden) return null;

		let tabClass = "px-5 grow md:grow-0 md:px-8 pt-4 pb-3 border-x-2 border-t-2 border-transparent duration-300";
		tabClass += (i === currentTabIndex) ? " -mb-1 bg-slate-200 border-slate-600" : " cursor-pointer hover:bg-slate-200";
		return (
			<div key={i} className={tabClass} onClick={() => setCurrentTabIndex(i)}>
				<div className="text-3xl md:hidden">{v.letter}</div>
				<div className="text-xs md:text-base">{v.title}</div>
			</div>
		);
	});

	return (
		<div className="OutputTabBar overflow-hidden select-none pt-6 bg-slate-300">
			<div className="border-b-2 border-slate-600">
				<div className="flex max-w-5xl mx-auto text-center text-base font-bold pl-2 pr-2">
					{tabItems}
				</div>
			</div>
		</div>
	);
}
