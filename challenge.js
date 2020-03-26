

var scores, roundScore, activePlayer, dice, gameplaying;

init();

var lastDice, dice1, dice2

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gameplaying) {
        //Random number
        dice1 = Math.floor(Math.random() * 6) + 1
        dice2 = Math.floor(Math.random() * 6) + 1

        //display the result
        showDice()
        document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png'
        document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png'


        //updating thhe round score if rolled nber is not 1
        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2
            document.querySelector('#current-' + activePlayer).textContent = roundScore

        } else {
            nextplayer()
        }
        // if (dice === 6 && lastDice === 6) {
        //     scores[activePlayer] = 0
        //     document.querySelector('#score-' + activePlayer).textContent = '0'
        //     nextplayer()

        // } else if (dice !== 1) {
        //     roundScore += dice
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore

        // } else {
        //     nextplayer()
        // }
        lastDice = dice
    }

})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameplaying) {
        //add current score to global score
        scores[activePlayer] += roundScore
        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        var input = document.getElementById('final-score').value
        var winningScore

        if (input) {
            winningScore = input
        } else {
            winningScore = 100
        }

        //chheck if player won game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!"
            hideDice()

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

    hideDice()

}

function hideDice() {
    document.querySelector('#dice-1').style.display = "none"
    document.querySelector('#dice-2').style.display = "none"
}

function showDice() {
    document.querySelector('#dice-1').style.display = "block"
    document.querySelector('#dice-2').style.display = "block"
}



function init() {
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    gameplaying = true

    hideDice()

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















































