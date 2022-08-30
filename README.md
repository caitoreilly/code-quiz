# code-quiz

---

The goal of this assignment was to create the HTML, CSS, and JS code for a timed quiz with five code-related questions. Each time the user answered incorrectly, ten seconds was deducted from the timer. The user's score was the time left on the timer. Click to access my code quiz webpage [here](https://github.com/caitoreilly/code-quiz.git).

## Description

---

When the start quiz button is clicked, the first question in the questions array comes on the screen. When the user clicks an answer button, the user is brought to the next question. If the answer was incorrect, ten seconds are deducted from the timer. Once all of the questions are answered, the quiz ends and the user can input their initials to save their initials & score. If the timer gets to zero, the quiz ends and the user can input their initials to save as well. I created a global highScores array to hold the scores of each user. It needs to be updated each time a user completes the quiz and then saved into local storage, which is what was accomplished in the saveScores function. Then in the updatedScores function, a list of high scores is presented to the user. The user can then click the "go back" button or the "clear scores" button in the nextSteps function.

### Technologies

---

My project was created with:

- CSS
- HTML
- JavaScript

#### Screenshot

---

This image represents the saved high scores in local storage and then printed to the webpage.

![Code Quiz](/assets/high-scores-image.png)

##### Sources

---

I used the following site to help me with [JSON stringify](https://www.w3schools.com/js/js_json_stringify.asp).

This site was built using [GitHub Pages](https://pages.github.com/).
