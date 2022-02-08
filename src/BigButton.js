


export default function BigButton ({
	title, handleClick
}) {

	return (
		<button onClick={handleClick} className="bg-slate-200 grow basis-0 px-6 py-3 mr-4 text-md font-bold outline-none border-2 border-slate-400 text-slate-700 rounded select-none hover:border-blue-500 hover:text-blue-500 hover:bg-slate-100 focus:border-blue-700 focus:bg-slate-100 focus:text-blue-700 active:bg-slate-300">
			{title}
		</button>
	);
}
