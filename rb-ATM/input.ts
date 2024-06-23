import inquirer from "inquirer";
import {BankAccount} from "./atm.js"

inquirer
   .prompt([
        {
            type: "input",
            name: "accountNumber",
            message: "Enter your account number:",
        },
        {
            type: "number",
            name: "pin",
            message: "Enter your PIN:",
        },
        {
            type: "number",
            name: "initialBalance",
            message: "Enter your initial balance:",
        },
    ])
   .then((answers) => {
        let account = new BankAccount(answers.accountNumber, answers.pin, answers.initialBalance);

        inquirer
           .prompt([
                {
                    type: "number",
                    name: "deposit",
                    message: "Enter your Deposit amount:",
                },
                {
                    type: "number",
                    name: "withdraw",
                    message: "Enter your Withdraw amount:",
                },
            ])
           .then((answers2) => {
                console.log(account.checkBalance(answers.pin));
                console.log(account.deposit(answers2.deposit, answers.pin));
                console.log(account.withdraw(answers2.withdraw, answers.pin));
                console.log(account.getTransactionHistory());
            });
    });