var johnsTeam = {
	score0: 89,
	score1: 120,
	score2: 103
}

var mikesTeam = {
	score0: 116,
	score1: 94,
	score2: 123
}

var mariesTeam = {
	score0: 97,
	score1: 134,
	score2: 105
}

function sumScores(objName) {
	var summedScores = 0;
		for(var scores in objName) {
			if(objName.hasOwnProperty(scores)) {
			  summedScores += parseFloat(objName[scores]);
			}
		}
	return summedScores;
}

function averageScore(teamName) {
	return sumScores(teamName) / Object.entries(teamName).length;
}

function logTheLast(teamName) {
	return 'Average Score of ' + teamName + ' Team = ' + averageScore(teamName);
}

var avScoreJohns = averageScore(johnsTeam);
var avScoreMikes = averageScore(mikesTeam);
var avScoreMaries = averageScore(mariesTeam);
console.log('Average Score of Johns Team = ' + avScoreJohns);
console.log('Average Score of Mikes Team = ' + avScoreMikes);
console.log('Average Score of Maries Team = ' + avScoreMaries);

if (avScoreJohns > avScoreMikes && avScoreJohns > avScoreMaries) {
	console.log('johnsTeam is the Winner');
} else if (avScoreMikes > avScoreJohns && avScoreMikes > avScoreMaries) {
	console.log('mikesTeam is the Winner');
} else if (avScoreMaries > avScoreJohns && avScoreMaries > avScoreMikes) {
	console.log('mariesTeam is the Winner');
} else {
	console.log('There\'s no Winner!');
}

//averageScoreOfMikesTeam > averageScoreOfMariesTeam && averageScoreOfJohnsTeam ? console.log('Winner is Mikes Team') : console.log('Winner is ');