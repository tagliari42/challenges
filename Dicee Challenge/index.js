let playerOneDice;
let playerTwoDice;

const winner = document.querySelector("h1");
const firstDice = document.querySelector(".img1");
const secondDice = document.querySelector(".img2")

const rollTheDice = () => {
    playerOneDice = Math.floor((Math.random() * 6) + 1);
    playerTwoDice = Math.floor((Math.random() * 6) + 1);

    firstDice.setAttribute("src",`./images/dice${playerOneDice}.png`);
    secondDice.setAttribute("src",`./images/dice${playerTwoDice}.png`);

    if (playerOneDice > playerTwoDice) {
        winner.innerHTML = "Player 1 Won!!!";
    } else if (playerTwoDice > playerOneDice) {
        winner.innerHTML = "Player 2 Won!!!";
    } else {
        winner.innerHTML = "It's a tie.";
    }
}

onload(rollTheDice())