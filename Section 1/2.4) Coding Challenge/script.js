/*var peopleCount = prompt('Person Number?');
var personInfo = [];
var winnerPerson = {
    BMI: 0
};

for (let i = 0;  i < peopleCount; i++) {
    personInfo[i] = {
        fullname: prompt((i + 1) + 'th person\'s Full Name?'),
        mass: prompt((i + 1) + 'th person\'s Mass?'),
        height: prompt((i + 1) + 'th person\'s Height?'),
        calculateBMI: function () {
            this.BMI = (this.mass / (this.height * this.height));
        }
    };

    personInfo[i].calculateBMI();

    (personInfo[i].BMI > winnerPerson.BMI) && (winnerPerson = personInfo[i]);

}

console.log(winnerPerson);*/

//

var peopleCount = prompt('Person Number?');
var personInfo = [/*{
		name: 'kagan',
		mass: 1,
		height: 1
	},
	{
		name: 'osman',
		mass: 2,
		height: 2
	},{
		name: 'onur', 
		mass: 1, 
		height: 1
	},
	{
		name: 'toprak',
		mass: 5,
		height: 7
	}*/];
var winnerPerson = {
    BMI: 0
};

function calcBMI(inf) {
	inf.BMI = (inf.mass / (inf.height * inf.height));
}

for (let i = 0;  i < peopleCount; i++) {
    personInfo[i] = {
        fullname: prompt((i + 1) + 'th person\'s Full Name?'),
        mass: prompt((i + 1) + 'th person\'s Mass?'),
        height: prompt((i + 1) + 'th person\'s Height?'),
        /*calculateBMI: function () {
            this.BMI = (this.mass / (this.height * this.height));
        }*/
    };

    calcBMI(personInfo[i]);

    (personInfo[i].BMI > winnerPerson.BMI) && (winnerPerson = personInfo[i]);
    (winnerPerson.BMI == personInfo[i].BMI) && (winnerPerson[i] = personInfo[i]);

}

for (let i = 0;  i < personInfo.length; i++) {

    if (winnerPerson[i]) {
		console.log('Winner is ' + winnerPerson[i].fullname + ' with ' + winnerPerson[i].BMI + ' BMI!');
    }

}