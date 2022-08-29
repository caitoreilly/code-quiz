var scoreIdCounter = 0;

// create variable to access Start Quiz button
var startButton = document.querySelector("#start");
console.log(startButton);

//create variable for question-container from HTML that includes question and answer choices/buttons
var questionContainerElement = document.getElementById("question-container");

//create variable for question user must answer (that element in HTML where it says question)
var questionElement = document.getElementById("question");

//create variables for each individual button answer choice in "answer buttons" div. Gave id name to each in HTML.
var answerOneElement = document.getElementById("answer-one");
var answerTwoElement = document.getElementById("answer-two");
var answerThreeElement = document.getElementById("answer-three");
var answerFourElement = document.getElementById("answer-four");

// create variable for answer button answer choices div
var answerButtonsElement = document.getElementById("answer-buttons");

// create variable for question index - ongoing index we have to keep track of
var questionIndex;

//create variable for high score div in HTML
var highScoreElement = document.getElementById("high-score");

// create variable for question container div (which holds the question & answer choice buttons)
var questionContainerElement = document.getElementById("question-container");

//create timer variable (div for timer at top of page)
var timerElement = document.getElementById("time-remaining");

//create variable for next step div in HTML (this is for after user submits name/score when quiz ends)
var nextStepElement = document.getElementById("next-step");

//create variable for submit button at end of quiz
var submitButton = document.getElementById("submit");

//create variable for final score message before user types in initials to save
var finalScoreMessageElement = document.getElementById("final-score-message");

// create variable to save actual final score after quiz is over
var finalScoreElement = document.getElementById("final-score");

var finalUserScore;

//create variable for initials input
var initialsInput = document.getElementById("initials");

//create variable for go back button after user submits initials & can see high score page
var goBackButton = document.getElementById("go-back");

//create variable for clear high scores button after user submits initials & can see high score page
var clearScoresButton = document.getElementById("clear-scores");

//create variable for high scores list after user submits initials
var highScoresListElement = document.getElementById("high-scores-list");

// create array of question objects for each question with answers choices & correct answer
const questions = [
  {
    question: "The condition in an if/else statement is enclosed with ____",
    choiceA: "quotes",
    choiceB: "curly braces",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correctChoice: "parentheses",
  },

  {
    question: "String concatenation combines a string with a ______",
    choiceA: "variable",
    choiceB: "function",
    choiceC: "for loop",
    choiceD: "while loop",
    correctChoice: "variable",
  },

  {
    question: "Which is NOT a conditional statement?",
    choiceA: "if",
    choiceB: "else",
    choiceC: "else if",
    choiceD: "if not",
    correctChoice: "if not",
  },
  {
    question: "Arrays in JavaScript can be used to store ________",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correctChoice: "all of the above",
  },

  {
    question:
      "In order to execute properly, a function must have an initial expression, a condition, an increment expression, and a ______",
    choiceA: "while loop",
    choiceB: "statement",
    choiceC: "pseudocode",
    choiceD: "console log",
    correctChoice: "statement",
  },
];

// click start button and activate startQuiz function(). Add event listener at bottom of file.
// when button clicked, info on welcome page will go away, leaving the page blank and ready for the first question.
// timer will begin
function startQuiz() {
  console.log("started");
  var welcomePage = document.getElementById("welcome-page");
  welcomePage.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  // every time someone clicks start quiz button, it takes index down to 0
  questionIndex = 0;
  showQuestion();
  timerCountdown();
}

// first question pops up
function showQuestion() {
  //use variables for each question object (question AND answer choices) in the questions array to display
  questionElement.textContent = questions[questionIndex].question;
  answerOneElement.textContent = questions[questionIndex].choiceA;
  answerTwoElement.textContent = questions[questionIndex].choiceB;
  answerThreeElement.textContent = questions[questionIndex].choiceC;
  answerFourElement.textContent = questions[questionIndex].choiceD;
}

// set amount of time on the timer at beginning of quiz (global so that we can use it in checkAnswer to deduct 10 seconds for incorrect answer)
var timeLeft = 60;

// declare variable global so that we can access it in checkAnswer to stop timer when all questions are answered
var timeInterval;

function timerCountdown() {
  // setInterval() method used to call a function to be executed every 1000 milliseconds (aka every second)
  // if amount of time left is greater than 1, show the time left in the timer div in HTML & time decrements by one second at a time
  // otherwise once time runs out, make empty string so nothing shows for time, clearInterval method will stop timer & end game
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerElement.textContent = timeLeft;
      timeLeft--;
    } else {
      timerElement.textContent = "";
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

// goes through all 5 questions, going to a new question each time user clicks and answers previous question --> goes to the next one
// check if the user's choice is equal to correctChoice, and by that we can know if they got the right answer or not
// if correct screen will say "correct" and move onto next question
function checkAnswer(event) {
  console.log(event);
  if (event.target.className == "btn") {
    if (event.target.textContent == questions[questionIndex].correctChoice) {
      console.log("correct");
      //add the word correct on the screen
    } else {
      console.log("incorrect");
      timeLeft -= 10;
      //add the word incorrect on the screen & take away 10 seconds on timer
    }
    //if the questionIndex (number of questions) is greater than or equal to questions.length (which is 5), the game will end & timer will stop
    // final score will show
    //setAttribute to save final score (finalUserScore)
    questionIndex++;
    if (questionIndex >= questions.length) {
      endGame();
      clearInterval(timeInterval);
      finalScoreElement.textContent = finalUserScore;
    } else {
      showQuestion();
    }
  }
}

// when all questions are answered OR timer reaches 0, the game will end
// created div in HTML for high score & created variable for it. using it now here in the function.
// questions go away and high score div shows user what their high score is and gives input for user to type name and then click submit button
function endGame() {
  console.log("Game has ended");
  questionContainerElement.classList.add("hide");
  highScoreElement.classList.remove("hide");
  nextStepElement.classList.add("hide");
}

// create global variable to get data (hold scores)
var highScores = [];

// create global var object for stored user info
var userInfo;

// user types name in input box and submits by clicking submitButton & using event listener to send it to nextSteps function.
//this saves name & score

// create save scores function and "get" data aka scores from localStore
// this page comes after user submits initials, and the user can see high scores saved
// create object array userInfo to store user initials & save to localStorage
// then parse data (scores) into an array of objects.
// we parse b/c data is in a string, we need it back in an array of objects
var saveScores = function (event) {
  event.preventDefault();

  userInfo = {
    initials: initialsInput.value,
    finalScore: timeLeft,
  };

  // array variable is parsed - get value from highScores and then push (add) to userInfo
  // get past users scores & add current users to the list
  highScores = JSON.parse(localStorage.getItem("userInfo"));
  highScores.push(userInfo);

  // make new variable - converting data into readable string with stringify (pass in the object) & then save to localStorage
  // setItem (name/key, value) --> this sets the value
  var userInfoStr = JSON.stringify(highScores);
  localStorage.setItem("userInfo", userInfoStr);

  // to get object & use it, reverse the effect, make new variable and get object - still a string tho. So convert back into object with parse
  // convert string back into object

  // sort through the highScores array to show all of the users' scores & names -- run updateScores funtion for updated user scores/names
  console.log(highScores);

  for (var i = 0; i < highScores.length; i++) {
    console.log(highScores[i]);
    updateScores(highScores[i]);
  }

  updateScores();
};

//new function to create list items and then div to hold info & add to list
// run this function for every item in highScores array
var updateScores = function (user) {
  console.log(user);
  var listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.textContent = user.initials + user.finalScore;

  // create div to hold user info & score info
  var scoreListInfo = document.createElement("div");
  scoreListInfo.className = "score-list-info";
  scoreListInfo.innerHTML =
    "<h3 class='initials'>" +
    // userInfo.initialsInput.value +
    "</h3><span class='final-score'>" +
    // userInfo.finalScore +
    "</span>";

  // add entire item to list
  listItem.appendChild(scoreListInfo);
  finalScoreElement.appendChild(listItem);

  // nextSteps();
};

//add buttons for "go back" and "clear high scores" here - something w/ local storage?
function nextSteps() {
  highScoreElement.classList.add("hide");
  nextStepElement.classList.remove("hide");
}

var welcomeScreen = function () {
  welcomePage = document.getElementById("welcome-page");
  welcomePage.classList.remove("hide");
  questionContainerElement.classList.add("hide");
  highScoreElement.classList.add("hide");
  nextStepElement.classList.add("hide");
  timeLeft = 60;
};

// Add event listener to activate Start Quiz button (startButton) by going into the startQuiz function
startButton.addEventListener("click", startQuiz);

// Add event listener for answer buttons
answerButtonsElement.addEventListener("click", checkAnswer);

submitButton.addEventListener("click", saveScores);

// Add event listener to click "go back" to home page after quiz
goBackButton.addEventListener("click", welcomeScreen);

// Add event listener to  "clear high scores" after quiz
// clearScoresButton.addEventListener("click", "");
