var currentYear, johnsBirthDay, jackiesBirthDay;

currentYear = 2020;
johnsAge = 28;
jackiesAge = 37;


johnsBirthDay = currentYear - johnsAge;
jackiesBirthDay = currentYear - jackiesAge;
console.log('Year = ' + currentYear + '\n John = ' + johnsBirthDay + ' Jackie = ' + jackiesBirthDay);

/*console.log(currentYear + 2);
console.log(currentYear * 4);
console.log(currentYear / 15);
console.log(currentYear - 7);*/

// Logical Operators

var isJohnOlder = johnsAge > jackiesAge;
console.log(isJohnOlder);

var isJohnOlder = johnsAge < jackiesAge;
console.log(isJohnOlder);

// typeOf op

console.log(typeof isJohnOlder);
console.log(typeof johnsAge);
console.log(typeof 'Hello World!');
console.log(typeof x);

var inputValue1 = parseInt(prompt('Num 1').replace(/[^0-9]/gi, ''));
var inputValue2 = parseInt(prompt('Num 2'));

console.log(inputValue1 + inputValue2)