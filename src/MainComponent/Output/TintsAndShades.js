import {getTintsAndShades} from '../../Utils';

import List from './List';



export default function TintsAndShades ({
	red, green, blue, n
}) {

	let colors = getTintsAndShades(red, green, blue, n);

	return (
		<div className="TintsAndShades">
			<List colors={colors} title="Tints and Shades" currentColorIndex={n-1} />
		</div>
	);
}
