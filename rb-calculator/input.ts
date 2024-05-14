import inquirer from "inquirer";
// inquirer
// 	.prompt([
// 		/* Pass your questions in here */
// 	])
// 	.then((answers) => {
// 		// Use user feedback for... whatever!!
// 	})
// 	.catch((error) => {
// 		if (error.isTtyError) {
// 			// Prompt couldn't be rendered in the current environment
// 		} else {
// 			// Something else went wrong
// 		}
// 	});

const questions = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your 1st number",
    },
     {
        type: "number",
        name: "num2",
        message: "Enter your 2st number",
    },
      {
        type: "list",
        name: "operator",
        message: "Select your operator",
        choices: ["+", "-", "*", "/"],
    },
]);

function sum(num1: number, num2: number) {const result = num1 + num2
    return console.log(`Sum of ${num1} and ${num2} = ${result}`);}
function subtract(num1:number,num2:number) { const result = num1 - num2
    return console.log(`Subtract of ${num1} and ${num2} = ${result}`);}
function multiply(num1:number,num2:number) {const result = num1 * num2
    return console.log(`Multiply of ${num1} and ${num2} = ${result}`); }
function divide(num1:number,num2:number) { const result = num1 / num2
    return console.log(`Division of ${num1} and ${num2} = ${result}`);
}


export { questions, sum, subtract, multiply, divide}