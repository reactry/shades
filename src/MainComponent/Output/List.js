import Box from './Box';



export default function List ({
	colors
}) {

	let colorItems = colors.map((color, i) => {
		let props = {...color};
		return <Box key={i} {...props} />;
	});

	return (
		<div className="List py-4">
			<div className="flex flex-wrap">
				{colorItems}
			</div>
		</div>
	);
}
