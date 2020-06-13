var calculateTip = function(billAmount) {
	if (billAmount < 50) {
			tip = billAmount * 20 / 100;
		} else if (50 >= billAmount < 200) {
			tip = billAmount * 15 / 100;
		} else {
			tip = billAmount * 10 / 100;
		}
	return tip;
}

var totalAmountOfBill = function(billAmount, tip) {

	tip = calculateTip(tip);

	totalAmount = billAmount + tip;

	return totalAmount;
	
}

var averageAmountOfTips = function(tip) {
	var summaryOfTips = 0;
	for (var i = 0; i < tip.length; i++) {
		summaryOfTips += tip[i];
	}
	return summaryOfTips / tip.length;
}

var whichTipIsBigger = function(tipOne, tipperOne, tipTwo, tipperTwo) {
	if (tipOne > tipTwo) {
		console.log(tipperOne + "'s tip bigger than " + tipperTwo);
	} else {
		console.log(tipperTwo + "'s tip bigger than " + tipperOne);
	}
}

console.log('***Coding Challenge 0.0***');

const billInfosOfJohn = {
	RestaurantOne: 124,
	RestaurantTwo: 48,
	RestaurantThree: 268,
	RestaurantFour: 180,
	RestaurantFive: 42
}

var tipsOfJohn = [];

Object.keys(billInfosOfJohn).forEach((key) => {
	console.log(key + ' ' + totalAmountOfBill(billInfosOfJohn[key], billInfosOfJohn[key]));
	tipsOfJohn.push(calculateTip(billInfosOfJohn[key]));
})

console.log(averageAmountOfTips(tipsOfJohn));

console.log('***Coding Challenge 0.0***');
console.log('**************************');
console.log('***Coding Challenge 0.1***');

const billInfosOfJackie = {
	RestaurantOne: 77,
	RestaurantTwo: 375,
	RestaurantThree: 110,
	RestaurantFour: 45
}

var tipsOfJackie = [];

Object.keys(billInfosOfJackie).forEach((key) => {
	console.log(key + ' ' + totalAmountOfBill(billInfosOfJackie[key], billInfosOfJackie[key]));
	tipsOfJackie.push(calculateTip(billInfosOfJackie[key]));
})

console.log(averageAmountOfTips(tipsOfJackie));

whichTipIsBigger(averageAmountOfTips(tipsOfJohn), 'John', averageAmountOfTips(tipsOfJackie), 'Jackie');

console.log('***Coding Challenge 0.1***');