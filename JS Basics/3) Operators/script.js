	
	var thisYear, yearJohnny, yearJackie;

	thisYear = 2020;
	ageJohn = 28;
	ageJackie = 37;


	yearJohn = thisYear - ageJohn;
	yearJackie = thisYear - ageJackie;
	console.log('Year = ' + thisYear + '\n John = ' + yearJohn + ' Jackie = ' + yearJackie);

	/*console.log(thisYear + 2);
	console.log(thisYear * 4);
	console.log(thisYear / 15);
	console.log(thisYear - 7);*/

	// Logical Operators

	var johnOlder = ageJohn > ageJackie;
	console.log(johnOlder);

	var johnOlder = ageJohn < ageJackie;
	console.log(johnOlder);

	// typeOf op

	console.log(typeof johnOlder);
	console.log(typeof ageJohn);
	console.log(typeof 'Hello World!');
	console.log(typeof x);

	var a = prompt('Num 1');
	var b = prompt('Num 2');
	var numOne = parseInt(a);
	var numTwo = parseInt(b);

	console.log(numOne + numTwo)