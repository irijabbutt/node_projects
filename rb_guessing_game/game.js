#! /usr/bin/env mode
import inquirer from "inquirer";
let secretNumber = Math.floor(Math.random() * 100) + 1;
async function guessTheNumber() {
    while (true) {
        const { guess } = await inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a number between 1 and 100:",
            },
        ]);
        if (isNaN(parseInt(guess, 10))) {
            console.log("Invalid input. Please enter a number.");
            continue;
        }
        const numGuess = parseInt(guess, 10);
        if (numGuess === secretNumber) {
            console.log("Congratulations! You guessed the correct number.");
            break;
        }
        else if (numGuess < secretNumber) {
            console.log("Your guess is too low. Try again.");
        }
        else {
            console.log("Your guess is too high. Try again.");
        }
    }
}
guessTheNumber();
