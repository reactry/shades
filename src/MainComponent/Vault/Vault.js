import React from 'react';

import VaultTabBar from './VaultTabBar';
import CuratedList from './CuratedList';
import ColorHistory from './ColorHistory';
import SavedColors from './SavedColors';

import RainbowBorder from '../../RainbowBorder';
import BigButton from '../../BigButton';

const vaultTabs = [
	{"title": "Curated"},
	{"title": "History"},
	{"title": "Saved"}
];



export default function Vault ({
	colorHistory, setColorHistory,
	savedColors, setSavedColors,
	toggleVault, showVault
}) {

	let bgClasses = [
		"bg-red-500", "bg-slate-500",
		"bg-blue-500", "bg-slate-500-500",
		"bg-green-500"
	];

	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	let vaultTabBarProps = {
		vaultTabs, currentTabIndex, setCurrentTabIndex
	};

	function getCurrentTab () {
		let currentTabTitle = vaultTabs[currentTabIndex].title;
		let commonProps = {
			toggleVault
		};

		if (currentTabTitle === "Curated") {
			let curatedProps = {
				...commonProps
			};
			return <CuratedList {...curatedProps} />;
		} else if (currentTabTitle === "History") {
			let historyProps = {
				colorHistory, setColorHistory,
				...commonProps
			};
			return <ColorHistory {...historyProps} />;
		} else if (currentTabTitle === "Saved") {
			let savedProps = {
				savedColors, setSavedColors,
				...commonProps
			};
			return <SavedColors {...savedProps} />;
		}
	}

	let vaultClass = "Vault fixed z-50 top-0 left-0 w-screen h-screen bg-slate-100 duration-300";
	vaultClass += (showVault) ? " translate-y-0" : " translate-y-full";

	return (
		<div className={vaultClass}>
			<div className="flex flex-col h-full">
				<RainbowBorder bgClasses={bgClasses} />
				<VaultTabBar {...vaultTabBarProps} />
				<div className="grow w-full max-w-5xl m-auto px-4 py-4">
					{getCurrentTab()}
				</div>
				<div className="">
					<div className="px-4 py-6 max-w-5xl m-auto">
						<BigButton title="Close" handleClick={toggleVault} />
					</div>
				</div>
				<RainbowBorder bgClasses={bgClasses} />
			</div>
		</div>
	);
}
