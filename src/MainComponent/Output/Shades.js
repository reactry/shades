import {getShades} from '../../Utils';

import List from './List';



export default function Shades ({
	red, green, blue, n
}) {

	let colors = getShades(red, green, blue, n);

	return (
		<div className="Shades">
			<List colors={colors} title="Shades" currentColorIndex={0} />
		</div>
	);
}
