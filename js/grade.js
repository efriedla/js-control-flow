/*###grade.js Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

Requirements

Your program should have a variable to store the letter grade (an integer between 0 and 100)
For the letter grades, you may use whatever grading scale you like
You must use a switch statement (hint, you may need to review and think about how the switch statement works)*/




var grade = 50;
switch(true) {
  case grade <= 100 && grade >= 90:
    console.log("Nice you got an A ya nerd!");
    break;
  case grade <= 89 && grade >= 80:
    console.log("B is for better luck next time ya nerd");
    break;
  case grade <= 79 && grade >= 70:
    console.log("C is for cookie");
    break;
    case grade <= 69 && grade >= 60:
    console.log("no D you failed");
    break;
    case grade <= 59 && grade >= 40:
    console.log("don't quit your day job");
    break;
  default:
    console.log("no");
    break;
   }