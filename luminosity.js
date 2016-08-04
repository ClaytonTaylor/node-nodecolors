var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

function changeColor(red, green, blue){
	var red = r * .2126;
	var green = g * .7152;
	var blue = b * .0722;
	var total = red + green + blue;

	return total
}

console.log(changeColor());