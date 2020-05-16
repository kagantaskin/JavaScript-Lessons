/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var scores, roundScore, activePlayer, gamePlaying, previousScore, winningScore;

function newGame() {
	document.querySelector('.inputPanel').style.display = 'block';
	document.querySelector('.wrapper').style.display = 'none';

	var bestScoreButton = document.getElementById("bestScore");

// Execute a function when the user releases a key on the keyboard
	bestScoreButton.addEventListener("keyup", function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
	  	if (document.getElementById("bestScore").value === null) {}
		winningScore = 20;
	    // Cancel the default action, if needed
	    event.preventDefault();
	    // Trigger the button element with a click
	    document.getElementById("myBtn").click();
	    document.querySelector('.inputPanel').style.display = 'none';
		document.querySelector('.wrapper').style.display = 'block';
		init();
	  } else {
		winningScore = document.getElementById("bestScore").value;
	    // Cancel the default action, if needed
	    event.preventDefault();
	    // Trigger the button element with a click
	    document.getElementById("myBtn").click();
	    document.querySelector('.inputPanel').style.display = 'none';
		document.querySelector('.wrapper').style.display = 'block';
		init();
	  }
	});
}

newGame();

document.querySelector('.btn-roll').addEventListener('click', () => {
	if (gamePlaying) {
		var dice = Math.floor(Math.random() * 6) + 1;

		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		if (dice !== 1) {
			//add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			console.log('prev score of player-' + activePlayer + ' is = ' + previousScore);

			if ((previousScore[activePlayer] && dice) === 6) {
					console.log(previousScore);
					previousScore = [0, 0];
					console.log(previousScore);
					document.getElementById('score-' + activePlayer).textContent = '0';
					nextPlayer();

			}
			previousScore[activePlayer] = dice;


		} else {
			//next player
			nextPlayer();
			console.log('prev score of player-' + activePlayer + ' is = ' + previousScore);
			previousScore = [0, 0];
		}
	}

});

document.querySelector('.btn-hold').addEventListener('click', () => {
	if (gamePlaying) {
		scores[activePlayer] += roundScore;

		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		if (scores[activePlayer] >= winningScore) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.getElementById('current-' + activePlayer).textContent = '0';
		gamePlaying = false;
		} else {
		nextPlayer();
			previousScore = [0, 0];
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', newGame);

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}

function init() {
	scores = [0, 0];
	previousScore = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}