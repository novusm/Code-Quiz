// Select elements in HTML
const highscoresList = document.getElementById("highscores");
const clearButton = document.getElementById("clear");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

// Function to display high scores
function displayHighScores() {
  // Clear scores
  highscoresList.innerHTML = "";

  // Retrieve high scores from local storage
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Sort high scores in descending order
  highScores.sort((a, b) => b.score - a.score);

  // Display high scores in the list
  highScores.forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
    highscoresList.appendChild(listItem);
  });
}

// Event listener to display high scores when the page loads
window.addEventListener("load", displayHighScores);

// Event listener to clear high scores
clearButton.addEventListener("click", () => {

  localStorage.removeItem("highScores");
 
  highscoresList.innerHTML = "";
});

// Event listener to handle submitting initials and score
submitButton.addEventListener("click", () => {
  const initials = initialsInput.value.trim();
  const score = parseInt(localStorage.getItem("currentScore"));

  if (initials && !isNaN(score)) {
    // Create a new high score object
    const newHighScore = { initials, score };

    // Retrieve existing high scores or create an empty array
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Add the new high score to the array
    highScores.push(newHighScore);

    // Store the updated high scores in local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Clear the current score and initials input
    localStorage.removeItem("currentScore");
    initialsInput.value = "";

    // Display the updated high scores
    displayHighScores();
  }
});