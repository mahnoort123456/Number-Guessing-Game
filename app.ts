import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1); 

console.log("WELCOME! to number guessing GAME");

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please! guess a number between 1-10:"
    }]);
if( answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! you gusses right number.");
}else{
    console.log("you guess wrong number!");
}