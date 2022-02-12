


export default function Thanks ({thanks}) {
	let thanksItems = thanks.map((v, i) => {
		return (
			<div key={i} className="bg-white shadow-xl px-5 py-6 mx-4 my-4 basis-0 grow rounded">
				<h2 className="text-xl font-bold">{v.title}</h2>
				<p className="text-md py-3 leading-8">{v.description}</p>
				<a href={v.url} target="_blank" rel="noreferrer" className="inline-block bg-slate-100 text-sm font-bold px-6 py-2 duration-300 border-2 border-slate-300 hover:bg-slate-300 focus:bg-slate-300">LINK</a>
			</div>
		);
	});

	return (
		<div className="Thanks bg-slate-300 py-20">
			<div>
				<h2 className="text-3xl text-center">Thanks</h2>
			</div>
			<div className="max-w-2xl m-auto md:grid md:grid-cols-2 py-6 text-slate-700">
				{thanksItems}
			</div>
		</div>
	);
}
