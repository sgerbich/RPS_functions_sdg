var arr = ["rock", "paper", "scissors"];
var player1;
var player2;
var score1 = 0;
var score2 = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getHand() {
  return arr[getRandomInt(3)];
}

function playRound() {
  player1 = getHand();
  player2 = getHand();
  // console.log(player1);
  switch (player1) {
    case "rock":
      if (player2 == "paper") {
        console.log("player 2 wins paper beats rock");
        score2++;
      } else if (player2 == "scissors") {
        console.log("player 1 wins rock beats scissors");
        score1++;
      } else {
        console.log("its a tie both threw rock");
      }
      break;
    case "paper":
      if (player2 == "scissors") {
        console.log("player 2 wins scissors beats paper");
        score2++;
      } else if (player2 == "rock") {
        console.log("player 1 wins paper beats rock");
        score1++;
      } else {
        console.log("its a tie both threw paper");
      }
      break;
    case "scissors":
      if (player2 == "paper") {
        console.log("player 1 wins scissors beats paper");
        score1++;
      } else if (player2 == "rock") {
        console.log("player 2 wins rock beats scissors");
        score1++;
      } else {
        console.log("its a tie both threw scissors");
      }
      break;
    default:
      break;
  }
  console.log(score1);
  console.log(score2);
}

while (score1 < 5 && score2 < 5) {
  playRound();
  // console.log(score1);
  // console.log(score2);
}
