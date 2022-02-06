


export default function Footer ({links}) {

	let linkItems = links.map((v, i) => {
		return (
			<a key={i} href={v.href} target="_blank" rel="noreferrer" className="px-4 py-3 bg-slate-600 cursor-pointer duration-300 hover:bg-slate-500">{v.title}</a>
		);
	});

	return (
		<div className="Footer bg-slate-700 text-white px-2 py-12 text-center">
			<div className="text-sm font-bold space-x-4 py-6">
				{linkItems}
			</div>
		</div>
	);
}
