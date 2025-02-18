const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch(e.target.id){
        case "grey": 
            body.style.backgroundColor = e.target.id;
            body.style.color = '#fff';
            break;
        case "blue": 
            body.style.backgroundColor = e.target.id;
            body.style.color = '#fff';
            break;
        case "white": 
            body.style.backgroundColor = e.target.id;
            body.style.color = '#000';
            break;
        case "yellow": 
            body.style.backgroundColor = e.target.id;
            body.style.color = '#000';
            break;
        case "purple": 
            body.style.backgroundColor = e.target.id;
            body.style.color = '#fff';
            break;
    }
  });
});
