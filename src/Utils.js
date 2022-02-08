


export function hexToRgb (hex) {
	hex = hex.slice(1);
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


