import ColorTile from './ColorTile';



export default function SavedColors ({
	savedColors, setSavedColors,
	setHexColor, toggleVault
}) {

	let savedColorItems = savedColors.map((c, i) => {
		return (
			<ColorTile key={i} {...c} setHexColor={setHexColor} toggleVault={toggleVault} />
		);
	});

	return (
		<div className="SavedColors">
			<h2 className="pt-2 pl-2 text-xl font-bold">Saved Colors</h2>
			<div className="flex flex-wrap py-4">
				{savedColorItems}
			</div>
		</div>
	);
}
