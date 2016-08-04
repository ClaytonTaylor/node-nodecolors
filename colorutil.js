// var r = ;
// var g = ;
// var b = ;

module.exports = {

changeColor: function(red, green, blue){
	var red = process.argv[2] * .2126;
	var green = process.argv[3] * .7152;
	var blue = process.argv[4] * .0722;
	var total = red + green + blue;

	return total
}
};