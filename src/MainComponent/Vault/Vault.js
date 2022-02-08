import React from 'react';

import VaultTabBar from './VaultTabBar';
import CuratedList from './CuratedList';
import ColorHistory from './ColorHistory';
import SavedColors from './SavedColors';

const vaultTabs = [
	{"title": "Curated"},
	{"title": "History"},
	{"title": "Saved"}
];



export default function Vault ({
	savedColors
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
	let vaultTabBarProps = {
		vaultTabs, currentTabIndex, setCurrentTabIndex
	};

	let savedColorItems = savedColors.map((hex, i) => {
		let style = {
			backgroundColor: hex
		};
		return (
			<div key={i} style={style} className="px-4 py-4 my-2">
				<h2>{hex}</h2>
			</div>
		);
	});

	function getCurrentTab () {
		let currentTabTitle = vaultTabs[currentTabIndex].title;
		let commonProps = {};

		if (currentTabTitle === "Curated") {
			let curatedProps = {
				...commonProps
			};
			return <CuratedList {...curatedProps} />;
		} else if (currentTabTitle === "History") {
			let historyProps = {
				...commonProps
			};
			return <ColorHistory {...historyProps} />;
		} else if (currentTabTitle === "Saved") {
			let savedProps = {
				...commonProps
			};
			return <SavedColors {...savedProps} />;
		}
	}

	return (
		<div className="Vault fixed top-0 left-0 w-screen h-screen bg-slate-700 pb-12 hidden">
			<div className="md:flex max-w-5xl m-auto">
				<div className="grow bg-slate-100">
					<VaultTabBar {...vaultTabBarProps} />
					<div className="pt-4">
						{getCurrentTab()}
					</div>
				</div>
			</div>
		</div>
	);
}
