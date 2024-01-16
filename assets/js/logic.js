const startButton = document.getElementById("start");
const questionContainer = document.getElementById("questions");
const timerElement = document.getElementById("time");

let currentQuestionIndex = 0;
let timeLeft = 60; // Set your desired timer duration in seconds

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  // Start the timer
  startTimer();
  // Display the first question
  showQuestion();
}

function startTimer() {
  const timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // End the quiz when the timer reaches 0
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  const questionTitle = document.getElementById("question-title");
  const choicesContainer = document.getElementById("choices");
  
  // Populate question and answer choices based on currentQuestionIndex
  questionTitle.textContent = questions[currentQuestionIndex].question;
  choicesContainer.innerHTML = "";

  // Loop through answer choices and create buttons
  questions[currentQuestionIndex].choices.forEach(function (choice) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    // Add event listener to check the answer when a choice is clicked
    choiceButton.addEventListener("click", checkAnswer);
    choicesContainer.appendChild(choiceButton);
  });
}

function checkAnswer(event) {
  // Compare the clicked choice with the correct answer
  const userChoice = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (userChoice === correctAnswer) {
    
  } else {

  }

  // Move to the next question
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {

    endQuiz();
  }
}

function endQuiz() {
}
