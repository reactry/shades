import ColorTile from './ColorTile';



export default function ColorHistory ({
	colorHistory, setColorHistory,
	setHexColor, toggleVault
}) {

	let colorHistoryItems = colorHistory.map((c, i) => {
		return (
			<ColorTile key={i} {...c} setHexColor={setHexColor} toggleVault={toggleVault} />
		);
	});

	return (
		<div className="ColorHistory">
			<h2 className="pt-2 pl-2 text-xl font-bold">Color History</h2>
			<div className="flex flex-wrap py-4">
				{colorHistoryItems}
			</div>
		</div>
	);
}
