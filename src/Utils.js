
function roundOffComponent (c) {
	if (c < 0) return 0;
	if (c > 255) return 255;
	return c;
}

function componentToHex (c) {
	let hex = c.toString(16);
	return (hex.length === 1) ? "0" + hex : hex;
}

function rgbToHex (r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getTints (red, green, blue, n) {
	let colors = [...Array(n).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red + ((255 - red) * i / n));
		let g = Math.floor(green + ((255 - green) * i / n));
		let b = Math.floor(blue + ((255 - blue) * i / n));
		return {r, g, b};
	});
	return colors;
}

function getShades (red, green, blue, n) {
	let colors = [...Array(n).keys()];
	colors = colors.map((v, i) => {
		let r = Math.floor(red - (red * i / n));
		let g = Math.floor(green - (green * i / n));
		let b = Math.floor(blue - (blue * i / n));
		return {r, g, b};
	});
	return colors;
}

module.exports = {
	roundOffComponent,
	rgbToHex,
	getTints,
	getShades
};
