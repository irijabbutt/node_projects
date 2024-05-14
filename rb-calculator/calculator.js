import { questions, sum, subtract, multiply, divide } from "./input.js";
function check() {
    if (questions.operator == "+") {
        sum(questions.num1, questions.num2);
    }
    else if (questions.operator == "-") {
        subtract(questions.num1, questions.num2);
    }
    else if (questions.operator == "*") {
        multiply(questions.num1, questions.num2);
    }
    else if (questions.operator == "/") {
        divide(questions.num1, questions.num2);
    }
    else {
        console.log("Invalid operator");
    }
}
check();
console.log("questions", questions);
