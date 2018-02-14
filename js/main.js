var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.33) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
    }
};





/* Dave's code

function startGame(e) {
  var choice = e.target.id
  console.log(choice)
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}
*/
