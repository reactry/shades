
// moved utils to colorita package

export function getRelativeLuminance (r, g, b) {
	[r, g, b] = [r, g, b].map((c) => {
		c /= 255;

		if (c <= 0.03928) {
			return c / 12.92;
		} else {
			return Math.pow((c + 0.055) / 1.055, 2.4);
		}
	});

	return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
}

export function getContrast (c1, c2) {
	// c1 and c2 are RGB arrays
	const lum1 = getRelativeLuminance(...c1);
	const lum2 = getRelativeLuminance(...c2);

	const max = Math.max(lum1, lum2);
	const min = Math.min(lum1, lum2);
	return (max + 0.05) / (min + 0.05);
}

export function getContrastRounded (c1, c2) {
	return getContrast(c1, c2).toFixed(1);
}


