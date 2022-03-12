let array = ["rock", "paper", "scissors"]

let computerPlay = () => {
    return array[Math.floor(Math.random() * 3)]
}

let computerScore = 0;
let playerScore = 0;

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection == computerSelection) { return "Tie Game!" }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        playerScore++;
        return 'You Win! ' + playerSelection + " beats " + computerSelection;
    }
    else {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

let game = () => {
    while (true) {
        for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase();
            let computerSelection = computerPlay().toLowerCase();
            if (!array.includes(playerSelection)) {
                console.log("Your input must be rock, paper or scissors!");
                i = i - 1;
                continue;
            }
            console.log(playRound(playerSelection, computerSelection));
            console.log("Player: " + playerScore + " Computer: " + computerScore);
        }
        switch (true) {
            case playerScore > computerScore:
                console.log("You won the game!")
                break;
            case computerScore > playerScore:
                console.log("You lost the game!")
                break;
            case computerScore == playerScore:
                console.log("Tie!")
                break;
        }
        computerScore = 0; playerScore = 0;
        let again = prompt("Wanna play again?(y/n)");
        while (again != "y" && again != "n") {
            alert("y or n!");
            again = prompt("Wanna play again?")
        }
        if (again == "n") break;
    }

}

game()