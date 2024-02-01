
const getComputerChoice = () => {
  const npcChoice = Math.floor(Math.random() * 3);
  switch(npcChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}








// Scores (i for computer) (J for player)
// let i = 0;
// let j = 0;

// // Win condition (Bo5)
// function game () {
//   for (let s = 0; s < 5; s++)  {
//     playRound();
//     if (s === 4 && i > j) {
//       alert("hahaha get out you've lost");
//     } else if (s === 4 && j > i) {
//       alert("Hell yeah! you've won!!");
//     } else if (s === 4 && j === i) {
//       alert(`It's a Tie.. refresh the page to play again`);
//     }
//   }
// }

// // RNG 
// function getComputerChoice() {
//   let choices = ["rock", "paper", "scissors"];
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// // one round 
// function playRound () {
//   getComputerChoice();
//   let playerChoice = prompt("please enter your choice, Rock? Paper? or Scissors?", "").toLowerCase();
//   let computerChoice = getComputerChoice();

// // Tie 
//   if (computerChoice === playerChoice) {
//   alert(`It's a tie! play again! the score is still ${i} for the Computer and ${j} for you`);
  
// // Computer wins
//   } else if (computerChoice === "rock" && playerChoice === "scissors") {
//     i++;
//     alert(`You lose! rock beats scissors.. the score now is ${i} for the Computer and ${j} for you`);

//   } else if (computerChoice === "paper" && playerChoice === "rock") {
//     i++;
//     alert(`You lose! rock beats scissors.. the score now is ${i} for the Computer and ${j} for you`);

//   } else if (computerChoice === "scissors" && playerChoice === "paper")  {
//     i++;
//     console.log(`You lose! rock beats scissors.. the score now is ${i} for the Computer and ${j} for you`);

// // Player wins
//   } else if (computerChoice === "rock" && playerChoice === "paper") {
//     j++;
//     alert(`You win! Paper beats rock.. the score now is ${i} for the Computer and ${j} for you`);

//   } else if (computerChoice === "paper" && playerChoice === "scissors")  {
//     j++;
//     alert(`You win! scissors beats paper the score now is ${i} for the Computer and ${j} for you`);

//   } else if (computerChoice === "scissors" && playerChoice === "rock") {
//     j++;
//     console.log(`You win! rock beats scissors the score now is ${i} for the Computer and ${j} for you`);
//   }
// }

// // playing the game //
// game();
