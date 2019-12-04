/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach the 100 points or changed final score on GLOBAL score wins the game


Changes made:

- added another dice and player will loose his current score when any of them is 1.
- A player loose his entire score if he rolls two six in a row. After that, it's the next player turn. (not in use)

*/




var scores, roundScore, activePlayer, dice1, dice2, gamePlaying, winningScore;


init();
document.querySelector('.btn-roll').addEventListener('click', function() {
if (gamePlaying) {

    // 1. Random number
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

/*
    if (dice1 === dice1Val ||  dice2 === dice2Val) {
        console.log('find');
        dice1 = 0;
        dice2 = 0;
        scores[activePlayer] = 0;


        document.getElementById('score-' + activePlayer).textContent = '0';
        nextPlayer();

    }
    else if (dice1 === 6) {
        dice1Val = dice1;
    }
    else if (dice2 === 6) {
        dice2Val = dice2;
    }
    else{
        dice1Val = 0;
        dice2Val = 0;
    }
*/

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice1 !== 1 && dice2 !== 1) {
        // Add score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }

    else {
            //Next player
            nextPlayer();
            //dice1Val = 0;
            //dice2Val = 0;
    }


    }


});




document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        console.log(input);

        if (input) {
            winningScore = input;
        }
        else {
            winningScore = 100;
        }


        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    hideDice();
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    hideDice();

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

//Hide dice
function hideDice() {
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}






