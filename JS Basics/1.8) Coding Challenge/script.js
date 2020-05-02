var johnsTeam, mikesTeam mariesTeam;

var firstScoreOfJohnsTeam, secondScoreOfJohnsTeam, thirdScoreOfJohnsTeam;

var firstScoreOfMikesTeam, secondScoreOfMikesTeam, thirdScoreOfMikesTeam;

var firstScoreOfMariesTeam, secondScoreOfMariesTeam, thirdScoreOfMariesTeam;

firstScoreOfJohnsTeam = 89;
secondScoreOfJohnsTeam = 120;
thirdScoreOfJohnsTeam = 103;

firstScoreOfMikesTeam = 116;
secondScoreOfMikesTeam = 94;
thirdScoreOfMikesTeam = 123;

firstScoreOfMariesTeam = 97;
secondScoreOfMariesTeam = 134;
thirdScoreOfMariesTeam = 105;

var averageScoreOfJohnsTeam = (firstScoreOfJohnsTeam + secondScoreOfJohnsTeam + thirdScoreOfJohnsTeam) / 3;
var averageScoreOfMikesTeam = (firstScoreOfMikesTeam + secondScoreOfMikesTeam + thirdScoreOfMikesTeam) / 3;
var averageScoreOfMariesTeam = (firstScoreOfMariesTeam + secondScoreOfMariesTeam + thirdScoreOfMariesTeam) / 3;

console.log('avJohn ' + averageScoreOfJohnsTeam);
console.log('avMike ' + averageScoreOfMikesTeam);
console.log('avMary ' + averageScoreOfMariesTeam);

if (averageScoreOfJohnsTeam > averageScoreOfMikesTeam && averageScoreOfMariesTeam) {
	console.log('johnsTeam is the Winner');
} else if (averageScoreOfMikesTeam > averageScoreOfJohnsTeam && averageScoreOfMariesTeam) {
	console.log('mikesTeam is the Winner');
} else if (averageScoreOfMariesTeam > averageScoreOfJohnsTeam && averageScoreOfMikesTeam) {
	console.log('mariesTeam is the Winner');
}

//averageScoreOfMikesTeam > averageScoreOfMariesTeam && averageScoreOfJohnsTeam ? console.log('Winner is Mikes Team') : console.log('Winner is ');