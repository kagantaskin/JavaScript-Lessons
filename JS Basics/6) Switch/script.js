var firstName = 'Jackie';
var age = 18;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age < 13) {
	console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
	console.log(firstName + ' is a young man');
} else {
	console.log(firstName + ' is a man');
}

var job = 'driver';
	switch(job) {
		case 'teacher':
			console.log(firstName + ' is a teacher');
			break;
		case 'driver':
			console.log(firstName + ' is a taxi driver');
			break;
		case 'lawyer':
			console.log(firstName + ' is lawyer');
			break;
		default:
			console.log(firstName + ' doing something else');
			break;		
	}