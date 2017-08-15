/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();
// 1.) handle event of dice thrown 2.) event is click event on browser

document.querySelector('.btn-roll').addEventListener('click', function() {    //arbitary function

if (gamePlaying) {
  //1) generate random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2) display the random nos in dice
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  // 3) update the nos. in score if not dice != 1
if (dice !== 1) {
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}
  else {
  nextPlayer();
}
}

});

document.querySelector('.btn-hold').addEventListener('click', function() {

if (gamePlaying) {

  // update global score by taking round score
  scores[activePlayer] += roundScore;

  // show in UI
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  // if round score is > 100, player wins
  if (scores[activePlayer] >= 100) {
    document.getElementById('name-' + activePlayer).textContent = 'WINNER';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;

  } else {
    // next player's turn
    nextPlayer();
  }

}

});


document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer() {

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // terniary operator
  roundScore = 0;
//   document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
};



function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

};























/*

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.querySelector('#current-' + activePlayer).textContent = dice;  // this is setter method
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#current-' + activePlayer).textContent; // this is getter method
console.log(x);

document.querySelector('.dice').style.display = 'none';
*/
