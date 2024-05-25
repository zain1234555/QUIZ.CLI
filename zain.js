#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.rgb(153, 51, 255)("\n\t\t------------Welcome To Quiz With ZAIN-------------\n"));
let array = [];
let answer1 = await inquirer.prompt([
    {
        name: "quiz_1",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("Which TypeScript feature helps catch errors during compile-time?"),
        choices: [
            "a) Type Assertion",
            "b) Type Inference",
            "c) Static Typing",
            "d) Dynamic Typing"
        ]
    }
]);
if (answer1.quiz_1 === "c) Static Typing") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is  ${chalk.bold.rgb(255, 255, 51)('Static Typing')} \n`));
}
;
let answer2 = await inquirer.prompt([
    {
        name: "quiz_2",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("What does the 'never' type represent in TypeScript?"),
        choices: [
            "a) A type that can represent any value",
            "b) A type-safe counterpart of 'any'",
            "c) A type of values that never occur",
            "d) A type indicating an unknown value"
        ]
    }
]);
if (answer2.quiz_2 === "c) A type of values that never occur") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is  ${chalk.bold.rgb(255, 255, 51)('A type of values that never occur')} \n`));
}
;
let answer3 = await inquirer.prompt([
    {
        name: "quiz_3",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("Which TypeScript feature allows a variable to have multiple types?"),
        choices: [
            "a) Type Assertion",
            "b) Union Types",
            "c) Intersection Types",
            "d) Type Aliases"
        ]
    }
]);
if (answer3.quiz_3 === "b) Union Types") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is ${chalk.bold.rgb(255, 255, 51)('Union Types')}\n `));
}
;
let answer4 = await inquirer.prompt([
    {
        name: "quiz_4",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("Which keyword is used to declare a class in TypeScript?"),
        choices: [
            "a) class",
            "b) interface",
            "c) type",
            "d) implements"
        ]
    }
]);
if (answer4.quiz_4 === "a) class") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is ${chalk.bold.rgb(255, 255, 51)('class')} \n`));
}
;
let answer5 = await inquirer.prompt([
    {
        name: "quiz_5",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("What is the purpose of an interface in TypeScript?"),
        choices: [
            "a) To define the structure of objects",
            "b) To declare multiple types for a variable",
            "c) To create aliases for complex types",
            "d) To allow explicit type casting"
        ]
    }
]);
if (answer5.quiz_5 === "a) To define the structure of objects") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is ${chalk.bold.rgb(255, 255, 51)('To define the structure of objects')}\n `));
}
;
let answer6 = await inquirer.prompt([
    {
        name: "quiz_6",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("Which TypeScript feature is used to ensure that a variable is of a specific type?"),
        choices: [
            "a) Type Assertion",
            "b) Type Inference",
            "c) Type Guards",
            "d) Type Aliases"
        ]
    }
]);
if (answer6.quiz_6 === "a) Type Assertion") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is ${chalk.bold.rgb(255, 255, 51)('Type Assertion')} \n`));
}
;
let answer7 = await inquirer.prompt([
    {
        name: "quiz_7",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("Which of the following statements is true about TypeScript?"),
        choices: [
            "a) TypeScript code is executed directly by the browser",
            "b) TypeScript code needs to be transpiled to JavaScript before execution",
            "c) TypeScript code can only run on Node.js",
            "d) TypeScript code runs faster than JavaScript"
        ]
    }
]);
if (answer7.quiz_7 === "b) TypeScript code needs to be transpiled to JavaScript before execution") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is ${chalk.bold.rgb(255, 255, 51)('TypeScript code needs to be transpiled to JavaScript before execution')}\n `));
}
;
let answer8 = await inquirer.prompt([
    {
        name: "quiz_8",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("What is the file extension used for TypeScript files?"),
        choices: [
            "a) .js",
            "b) .ts",
            "c) .typescript",
            "d) .tscript"
        ]
    }
]);
if (answer8.quiz_8 === "b) .ts") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is ${chalk.bold.rgb(255, 255, 51)('.ts')} \n`));
}
;
let answer9 = await inquirer.prompt([
    {
        name: "quiz_9",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("TypeScript supports which of the following data types?"),
        choices: [
            "a) Number, String, Boolean",
            "b) Array, Object, Function",
            "c) Tuple, Enum, Any",
            "d) All of the above"
        ]
    }
]);
if (answer9.quiz_9 === "d) All of the above") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is ${chalk.bold.rgb(255, 255, 51)('All of the above')}\n `));
}
;
let answer10 = await inquirer.prompt([
    {
        name: "quiz_10",
        type: "list",
        message: chalk.bold.rgb(51, 153, 255)("Which of the following is not a valid way to declare an array in TypeScript?"),
        choices: [
            "a) let arr: number[] = [1, 2, 3]",
            "b) let arr: Array<number> = [1, 2, 3]",
            "c) let arr = [1, 2, 3]",
            "d) let arr: Array = [1, 2, 3]"
        ]
    }
]);
if (answer10.quiz_10 === "d) let arr: Array = [1, 2, 3]") {
    console.log(chalk.italic.rgb(51, 255, 255)("\n\tCongratulation.....!! You Guessed A correct Option\n"));
    console.log(chalk.italic.rgb(204, 153, 255)("\n\t\tYou Got A '1' Point\n"));
    array.push(1);
}
else {
    console.log(chalk.italic.rgb(255, 102, 102)(`\n\t\t...SORRY....You Guessed A wrong Option. The Correct Option Is ${chalk.bold.rgb(255, 255, 51)('let arr: Array = [1, 2, 3]')} \n`));
}
;
let all = array.reduce((total, grade) => {
    return total + grade;
});
if (all >= 8) {
    console.log(chalk.italic.rgb(204, 153, 255)(` \n\tYour Score Is ${all} Congrats...!!! You Had Done A Great Job\n `));
}
else if (all < 8 && all >= 5) {
    console.log(chalk.italic.rgb(204, 153, 255)(`\n\tNice One  Your Score Is : ${all}\n `));
}
else if (all < 5 && all >= 1) {
    console.log(chalk.italic.rgb(204, 153, 255)(`\n\tYour Score Is ${all} Not Bad\n `));
}
else {
    console.log(chalk.italic.rgb(204, 153, 255)(`\n\t....Aww You Got 0 POINT Better Luck Next Time....\n `));
}
console.log(chalk.bold.italic.rgb(255, 153, 255)("\n\t\t-------I HOPE THAT YOU FIND IT USEFUL:)-------\n"));
