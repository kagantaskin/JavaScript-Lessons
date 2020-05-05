var userInfo = ['John', 'Kennedy', 1990, 'Black', false];

console.log('\nFor Loop');
//For Loop
for (var i = 0; i < userInfo.length; i++) {
	console.log(userInfo[i]);
}

console.log('\nWhile Loop');
// While Loop
var i = 0;
while (i < userInfo.length) {
	console.log(userInfo[i]);
	i++;
}

console.log('\nContinue and break statement');
//Continue and break statement
for (var i = 0; i < userInfo.length; i++) {
	if (typeof userInfo[i] !== 'string') continue;
	console.log(userInfo[i]);
}

for (var i = 0; i < userInfo.length; i++) {
	if (typeof userInfo[i] !== 'string') break;
	console.log(userInfo[i]);
}

for (var i = userInfo.length - 1; i >= 0; i--) {
	console.log(userInfo[i]);
}