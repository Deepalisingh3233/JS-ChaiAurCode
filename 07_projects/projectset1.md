# Projects related to DOM

## Project Link 

[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-mcj2fpjn?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.cssl)

# Solution code

## Project 1 - Color Changer

```JavaScript
console.log("Deepali")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      body.style.color = '#fff';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      body.style.color = '#fff';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      body.style.color = '#000';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      body.style.color = '#000';
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
      body.style.color = '#fff';
    }
  });
});


```
## Project 2 - BMI Calculator

```JavaScript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const resultGuide = document.querySelector('#result-guide');
  const results = document.querySelector('#results');
  let bmi = 0;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span> ${bmi} </span>`;
  }

  console.log(bmi);
  if (bmi < 18.6) {
    resultGuide.innerHTML = `<span> Under Weight </span>`;
  } else if (bmi >= 18.6 && bmi < 24.9) {
    resultGuide.innerHTML = `<span> Normal Range </span>`;
  } else if(bmi > 24.9){
    resultGuide.innerHTML = `<span> Overweight </span>`;
  }
});

```

## Project 3 - Digital Clock

``` JavaScript 

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
//   clock.innerHTML = date.toLocaleTimeString();
  clock.innerHTML = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}, 1000);

```

## Project 3 - Guess a Number

``` JavaScript 
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainig = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter the number greater than 1');
  } else if (guess > 100) {
    alert('Please enter the number less than 100');
  } else {
    preGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You gussed right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remainig.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainig.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```