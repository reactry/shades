


export default function Branding ({meta}) {
	return (
		<header className="px-4 py-8 bg-slate-300">
			<a className="block bg-white max-w-sm m-auto text-center" href="">
				<h1 className="text-[40px] px-4 pt-4 pb-1 text-slate-400 border-b-2 border-slate-400">{meta.title}</h1>
				<p className="text-sm py-2 bg-slate-100 text-slate-600">{meta.tagline}</p>
			</a>
		</header>
	);
}
