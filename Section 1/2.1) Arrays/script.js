var names = ['John', 'Jackie', 'Valentine'];

var birthYears = new Array(1990, 1992, 1998);

console.log(names);
console.log(names[0]);
console.log(names.length);

names[1] = 'Mark';
names[names.length] = 'Mary';
console.log(names);

//Different types of Array

var user = ['Jackie', 'Chan', 1972, 'Actor', false];

user.push('Green');
user.unshift('Mr.');
user.pop();
user.shift();
console.log(user);

console.log(user.indexOf(1972));

var isActor = user.indexOf('Actor') === -1 ? 'User is not an Actor' : 'User is Actor';

console.log(isActor);