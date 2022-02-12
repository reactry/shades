
// moved utils to colorita package

export function HSL2HSV (H, S, L) {
	let V = Math.round(L + (S*Math.min(L, 100-L)/100));
	let S2 = 0;
	if (V !== 0) {
		S2 = Math.round(2 * 100 * (1 - L/V));
	}
	return [H, S2, V];
}

export function HSV2HSL (H, S, V) {
	let L = Math.round(V - V*S/200);
	let S2 = 0;
	if (L !== 0 && L !== 100) {
		S2 = Math.round(100 * (V-L)/Math.min(L, 100-L));
	}
	return [H, S2, L];
}


