import ColorTile from './ColorTile';



export default function SavedColors ({
	savedColors, setSavedColors, toggleVault
}) {

	let savedColorItems = savedColors.map((c, i) => {
		return (
			<ColorTile key={i} {...c} toggleVault={toggleVault} />
		);
	});

	return (
		<div className="SavedColors">
			<div>Saved Colors</div>
			<div className="flex flex-wrap py-4">
				{savedColorItems}
			</div>
		</div>
	);
}
