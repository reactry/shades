import Tints from './Tints';
import Shades from './Shades';



export default function ColorOutput ({
	red, green, blue, n
}) {

	let props = {red, green, blue, n};

	return (
		<div className="ColorOutput bg-slate-300 min-h-screen px-2 pt-4 pb-20">
			<div className="max-w-5xl mx-auto">
				<Tints {...props} />
				<Shades {...props} />
			</div>
		</div>
	);
}
