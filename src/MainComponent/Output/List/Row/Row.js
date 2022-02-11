import React from 'react';
import {rgbToHsl} from 'colorita';

import RowTabBar from './RowTabBar';

import AccTab from './AccTab';
import CopyTab from './CopyTab';
import InfoTab from './InfoTab';

const rowTabs = [
	{
		"title": "Acc"
	},
	{
		"title": "Copy"
	},
	{
		"title": "Info"
	}
];



export default function Row ({
	r, g, b, hex, shade, active,
	contrastWhite, contrastBlack
}) {

	let [currentRowTabIndex, setCurrentRowTabIndex] = React.useState(0);
	let rowTabBarProps = {
		rowTabs, currentRowTabIndex, setCurrentRowTabIndex
	};

	let tabProps = {
		r, g, b, hex, shade,
		contrastWhite, contrastBlack
	};

	let [showInfo, setShowInfo] = React.useState(false);

	let style = {
		backgroundColor: hex
	};

	let [h, s, l] = rgbToHsl(r, g, b);
	function getCurrentRowTab () {
		let currentRowTabTitle = rowTabs[currentRowTabIndex].title;
		let rowTabProps = {
			r, g, b, h, s, l, hex, shade,
			contrastWhite, contrastBlack
		};

		if (currentRowTabTitle === "Acc") {
			return <AccTab {...rowTabProps} />
		} else if (currentRowTabTitle === "Copy") {
			return <CopyTab {...rowTabProps} />
		} else if (currentRowTabTitle === "Info") {
			return <InfoTab {...rowTabProps} />
		}
	}

	let rowClasses = "md:w-72 font-bold";

	let cRGB = "grow basis-0 bg-slate-200 pt-3 pb-2";
	let cH2 = "text-slate-700 text-2xl";
	let cH4 = "text-slate-400 text-xs";

	return (
		<div className={rowClasses}>
			<div onClick={() => setShowInfo(showInfo => !showInfo)} style={style}
				className="flex px-4 py-4 cursor-pointer duration-300 hover:px-8">
				<div className="w-1/2 capitalize">{shade}</div>
				<div className="w-1/2 text-right">{hex}</div>
			</div>
			{showInfo && <div className="bg-slate-100 border-2 border-slate-400 pb-4 text-center">

				<RowTabBar {...rowTabBarProps} />
				<div className="py-2">
					{getCurrentRowTab()}
				</div>

			</div>}
		</div>
	);
}
