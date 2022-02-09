import ColorTile from './ColorTile';



export default function ColorHistory ({
	colorHistory, setColorHistory, toggleVault
}) {

	let colorHistoryItems = colorHistory.map((c, i) => {
		return (
			<ColorTile key={i} {...c} toggleVault={toggleVault} />
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
