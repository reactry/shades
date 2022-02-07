


export default function Branding ({meta}) {
	return (
		<header className="px-4 py-24 bg-slate-700 shadow-xl">
			<a className="block bg-white max-w-sm m-auto text-center duration-300 text-slate-400 hover:bg-blue-200 hover:text-slate-700 rounded" href="https://reactry.github.io/shades/">
				<div className="flex justify-center">
					<h3 className="px-12 py-1 text-md font-bold border-x-2 border-b-2 border-slate-400 bg-slate-300 text-slate-500">Reactry's</h3>
				</div>
				<h1 className="text-[72px] px-4 pb-1 border-b-2 border-slate-400">{meta.title}</h1>
				<p className="text-sm py-2 bg-slate-100 text-slate-600">{meta.tagline}</p>
			</a>
		</header>
	);
}
