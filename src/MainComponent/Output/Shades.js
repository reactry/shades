import {getShades} from '../../Utils';

import List from './List';



export default function Shades ({
	colors, n
}) {

	return (
		<div className="Shades">
			<List colors={colors} title="Shades" currentColorIndex={0} />
		</div>
	);
}
