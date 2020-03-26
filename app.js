/*
GAME RULES:

- The game has 2 players, playing in rounds

- In each turn, a player rolls a dice as many times as he 
    whishes. Each result get added to his ROUND score

- BUT, if the player rolls a 1, all his ROUND score gets lost. 
    After that, it's the next player's turn

- The player can choose to 'Hold', which means that his ROUND 
    score gets added to his GLBAL score. After that, 
    it's the next player's turn

- The first player to reach 100 points on GLOBAL score wins 
    the game
   
*/

var scores, roundScore, activePlayer, dice, gameplaying;

init();
// scores = [0, 0]
// roundScore = 0
// activePlayer = 0; //0 would be first player otherwise is 1

// document.querySelector('#current-'+activePlayer).innerHTML = "<em>" +dice +"</em>";
// MDN Javascript


document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gameplaying) {
        //Random number
        dice = Math.floor(Math.random() * 6) + 1
        //display the result
        var diceDOM = document.querySelector('.dice')
        document.querySelector('.dice').style.display = "block"
        diceDOM.src = 'dice-' + dice + '.png'

        //updating thhe round score if rolled nber is not 1
        if (dice !== 1) {
            roundScore += dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        } else {
            nextplayer()
        }
    }

})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameplaying) {
        //add current score to global score
        scores[activePlayer] += roundScore
        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        //chheck if player won game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!"
            document.querySelector('.dice').style.display = "none"

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameplaying = false
        } else {
            //next player
            nextplayer()
        }
    }

})


document.querySelector('.btn-new').addEventListener('click', init)



function nextplayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = "none"

}

function init() {
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    gameplaying = true

    document.querySelector('.dice').style.display = "none"

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = "Player 1"
    document.getElementById('name-1').textContent = "Player 2"

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}















































