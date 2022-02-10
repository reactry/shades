import {hexToRgb} from 'colorita';



export default function ColorButton ({title, hex, mixColor}) {
	let style = {
		backgroundColor: hex
	};

	let [r, g, b] = hexToRgb(hex);

	function handleClick () {
		mixColor(r, g, b);
	}

	return (
		<button style={style} onClick={handleClick} className="bg-slate-200 w-14 h-12 my-4 mr-4 last:mr-0 outline-none border-2 border-slate-400 rounded select-none hover:border-blue-500 hover:bg-slate-100 focus:border-blue-700 focus:bg-slate-100 active:bg-slate-300"></button>
	);
}
