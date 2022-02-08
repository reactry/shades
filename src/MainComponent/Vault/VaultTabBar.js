


export default function VaultTabBar ({
	vaultTabs, currentTabIndex, setCurrentTabIndex
}) {

	let vaultTabItems = vaultTabs.map((v, i) => {
		if (v.hidden) return null;

		let tabClass = "grow px-2 py-6 md:py-3 duration-300";
		tabClass += (i === currentTabIndex) ? " bg-slate-100" : " cursor-pointer hover:bg-slate-200";
		return (
			<div key={i} className={tabClass} onClick={() => setCurrentTabIndex(i)}>{v.title}</div>
		);
	});

	return (
		<div className="VaultTabBar select-none">
			<div className="flex text-center text-sm font-bold bg-slate-300">
				{vaultTabItems}
			</div>
		</div>
	);
}
