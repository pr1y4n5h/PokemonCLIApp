var readLineSync = require('readline-sync');
const chalk = require('chalk');
score = 0;
function game(ques,ans){
  var a = readLineSync.question(ques);
  console.log(name+" you selected "+ a);
  if(a===ans){
    console.log(chalk.green("Good! Correct one!"));
    score = score + 10;
  }
  else{
    console.log(chalk.red("Ooops! That's wrong!"));
    score = score - 10;
  }
  console.log("Your current score is ",score)
}

console.log(chalk.redBright.bold("\t\t\t\tWelcome to Pokemon game! Gotta catch 'em all!\t\t\t\t"));
console.log("****************************************************************************\n")
console.log("This game is designed for Pokemon Lovers ;) \nSo, let's see what you got :P \n");
console.log(chalk.cyan.bold("We will ask you few questions and will provide you options. \nChoose the correct option to flaunt your legacy...\n"));
var name = readLineSync.question("Please enter your name first - ");
console.log(chalk.green.bold("Hi "+name.toUpperCase()+"!"));
var ready = readLineSync.question("So, are you ready "+name.toUpperCase()+"? Please reply with y/n  ")
if(ready==="y"){
console.log("****************************************************************************")
console.log(chalk.green.bold("Let's start the game "+name));

var qOne = {
  ques: "What is the full name of Ash, the lead character? Your options are - \n1> Ash Suzuki \n2> Ash Ketchum \n3> Ash Tyson \n",
  ans: "2" 
}

var qTwo = {
  ques: "What is the evolved stage of Pikachu? Your options are - \n1> Pichu \n2> Laprus \n3> Raichu \n",
  ans: "3" 
}

var qThree = {
  ques: "What is the most powerfull attack of Pikachu? Your options are - \n1> Thunderbolt \n2> Iron Tail \n3> Tackle \n",
  ans: "1"

}

var qFour = {
  ques: "Which rock Pokemon do Brock carries that is a rock type snake pokemon? Your options are - \n1> Geodude \n2> Onyx \n3> Golbat \n",
  ans: "2" 
}

var qFive = {
  ques: "Which Pokemon do Team rocket carry that can speak human language?Your options are - \n1> Wobbuffet \n2> Arbok \n3> Meowth \n",
  ans: "3" 
}

var questions = [qOne,qTwo,qThree,qFour,qFive];
for(var i=0; i<questions.length; i++)
{
var curQ = questions[i];
game(curQ.ques, curQ.ans)
}

console.log("****************************************************************************\n")

console.log(chalk.blackBright.bgWhite.bold("End of the quiz! Time for the result now!\n"));
console.log(chalk.cyan.bold(name.toUpperCase()+"! Your final score is --> "+score+"\n"));
console.log(chalk.redBright.bgWhite.bold("\t\t\t\tThanks for playing...  :) \n")); 
console.log("****************************************************************************")
}
else{
  console.log("Thanks for playing!")
}
