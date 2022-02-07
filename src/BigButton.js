


export default function BigButton ({
	title, handleClick
}) {

	return (
		<button onClick={handleClick} className="bg-slate-200 px-8 py-5 text-xl border-2 border-slate-400 text-slate-700 rounded hover:bg-slate-100 focus:bg-slate-100">
			{title}
		</button>
	);
}
