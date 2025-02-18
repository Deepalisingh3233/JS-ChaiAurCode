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