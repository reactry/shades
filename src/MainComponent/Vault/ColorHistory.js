import Box from '../Output/List/Box';



export default function ColorHistory ({
	colorHistory, setColorHistory
}) {

	let colorHistoryItems = colorHistory.map((c, i) => {
		return (
			<Box key={i} {...c} />
		);
	});

	return (
		<div className="ColorHistory">
			<div>Color History</div>
			<div className="flex flex-wrap px-4 py-4">
				{colorHistoryItems}
			</div>
		</div>
	);
}
