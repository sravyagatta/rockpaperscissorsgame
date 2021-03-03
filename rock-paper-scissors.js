let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getRounds() {
  let rounds = parseInt(prompt("How many rounds do you want to play?"));
  while (isNaN(rounds) || rounds < 1) {
    rounds = getRounds();
  }
  return rounds;
}

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converToWord(letter) {
  if (letter == "r") return "rock";
  if (letter == "p") return "paper";
  if (letter == "s") return "scissors";
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML =
    convertToWord(userChoice) +
    "beats" +
    convertToWord(compChoice) +
    ".You Win!!!";
}

function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML =
    convertToWord(userChoice) +
    "loses to" +
    convertToWord(compChoice) +
    ".You Lost...";
}

function tie(userChoice, compChoice) {
  result_p.innerHTML =
    convertToWord(userChoice) +
    "equals" +
    convertToWord(compChoice) +
    ". Its a tie!!!";
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    console.log("selected rock");
  });
  paper_div.addEventListener("click", function () {
    console.log("selected paper");
  });
  scissors_div.addEventListener("click", function () {
    console.log("selected scissors");
  });
}

main();
