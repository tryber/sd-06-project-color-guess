let numScore = 0;
if (JSON.parse(localStorage.valor !== undefined)){

  numScore = parseInt(localStorage.getItem('valor'));      
}

console.log(numScore);
if (numScore === NaN){
   numScore = 0;
}

const rgbText = document.querySelector('#rgb-color');
rgbText.innerHTML = generateRandomColor();
const ballsContainer = document.querySelector('.balls-container');
const displayScore = document.querySelector('#score');
displayScore.innerHTML = numScore;

function generateRandomColor(){
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  const generateColor = `(${red}, ${blue}, ${green})`;

  return generateColor;
}

function generateBalls(){
  const randomNum = Math.floor(Math.random() * 6);
  //console.log(randomNum);
  for (let i = 0 ; i < 6 ; i += 1){
    let divBall = document.createElement('div');
    divBall.classList.add('ball');
    if (i === randomNum){
      divBall.style.backgroundColor = `rgb${rgbText.innerHTML}`;
    }else {
      divBall.style.backgroundColor = `rgb${generateRandomColor()}`;
    }
    ballsContainer.appendChild(divBall);

  }

}
generateBalls();

ballsContainer.addEventListener('click', function(event){
  const clickedBall = event.target;
  let answerText = document.querySelector('#answer');
  if (clickedBall.style.backgroundColor == `rgb${rgbText.innerHTML}`){
    answerText.innerHTML = "Acertou!";
    numScore += 3;
    displayScore.innerHTML = numScore;
    //console.log(numScore);
    localStorage.setItem('valor', numScore);
    //document.location.reload();
  }else {
    answerText.innerHTML = "Errou! Tente novamente!";
  }
});

const resetButton = document.querySelector('#reset-game');
resetButton.addEventListener('click', function(){
  document.location.reload();
});



