import Box from './Box';
import Row from './Row';



export default function List ({
	colors, length, title, currentColorIndex
}) {

	let colorBoxItems = colors.map((color, i) => {
		let props = {
			...color,
			active: (i === currentColorIndex)
		};
		return <Box key={i} {...props} />;
	});

	let colorRowItems = colors.map((color, i) => {
		let props = {
			...color,
			active: (i === currentColorIndex)
		};
		return <Row key={i} {...props} />;
	});

	return (
		<div className="List py-8">
			<h1 className="text-slate-600 text-3xl py-6 px-1 text-center md:text-left">
				<span className="px-4 py-2 bg-slate-600 text-white">{length ? length : colors.length}</span>
				<span className="px-3">{title}</span>
			</h1>
			<div className="md:flex align-top items-start">
				<div className="py-2">
					<div className="border-2 border-slate-400 rounded">
						{colorRowItems}
					</div>
				</div>
				<div className="flex flex-wrap mx-auto md:pl-4 text-center">
					{colorBoxItems}
				</div>
			</div>
		</div>
	);
}
