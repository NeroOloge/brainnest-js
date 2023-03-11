const playOptions = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS",
};
function computerPlay() {
  const randInt = Math.floor(Math.random() * 3);
  const options = Object.keys(playOptions);
  const play = playOptions[options[randInt]];
  console.log("Computer played: ".concat(play));
  return play;
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection) return { msg: "You lose! No selection", win: false };
  const player = playerSelection.toUpperCase();
  const computer = computerSelection.toUpperCase();
  if (!playOptions.hasOwnProperty(player))
    return { msg: "You lose! Invalid selection", win: false };
  if (player === "ROCK" && computer === "SCISSORS") {
    return { msg: "You win! Rock beats Scissors", win: true };
  } else if (player === "SCISSORS" && computer === "ROCK") {
    return { msg: "You lose! Rock beats Scissors", win: false };
  } else if (player === "SCISSORS" && computer === "PAPER") {
    return { msg: "You win! Scissors beats Paper", win: true };
  } else if (player === "PAPER" && computer === "SCISSORS") {
    return { msg: "You lose! Scissors beats Paper", win: false };
  } else if (player === "PAPER" && computer === "ROCK") {
    return { msg: "You win! Paper beats Rock", win: true };
  } else if (player === "ROCK" && computer === "PAPER") {
    return { msg: "You lose! Paper beats Rock", win: false };
  } else {
    return { msg: "It's a tie" };
  }
}

function game() {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper, scissors: ");
    const { msg, win } = playRound(playerSelection, computerPlay());
    console.log(msg);
    if (win) wins++;
    else if (win === false) losses++;
    else ties++;
  }
  console.log(`You won ${wins} time${wins !== 1 ? "s" : ""}!`);
  console.log(`You lost ${losses} time${losses !== 1 ? "s" : ""}!`);
  console.log(`You tied ${ties} time${ties !== 1 ? "s" : ""}!`);
}

game();
