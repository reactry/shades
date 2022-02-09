import ColorTile from './ColorTile';



export default function ColorHistory ({
	colorHistory, setColorHistory
}) {

	let colorHistoryItems = colorHistory.map((c, i) => {
		return (
			<ColorTile key={i} {...c} />
		);
	});

	return (
		<div className="ColorHistory">
			<div>Color History</div>
			<div className="flex flex-wrap py-4">
				{colorHistoryItems}
			</div>
		</div>
	);
}
