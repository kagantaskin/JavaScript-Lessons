function calculateBMI(whichUser) {
	whichUser.usersBMI = whichUser.usersMass / (whichUser.usersHeight * whichUser.usersHeight);
}

var userOne = {
	usersName: 'John',
	usersMass: 76,
	usersHeight: 1.75,
}

var userTwo = {
	usersName: 'Jackie',
	usersMass: 108,
	usersHeight: 1.82,
}

calculateBMI(userOne);
calculateBMI(userTwo);

console.log(userOne.usersName + "'s BMI = " + userOne.usersBMI + '\n' + userTwo.usersName + "'s BMI = " + userTwo.usersBMI);