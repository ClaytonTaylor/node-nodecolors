var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

function light (red, blue, green) {
	var red = r * .2126;
	var green = g * .7152;
	var blue = b * .0722;

	var total = red + green + blue;

	if (total > 155) {
		console.log("This is Light")
	}
	else {
		console.log("This is Dark")
	}

	return total;
}

light();