// create variable to access Start Quiz button
var startButton = document.querySelector("#start");
console.log(startButton);

//create variable for question-container from HTML that includes question and answer choices/buttons
var questionContainerElement = document.getElementById("question-container");

// //create variables for 
// var questionElement = document.getElementById("question");
// var answerButtonsElement = document.getElementById("answer-buttons");


// create array of question objects for each question with answers choices & correct answer
const questions = [
  {
    question: "The condition in an if/else statement is enclosed with ____",
    choiceA: "quotes",
    choiceB: "curly braces",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correctChoice: "C",
  },

  {
    question: "String concatenation combines a string with a ______",
    choiceA: "variable",
    choiceB: "function",
    choiceC: "for loop",
    choiceD: "while loop",
    correctChoice: "A",
  },

  {
    question: "Which is NOT a conditional statement?",
    choiceA: "if",
    choiceB: "else",
    choiceC: "else if",
    choiceD: "if not",
    correctChoice: "D",
  },
  {
    question: "Arrays in JavaScript can be used to store ________",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correctChoice: "D",
  },

  {
    question:
      "In order to execute properly, a function must have an initial expression, a condition, an increment expression, and a ______",
    choiceA: "while loop",
    choiceB: "statement",
    choiceC: "pseudocode",
    choiceD: "console log",
    correctChoice: "B",
  },
];

// click start button and activate startQuiz function(). Add event listener at bottom of file.
// when button clicked, info on welcome page will go away, leaving the page blank and ready for the first question.
function startQuiz() {
  console.log("started");
  var welcomePage = document.getElementById("welcome-page");
  welcomePage.classList.add("hide");
  showQuestion();
}

// first question pops up + timer begins
// loop through all questions
// after user answers question, if correct screen will say "correct" and move onto next question
// after user answers question, if incorrect screen will say "incorrect", move onto next qusestion, AND 10 seconds will subtract from timer
function showQuestion() {
  var questionContainerElement = document.getElementById("question-container");
  questionContainerElement.classList.remove("hide");

  //create variables for each question object in the questions array to display and save answer user selects
  var questionOne = questions[0].question;
  console.log(questionOne);


  //check if the user's choice is equal to questions[0].correctChoice, and by that we can know if they got the right answer or not
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
  }
}

// when all questions are answered OR timer reaches 0, the game will end

// when game ends, user saves initials and score. User types in name and clicks submit

// user can see high scores saved

// user can then click "go back" to home page OR "clear high scores"

// Add event listener to activate Start Quiz button (startButton) by going into the startQuiz function
startButton.addEventListener("click", startQuiz);
