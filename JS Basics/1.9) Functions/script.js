function calculateAgeOfUser(birthYear) {
	let yearNow = 2020;

	return yearNow - birthYear;
}

//var birthYear = parseInt(prompt('Please enter your Birth Year'));

/*console.log('The user is ' + ageOfUser + ' year old');*/

/*function yearUntilRetirement(ageOfUser, firstName)*/ var yearUntilRetirement = function(ageOfUser, firstName){
	var ageOfUser = calculateAgeOfUser(ageOfUser)
	var retirement = 65 - ageOfUser;

	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years');
	} else {
		console.log(firstName + ' is retired');
	}
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1982, 'Jackie');
yearUntilRetirement(1453, 'Rocky');
yearUntilRetirement(1776, 'Valentine');

