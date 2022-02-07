import React from 'react';



export default function HexTab ({}) {
	const [error, setError] = React.useState(false);

	function handleHexInputChange (e) {
		let hexInput = e.target.value.toLowerCase();
		for (let c of hexInput) {
			let x = parseInt(c, 16);
			if (x.toString(16) !== c) {
				setError(`Invalid hex character: '${c}'`);
				return;
			}
		}

		if (hexInput.length !== 3 && hexInput.length !== 6) {
			setError("Input must have 3/6 chars");
		} else {
			setError(false);
		}
	}

	return (
		<div className="HexTab">
			<div className="flex text-6xl text-slate-800 px-4 py-4 justify-center hidden">
				<div>
					<div className="px-5 py-4">#</div>
				</div>
				<div>
					<input type="text" onChange={handleHexInputChange} maxLength="6"
						className="w-64 bg-slate-200 border-2 border-slate-300 w-inherit outline-none focus:border-blue-600 px-4 py-2" />
					<div className="py-4 text-sm font-bold flex">
						{error ? <div className="px-4 py-1 bg-red-300">BAD</div> : <div className="px-4 py-1 bg-green-300">GOOD</div>}
						<div className="w-2"></div>
						<div className={"py-1" + (error ? " text-red-600" : " text-green-600")}>
							{error ? error : "All good!"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
