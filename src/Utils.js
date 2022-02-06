
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

module.exports = {
	roundOffComponent,
	rgbToHex
};
