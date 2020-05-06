var userNameOnStorage = localStorage.getItem("usersName");

function checkForName() {

	if (userNameOnStorage === null) {
		document.write("<h1>Please set a name for yourself</h1>");
		console.log('please set a name for yourself');
		importUsersName();
	} else {
		console.log('your name already set');
		console.log(userNameOnStorage);
	}
}

checkForName();

function importUsersName() {
	if (document.getElementById('userNameForStorage')) {	
		var userNameForStorage = document.getElementById('userNameForStorage').value;
		localStorage.setItem('usersName', userNameForStorage);
		location.reload();
	} else {
		console.log('invalid');
	}
}

function deleteUsersName() {
	localStorage.removeItem('usersName');
	location.reload();
}