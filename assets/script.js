// access Start Quiz button from HTML
const startButton = document.querySelector("#start");
console.log(startButton);
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

// create variable objects for each question & possible answers
const questions = [
  {
    question: "The condition in an if/else statement is enclosed with ____",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly braces", correct: false },
      { text: "parentheses", correct: true },
      { text: "square brackets", correct: false },
    ],
  },
];
// click start button and activate startQuiz function(). Add event listener at bottom of file.
// first question pops up + timer begins

function startQuiz() {
  console.log("started");
  const welcomePage = document.getElementById("welcome-page");
  welcomePage.classList.remove("hide");
}

function showQuestion() {
  questionContainerElement.remove("welcome-page");
  const questionContainerElement =
    document.getElementById("question-container");
}

// after user answers question, if correct screen will say "correct" and move onto next question
// after user answers question, if incorrect screen will say "incorrect", move onto next qusestion, AND 10 seconds will subtract from timer

// when all questions are answered OR timer reaches 0, the game will end

// when game ends, user saves initials and score. User types in name and clicks submit

// user can see high scores saved

// user can then click "go back" to home page OR "clear high scores"

// Add event listener to activate Start Quiz button (startButton) by going into the startQuiz function
startButton.addEventListener("click", startQuiz);

startQuiz();
