var restaurantOne = {
	nameOfRestaurant: 'Restaurant One',
	billOfRestaurant: 124
}

var restaurantTwo = {
	nameOfRestaurant: 'Restaurant Two',
	billOfRestaurant: 48
}

var restaurantThree = {
	nameOfRestaurant: 'Restaurant Three',
	billOfRestaurant: 268
}

function calculateTip(billAmount) {
	if (billAmount < 50) {
			tip = billAmount * 20 / 100;
		} else if (50 >= billAmount < 200) {
			tip = billAmount * 15 / 100;
		} else {
			tip = billAmount * 10 / 100;
		}
	return tip;
}

function totalAmountOfBill(billAmount, tip) {

	var tip = calculateTip(tip);

	finalAmountOfBill = billAmount + tip;

	return finalAmountOfBill;
	
}

console.log(restaurantOne.nameOfRestaurant + '\n First price of bill = ' + restaurantOne.billOfRestaurant + '\n Tip = ' + calculateTip(restaurantOne.billOfRestaurant) + '\n Total Payment = ' + totalAmountOfBill(restaurantOne.billOfRestaurant, restaurantOne.billOfRestaurant));
console.log(restaurantTwo.nameOfRestaurant + '\n First price of bill = ' + restaurantTwo.billOfRestaurant + '\n Tip = ' + calculateTip(restaurantTwo.billOfRestaurant) + '\n Total Payment = ' + totalAmountOfBill(restaurantTwo.billOfRestaurant, restaurantTwo.billOfRestaurant));
console.log(restaurantThree.nameOfRestaurant + '\n First price of bill = ' + restaurantThree.billOfRestaurant + '\n Tip = ' + calculateTip(restaurantThree.billOfRestaurant) + '\n Total Payment = ' + totalAmountOfBill(restaurantThree.billOfRestaurant, restaurantThree.billOfRestaurant));