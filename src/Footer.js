


export default function Footer ({links}) {

	let anchorClasses = "border-b-2 border-blue-500 duration-300 text-blue-500 hover:text-blue-200 hover:border-blue-200";

	return (
		<div className="Footer bg-slate-700 text-white px-4 pt-24 pb-32 text-center">
			<div className="text-md font-bold space-y-4">
				<p>Designed and developed by <a href="https://github.com/iaseth" target="_blank" rel="noreferrer" className={anchorClasses}>Ankur Seth</a>.</p>
				<p>Hosted on <a href="https://github.com/reactry/shades" target="_blank" rel="noreferrer" className={anchorClasses}>GitHub</a>.</p>
			</div>
		</div>
	);
}
