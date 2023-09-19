// Array of dice images
var diceImages = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png"
];

// Generate random numbers for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the left and right dice images
var leftDiceImage = document.querySelector(".img1");
var rightDiceImage = document.querySelector(".img2");

// Set the src attribute of the left dice image to a random image
leftDiceImage.setAttribute("src", "images/" + diceImages[randomNumber1 - 1]);

// Set the src attribute of the right dice image to a random image
rightDiceImage.setAttribute("src", "images/" + diceImages[randomNumber2 - 1]);

// Select the h1 element
var heading = document.querySelector("h1");

// Determine the winner or if it's a draw and update the heading text
if (randomNumber1 > randomNumber2) {
  heading.textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.textContent = "Player 2 Wins!";
} else {
  heading.textContent = "It's a Draw!";
}
