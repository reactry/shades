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
			<h1 className="text-slate-600 text-3xl py-6 text-center md:text-left">
				<span className="px-4 py-2 bg-slate-600 text-white">{colors.length}</span>
				<span className="px-3">{title}</span>
			</h1>
			<div className="flex flex-wrap m-auto">
				{colorItems}
			</div>
		</div>
	);
}
