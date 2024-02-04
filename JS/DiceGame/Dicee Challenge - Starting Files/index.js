var randomNumberForPlayer1 = Math.floor(Math.random() * 6) + 1;
var randomNumberForPlayer2 = Math.floor(Math.random() * 6) + 1;

const diceImage1 = document.querySelector(".img1");
if (randomNumberForPlayer1 >= 1 && randomNumberForPlayer1 <= 6) {
    diceImage1.setAttribute("src", "images/dice" + randomNumberForPlayer1 + ".png");
}

const diceImage2 = document.querySelector(".img2");
if (randomNumberForPlayer2 >= 1 && randomNumberForPlayer2 <= 6) {
    diceImage2.setAttribute("src", "images/dice" + randomNumberForPlayer2 + ".png");
}

if (randomNumberForPlayer1 > randomNumberForPlayer2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else if (randomNumberForPlayer1 < randomNumberForPlayer2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw!!"
}