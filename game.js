//program that guesses how many hours you've been alive
// (function() {
 
  var hourGuess = '';
  var promptText = 'Guess how many hours you\'ve been alive in 5 guesses!';
  var thanks = 'Thanks for nothing you jabroni';

  function Player(age, name){
    this.age = age;
    this.name = name;
    this.guesses = 5;
    this.guessesUsed = 0;
    this.score=0;
    this.answer = function(){
      return this.age * 8760;
  };
    this.guessesLeft = function() {
      return this.guesses + this.guessesUsed;
    };
  };
  // window.playerOne = new Player();
  // playerOne.name = nameInput;

  var gameOverFunction = function(){
    alert(thanks);
    return;
  };

  var withinTenFunction = function(){
    playerOne.guessesUsed += 3;
    playerOne.score +=4
    promptText = "Close, you are within 10 hours, you get 3 more guesses. You have " + playerOne.guessesLeft() + ' guesses left '  + playerOne.name + " !";
  };

  var withinOneHundredFunction = function(){
    playerOne.guessesUsed += 2;
    playerOne.score += 3
    promptText = 'You are within one hundred hours, you get 2 more guesses. You have ' + playerOne.guessesLeft() + ' guesses left!';
  };

  var withinOneThousandFunction = function() {
    playerOne.guessesUsed += 1;
    playerOne.score += 2
    promptText = 'You are within one thousand hours, you get 1 more guess. You have ' + playerOne.guessesLeft() + ' guesses left'  + playerOne.name + " !";
  };

  var tooHighFunction = function () {
    playerOne.guessesUsed -= 1;
    promptText = 'You guessed too high, guess lower. You have ' + playerOne.guessesLeft() + ' guesses left'  + playerOne.name + " !";
  };

  var tooLowFunction = function () {
    playerOne.guessesUsed -= 1;
    promptText = 'You guessed too low, guess higher. You have ' + playerOne.guessesLeft() + ' guesses left'  + playerOne.name + " !";
  };
  var lowScore = function() {
    alert(playerOne.name + ' , You lost, the answer was ' + playerOne.answer() + ' hours. Your prize is an A for effort. Refresh the page to play again!');
  };

  var bronzeMetal = function() {
    alert(playerOne.name + ' , You lost, but you were getting closer! your prize is a bronze star, If this was the Olympics, you made the podium!')
  }
  var silverMetal = function () {
    alert(playerOne.name + ' , You lost, but you were so close! You get a silver star, unfortunately, like Ricky Bobby famously said "If you\'re not First, your Last"')
  }
  var goldMetal = function () {
    alert(playerOne.name + ' , You lost! but you were sooooo close, you get a Gold Star for your Efforts, Refresh to play again and earn the grand prize!')
  }
  var youWon = function() {
    alert('Congratulations ' + playerOne.name + ' You guessed right! You get a Platinum star!!!!! It has no value but hey, at least all of your time wasn\'t wasted while playing this stupid game!');
  }


  
  // })();
var button = document.getElementById('button');

function userSubmit() {
  var myName = document.getElementById('myName').value;
  var age = document.getElementById('age').value;
  var guess = document.getElementById('guess').value;

  var playerOne = new Player(age, myName);

  if(playerOne.name===null){
    alert(thanks);
    // return;
  } else if (isNaN(playerOne.name)===false){
    alert('That\'s not a name')
  }

  // playerOne.age = age;

  if (age===null) {
    alert(thanks);
    // return;
  }

  while (hourGuess !== playerOne.answer()) {
    hourGuess = prompt(promptText);
    if (hourGuess === null) {
      gameOverFunction();
      // return;
        // console.log(playerOne.answer());
    }
    if (Math.abs(hourGuess - playerOne.answer()) <= 10) {
      withinTenFunction();
      } else if (Math.abs(hourGuess - playerOne.answer()) <= 100) {
          withinOneHundredFunction();
      } else if (Math.abs(hourGuess - playerOne.answer()) <= 1000) {
          withinOneThousandFunction();
      } else if (hourGuess > playerOne.answer()){
        tooHighFunction();
      } else if (hourGuess < playerOne.answer()) {
        tooLowFunction();
      }

    if (playerOne.guessesLeft() <= 0 && playerOne.score === 0) {
      lowScore();
       // return;
    } else if (playerOne.guessesLeft() <=0 && playerOne.score === 2) {
        bronzeMetal();
        // return;
    } else if (playerOne.guessesLeft() <=0 && playerOne.score === 3) {
        silverMetal();
        // return;
    } else if (playerOne.guessesLeft()<=0 && playerOne.score > 3) {
        goldMetal();
        // return;
      }

    if (hourGuess == playerOne.answer()) {
      youWon();
      // return;
    }
  }
}

button.addEventListener('click', userSubmit);



