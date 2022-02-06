


export default function Branding ({meta}) {
	return (
		<header className="px-4 py-16 bg-slate-700 shadow-xl">
			<a className="block bg-white max-w-sm m-auto text-center" href="">
				<div className="flex justify-center">
					<h3 className="px-12 py-2 text-md font-bold bg-slate-300">Reactry's</h3>
				</div>
				<h1 className="text-[72px] px-4 pb-1 text-slate-400 border-b-2 border-slate-400">{meta.title}</h1>
				<p className="text-sm py-2 bg-slate-100 text-slate-600">{meta.tagline}</p>
			</a>
		</header>
	);
}
