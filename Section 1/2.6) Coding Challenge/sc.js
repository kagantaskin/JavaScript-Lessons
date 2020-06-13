var peopleCount = 10;
var billCount = 5;

var bills = [25, 10, 500];
var tips = [];

function tipCalc(bill) {
	if (billAmount < 50) {
			tip = billAmount * 20 / 100;
		} else if (50 >= billAmount < 200) {
			tip = billAmount * 15 / 100;
		} else {
			tip = billAmount * 10 / 100;
		}
	return tip;
}

for (let peopleCounter = 1; peopleCounter <= peopleCount; peopleCounter++) {
	console.log('ppl');
	(peopleCounter < billCount) && console.log('heya');

}