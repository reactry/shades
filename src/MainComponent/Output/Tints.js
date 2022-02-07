import {getTints} from '../../Utils';

import List from './List';



export default function Tints ({
	colors, n
}) {

	return (
		<div className="Tints">
			<List colors={colors} title="Tints" currentColorIndex={0} />
		</div>
	);
}
