
var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        var dice = Math.floor(Math.random() * 6 + 1) ; //generating random dice 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; //unhiding the dice 
    diceDOM.src = 'dice-' + dice + '.png';

    if(dice === 6 && lastDice === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if(dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = dice;
    } else {
        nextPlayer();
    }
    lastDice = dice;
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying) {
        scores[activePlayer] += roundScore; //adding current Score 

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];  //updating the UI

        var input = document.querySelector('.final-score').value;
        var winningScore;

        if(input) {
             winningScore = input;
        } else {
            winningScore = 100;
        }

    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'; 
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
}
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //Next Player
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

    function init() {

        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying =true;

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

