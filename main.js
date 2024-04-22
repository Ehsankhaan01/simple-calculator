#! /usr/bin/env node
import inquirer from 'inquirer';
const cal2 = await inquirer.prompt([
    {
        type: "number",
        name: "firstnumber",
        message: "enter your first number",
    },
    {
        type: "number",
        name: "secondnumber",
        message: "enter your second number",
    },
    {
        type: 'list',
        name: "operator",
        message: "plrase select an operator to perform action",
        choices: ["addition", "subtraction", "multiplication", "division",]
    }
]);
if (cal2.operator === "addition") {
    console.log(`the Sum of your number is ${cal2.firstnumber + cal2.secondnumber}`);
}
else if (cal2.operator === "subtraction") {
    console.log(`the Sum of your number is ${cal2.firstnumber - cal2.secondnumber}`);
}
else if (cal2.operator === "multiplication") {
    console.log(`the Sum of your number is ${cal2.firstnumber * cal2.secondnumber}`);
}
else if (cal2.operator === "divison") {
    console.log(`the Sum of your number is ${cal2.firstnumber / cal2.secondnumber}`);
}
;
console.log("this is Ahsan khan best calculator");
