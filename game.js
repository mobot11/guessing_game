//program that guesses how many hours you've been alive



  function Player(name, age, guess){
    this.age = age;
    this.name = name;
    this.guess = guess;
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

// var addText = document.createElement('p');
// var getElement = document.getElementById("within_10")
// addText.innerHTML = 'Hello World';
// getElement.appendChild(addText);




function userSubmit () {
  var nameInput = document.getElementById('name').value;
  var ageInput = document.getElementById('age').value;
  var guessInput = document.getElementById('guess').value;
  window.submitButton = document.getElementById('submit');
  var gameResponse = document.getElementById("within_10");
  var addText = document.createElement('p');
  playerOne = new Player(nameInput, ageInput, guessInput);

    if (playerOne.guess == playerOne.answer()) {
     addText.innerHTML = 'You won';
     gameResponse.appendChild(addText);

    }
  if (Math.abs(guessInput - playerOne.answer()<=10)) {
      playerOne.guesses += 3;
      addText.innerHTML = 'You are within 10, you get three more guesses';
      gameResponse.appendChild(addText);
     }
  else if (Math.abs(guessInput - playerOne.answer()<=100)) {
          playerOne.guesses += 2;
        addText.innerHTML = 'You are within 100, you get two more guesses';
        gameResponse.appendChild(addText);
      } else if (Math.abs(guessInput - playerOne.answer()<=1000)) {
          playerOne.guesses += 1;
          addText.innerHTML = 'You are within 1000, you get one more guess';
          gameResponse.appendChild(addText);
      } else if(guessInput < playerOne.answer()) {
          playerOne.guesses -= 1;
          addText.innerHTML = 'That is too low, guess Higher';
          gameResponse.appendChild(addText);
      } else if(guessInput > playerOne.answer()) {
          playerOne.guesses -=1;
          addText.innerHTML = 'That is too high, guess lower';
          gameResponse.appendChild(addText);
      }
    if (playerOne.guessesLeft()===0) {
        addText.innerHTML = 'You lost';
        gameResponse.appendChild(addText);
    }

}
window.submit.addEventListener("onclick", userSubmit, false)
// //}


