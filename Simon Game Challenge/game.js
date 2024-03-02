const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

// Function to play sound in every action
const playSound = (name) => {
   let audio = new Audio(`../sounds/${name}.mp3`);
   audio.play();
}

// Buttons animation when pressed
const animatePress = (currentColour) => {
   $(`.${currentColour}`).addClass("pressed");
   setTimeout(() => {
      $(`.${currentColour}`).removeClass("pressed")
   }, 100);
}

// The game itself function every level
const nextSequence = () => {
   userClickedPattern = []
   let randomNumber =  Math.floor((Math.random() * 4));
   let randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
   level++;
   $("h1").text(`Level ${level}`);
}

//Handler to capture player clicks and store the answers to compare later.
$(".btn").on("click", (event) => {
   let userChosenColour = event.currentTarget.id;
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.indexOf(event.currentTarget.id));
})

//Checking if player is pressing the right button
const checkAnswer = (currentLevel) => {
   if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
     if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
         nextSequence()}, 1000) 
      }
   } else {
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(() => {$("body").removeClass("game-over")},200);
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
   }
}

const startOver = () => {
   level = 0;
   gamePattern = [];
   started = false;
}


$(document).on("keydown",() => {
   if(!started) {
      nextSequence();
      started = true;
   }
});