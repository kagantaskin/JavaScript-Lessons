var firstName = 'John';
var civilStatus = 'single';

var isMarried = true;

if (isMarried) {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' is not married');
}

var s1 = prompt('fNumber');
var s2 = prompt('sNumber');

var numOne = parseInt(s1);
var numTwo = parseInt(s2);

if (numOne > numTwo) {
	console.log(numOne + ' > ' + numTwo);
	console.log(numOne + ' not equal ' + numTwo);
} else if (numOne === numTwo) {
	console.log(numOne + ' equal ' + numTwo);
} else {
	console.log(numTwo + ' > ' + numOne);
	console.log(numOne + ' not equal ' + numTwo);
}
