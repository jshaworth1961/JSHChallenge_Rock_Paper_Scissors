/* Challenge Rock,Paper,Scissors Day 8 1.29.2020
app.js
*/


let yourWins = 0; //counts your wins
let computerWins = 0;


let you =
{
    choice: undefined
};

let computer =
{
    choice: undefined
};


function playGame(yourChoice) {
    you.choice = yourChoice;
    console.log(`Your pick was ${you.choice}`);

    computer.choice = computerPlay();
    console.log(`The computer's pick was ${computer.choice}`);

    determineOutcome(you.choice, computer.choice)

}

function computerPlay() {
    compChoices = ['rock', 'paper', 'scissors'];

    let index = Math.floor((Math.random() * 3));
    //console.log(index);

    let choice = compChoices[index];

    return choice;


}

function determineOutcome(yourChoice, computerChoice) {
    console.log("Made it into determineOutcome");
    let computerWin = '';

    switch (true) {
        case (yourChoice === 'rock' && computerChoice === 'scissors'):
            youWin = 'win';
            break;
        case (yourChoice === 'paper' && computerChoice === 'rock'):
            youWin = 'win';
            break;
        case (yourChoice === 'scissors' &&
            computerChoice === 'paper'):
            youWin = 'win';
            break;
        case (yourChoice === computerChoice):
            youWin = 'tie';
            break;
        default:
            youWin = 'loss';
            break;

    }

    //console.log(`You had a ${youWin}`);

    getResultsOut(youWin);

}

function getResultsOut(youWin) {
    let yourTallyInfo = undefined;
    let computerTallyInfo = undefined;

    if (youWin === 'win') {
        computerWin = "loss";
        yourWins++;

        console.log(`You picked ${you.choice} and had a win!`);
        console.log(`The computer picked ${computer.choice} and had a loss!`);

        document.getElementById("img-result-you").src = "thewinner.jpg";
        document.getElementById("img-result-computer").src = "loser.jpg";

        yourTallyInfo = `You had a win! Your total wins is now ${yourWins}.`;
        document.getElementById('your-tally').textContent = yourTallyInfo;

        computerTallyInfo = `The computer had a loss. It now has ${computerWins} wins.`;
        document.getElementById('computer-tally').textContent = computerTallyInfo;


    }
    if (youWin === 'loss') {
        computerWin = "win"
        computerWins++;

        console.log(`You picked ${you.choice} and had a loss!`);
        console.log(`The computer picked ${computer.choice} and had a win!`);

        document.getElementById("img-result-you").src = "loser.jpg";
        document.getElementById("img-result-computer").src = "thewinner.jpg";

        yourTallyInfo = `You had a loss. Your total wins is now equal to ${yourWins}.`;
        document.getElementById('your-tally').textContent = yourTallyInfo;

        computerTallyInfo = `The computer had a win! It now has ${computerWins} wins.`;
        document.getElementById('computer-tally').textContent = computerTallyInfo;
    }

    if (youWin === 'tie') {
        document.getElementById("img-result-you").src = "tiegame.png";
        document.getElementById("img-result-computer").src = "tiegame.png";

        yourTallyInfo = `You played to a tie. Your total wins is now equal to ${yourWins}`;
        document.getElementById('your-tally').textContent = yourTallyInfo;

        computerTallyInfo = `The computer played to a tie. It now has ${computerWins} wins.`;
        document.getElementById('computer-tally').textContent = computerTallyInfo;

    }



}