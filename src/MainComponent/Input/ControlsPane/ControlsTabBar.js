


export default function ControlsTabBar ({
	controlsTabs, currentTabIndex, setCurrentTabIndex,
	showContent, setShowContent
}) {

	function handleTabClick (i) {
		if (i === currentTabIndex) {
			setShowContent(showContent => !showContent);
		} else {
			setCurrentTabIndex(i);
			setShowContent(true);
		}
	}

	let tabItems = controlsTabs.map((v, i) => {
		if (v.hidden) return null;

		let tabClass = "grow px-2 py-6 md:py-4 duration-300";
		tabClass += (i === currentTabIndex) ? " bg-slate-100" : " cursor-pointer hover:bg-slate-200";
		return (
			<div key={i} className={tabClass} onClick={() => handleTabClick(i)}>{v.title}</div>
		);
	});

	return (
		<div className="ControlsTabBar select-none">
			<div className="flex text-center text-sm font-bold bg-slate-300">
				{tabItems}
			</div>
		</div>
	);
}
