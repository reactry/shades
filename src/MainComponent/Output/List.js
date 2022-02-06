import Box from './Box';



export default function List ({
	colors, title
}) {

	let colorItems = colors.map((color, i) => {
		let props = {...color};
		return <Box key={i} {...props} />;
	});

	return (
		<div className="List py-8">
			<h1 className="text-slate-600 text-3xl py-4 text-center md:text-left">
				<span className="px-4 py-2 bg-slate-400 text-white">{colors.length}</span>
				<span className="px-4">{title}</span>
			</h1>
			<div className="flex flex-wrap">
				{colorItems}
			</div>
		</div>
	);
}
