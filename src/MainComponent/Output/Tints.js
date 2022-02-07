import {getTints} from '../../Utils';

import List from './List';



export default function Tints ({
	red, green, blue, n
}) {

	let colors = getTints(red, green, blue, n);

	return (
		<div className="Tints">
			<List colors={colors} title="Tints" currentColorIndex={0} />
		</div>
	);
}
