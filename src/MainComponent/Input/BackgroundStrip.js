


export default function BackgroundStrip ({
	colors
}) {

	let strips = colors.map((c, i) => {
		return <div key={i} className="grow" style={{backgroundColor: c.hex}}></div>
	});

	return (
		<div className="BackgroundStrip absolute w-full h-full bg-red-400">
			<div className="flex h-full">
				{strips}
			</div>
		</div>
	);
}
