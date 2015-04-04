//program that guesses how many hours you've been alive

   var nameInput = document.getElementById('name').value;
   var ageInput = document.getElementById('age').value;
   var guessInput = document.getElementById('guess').value;
   var submitButton = document.getElementById('submit');

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
  // window.playerOne = new Player();

function userSubmit () {

    var playerOne = new Player(nameInput, ageInput, guessInput);
        if (Math.abs(guessInput - playerOne.answer()<=10)) {
          playerOne.guesses += 3;
          var howClose = document.getElementById("within_10");
     }
  else if (Math.abs(guessInput - playerOne.answer()<=100)) {
          playerOne.guesses += 2;
          document.getElementById("within_10");
      } else if (Math.abs(guessInput - playerOne.answer()<=1000)) {
          playerOne.guesses += 1;
          document.getElementById("within_10");
      } else if(guessInput < playerOne.answer()) {
          playerOne.guesses -= 1;
          document.getElementById('within_10');
      } else if(guessInput > playerOne.answer()) {
          playerOne.guesses -=1;
          document.getElementById('within_10');
      }
    if (playerOne.guessesLeft()===0) {
        document.getElementById('within_10');
    }
    if (playerOne.guess === playerOne.answer()) {
     var write = document.getElementById("within_10");
     write.textContent('fuck you');

    }
  }

//}


