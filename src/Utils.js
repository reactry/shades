


export function hexToRgb (hex) {
	if (hex[0] === "#") hex = hex.slice(1);

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	if (hex.length !== 6) return [0, 0, 0];

	let bigint = parseInt(hex, 16);
	let r = (bigint >> 16) & 255;
	let g = (bigint >> 8) & 255;
	let b = bigint & 255;

	return [r, g, b];
}

export function roundOffComponent (c) {
	if (c < 0) return 0;
	if (c > 255) return 255;
	return c;
}

function componentToHex (c) {
	let hex = c.toString(16);
	return (hex.length === 1) ? "0" + hex : hex;
}

export function rgbToHex (r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function getTints (red, green, blue, n) {
	let colors = [...Array(n).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red + ((255 - red) * i / n));
		let g = Math.floor(green + ((255 - green) * i / n));
		let b = Math.floor(blue + ((255 - blue) * i / n));
		return {r, g, b};
	});
	return colors;
}

export function getShades (red, green, blue, n) {
	let colors = [...Array(n).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red - (red * i / n));
		let g = Math.floor(green - (green * i / n));
		let b = Math.floor(blue - (blue * i / n));
		return {r, g, b};
	});
	return colors;
}

export function getTintsAndShades (red, green, blue, n) {
	let tints = getTints(red, green, blue, n).reverse();
	tints.pop();
	let shades = getShades(red, green, blue, n);
	return [...tints, ...shades];
}



export function shadeX (x) {
	return Math.floor(x * 0.9);
}

export function tintX (x) {
	if (x < 20) {
		return (x + 2)
	} else {
		let y = Math.floor(x * 1.1);
		return (y < 255) ? y : 255;
	}
}

export function toneX (x) {
	if (x === 128) {
		return 128;
	} else {
		let change = Math.ceil(Math.abs(x - 128) * 0.1);
		return (x < 128) ? (x + change) : (x - change);
	}
}

export function mixX (x, y) {
	if (x === y) {
		return x;
	}

	let change = Math.ceil(Math.abs(x - y) * 0.1);
	return (x < y) ? (x + change) : (x - change);
}

export function mixHex (base, mix) {
	let [br, bg, bb] = hexToRgb(base);
	let [mr, mg, mb] = hexToRgb(mix);
	let nr = mixX(br, mr);
	let ng = mixX(bg, mg);
	let nb = mixX(bb, mb);
	return [nr, ng, nb];
}



export function hslToRgb (h, s, l) {
	s /= 100;
	l /= 100;

	let c = (1 - Math.abs(2 * l - 1)) * s;
	let x = c * (1 - Math.abs((h / 60) % 2 - 1));
	let m = l - c/2;

	let r = 0, g = 0, b = 0;

	if (0 <= h && h < 60) {
		r = c; g = x; b = 0;
	} else if (60 <= h && h < 120) {
		r = x; g = c; b = 0;
	} else if (120 <= h && h < 180) {
		r = 0; g = c; b = x;
	} else if (180 <= h && h < 240) {
		r = 0; g = x; b = c;
	} else if (240 <= h && h < 300) {
		r = x; g = 0; b = c;
	} else if (300 <= h && h < 360) {
		r = c; g = 0; b = x;
	}

	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return [r, g, b];
}

export function rgbToHsl (r, g, b) {
	r /= 255;
	g /= 255;
	b /= 255;

	let cmin = Math.min(r, g, b);
	let cmax = Math.max(r, g, b);
	let delta = cmax - cmin;

	let h = 0, s = 0, l = 0;

	if (delta === 0) {
		h = 0;
	} else if (cmax === r) {
		h = ((g-b) / delta) + 6;
	} else if (cmax === g) {
		h = ((b-r) / delta) + 2;
	} else {
		h = ((r-g) / delta) + 4;
	}

	h = Math.round(h * 60);
	if (h < 0) h += 360;
	if (h >= 360) h -= 360;

	l = (cmax + cmin) / 2;
	s = (delta === 0) ? 0 : delta / (1 - Math.abs(2 * l - 1));

	s = Math.round(s * 100);
	l = Math.round(l * 100);

	return [h, s, l];
}


