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
			<h1 className="text-slate-600 text-3xl px-1 py-2 text-center md:text-left">{title}</h1>
			<div className="flex flex-wrap">
				{colorItems}
			</div>
		</div>
	);
}
