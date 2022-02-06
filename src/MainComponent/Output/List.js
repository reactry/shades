import Box from './Box';



export default function List ({
	colors
}) {

	let colorItems = colors.map((color, i) => {
		let props = {color};
		return <Box key={i} {...props} />;
	});

	return (
		<div className="List">
			<h1>List</h1>
			<div>
				{colorItems}
			</div>
		</div>
	);
}
