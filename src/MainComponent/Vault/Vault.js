


export default function Vault ({
	savedColors
}) {

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

	return (
		<div className="Vault bg-slate-700 text-white px-4 py-6">
			<div>
				<h2>Vault</h2>
			</div>
			<div>
				{savedColorItems}
			</div>
		</div>
	);
}
