import Box from '../Output/List/Box';



export default function SavedColors ({
	savedColors, setSavedColors
}) {

	let savedColorItems = savedColors.map((c, i) => {
		return (
			<Box key={i} {...c} />
		);
	});

	return (
		<div className="SavedColors">
			<div>Saved Colors</div>
			<div className="flex flex-wrap px-4 py-4">
				{savedColorItems}
			</div>
		</div>
	);
}
