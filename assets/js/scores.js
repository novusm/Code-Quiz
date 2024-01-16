// scores.js

const highscoresList = document.getElementById("highscores");
const clearButton = document.getElementById("clear");

// Function to display high scores
function displayHighScores() {
  // Clear any existing scores
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

// Event listener to display high scores
window.addEventListener("load", displayHighScores);

// Event listener to clear high scores
clearButton.addEventListener("click", () => {
  // Clear high scores from local storage
  localStorage.removeItem("highScores");
  // Clear the displayed high scores
  highscoresList.innerHTML = "";
});
