


export default function VaultTabBar ({
	vaultTabs, currentTabIndex, setCurrentTabIndex
}) {

	let vaultTabItems = vaultTabs.map((v, i) => {
		if (v.hidden) return null;

		let tabClass = "grow px-2 py-6 md:py-4 duration-300";
		tabClass += (i === currentTabIndex) ? " bg-slate-100" : " cursor-pointer hover:bg-slate-200";
		return (
			<div key={i} className={tabClass} onClick={() => setCurrentTabIndex(i)}>{v.title}</div>
		);
	});

	return (
		<div className="VaultTabBar select-none bg-slate-300">
			<div className="flex text-center text-sm font-bold max-w-5xl m-auto">
				{vaultTabItems}
			</div>
		</div>
	);
}
