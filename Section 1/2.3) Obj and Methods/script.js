var userInfo = {
	usersName: 'Jackie',
	usersLastName: 'Chan',
	usersBirthYear: 1972,
	calculateAge: function() {
		this.usersAge = 2020 - this.usersBirthYear;
	}
}

userInfo.calculateAge();
console.log(userInfo);