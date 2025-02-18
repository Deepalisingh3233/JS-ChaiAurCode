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
