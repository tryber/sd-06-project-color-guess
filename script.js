const loadAnswer = document.getElementById('answer');
function funcLoadAnswer() {
  loadAnswer.style.marginLeft = '200px';
  loadAnswer.style.marginTop = '20px';
  loadAnswer.innerText = 'Escolha uma cor';
}

//gera numero aleatorio
function makeRandomNumber(){
  return Math.ceil(Math.random()*255);
}

//gera rgb
function makeRandomColor(){
  const R = makeRandomNumber();
  const G = makeRandomNumber();
  const B = makeRandomNumber();
  const RGB = `rgb(${R}, ${G}, ${B})`;
  return RGB;
}

//retorna rgb
const colored = makeRandomColor(makeRandomNumber);
const colored2 = makeRandomColor(makeRandomNumber);
const colored3 = makeRandomColor(makeRandomNumber);
const colored4 = makeRandomColor(makeRandomNumber);
const colored5 = makeRandomColor(makeRandomNumber);
const colored6 = makeRandomColor(makeRandomNumber);

//testa bola colorida
const ball1 = document.querySelector('#ball-1');
ball1.style.backgroundColor = colored;

const ball2 = document.querySelector('#ball-2');
ball2.style.backgroundColor = colored2;

const ball3 = document.querySelector('#ball-3');
ball3.style.backgroundColor = colored3;

const ball4 = document.querySelector('#ball-4');
ball4.style.backgroundColor = colored4;

const ball5 = document.querySelector('#ball-5');
ball5.style.backgroundColor = colored5;

const ball6 = document.querySelector('#ball-6');
ball6.style.backgroundColor = colored6;

//captura valor rgb
const captureBall1 = ball1.style.backgroundColor;
const captureBall2 = ball2.style.backgroundColor;
const captureBall3 = ball3.style.backgroundColor;
const captureBall4 = ball4.style.backgroundColor;
const captureBall5 = ball5.style.backgroundColor;
const captureBall6 = ball6.style.backgroundColor;

//funcao rbg gerado
function getRGBcolor(){
  if (Math.ceil(Math.random()*6) === 1)
    return captureBall1;
  else if(Math.ceil(Math.random()*6 === 2))
    return captureBall2;
  else if(Math.ceil(Math.random()*6 === 3))
    return captureBall3;
  else if(Math.ceil(Math.random()*6 === 4))
    return captureBall4;
  else if(Math.ceil(Math.random()*6 === 5))
    return captureBall5;
  else
    return captureBall6;
}

//insere rgb na section
const insertRGBcolor = document.getElementById('rgb-color');
insertRGBcolor.innerHTML = getRGBcolor();

ball1.addEventListener('click', isThisCorrect);
function isThisCorrect(event) {
  if (captureBall1 === insertRGBcolor)
    loadAnswer.innerText = 'Acertou!'
  else (captureBall1 != insertRGBcolor)
    loadAnswer.innerText = 'Errou! Tente novamente!'
}

ball2.addEventListener('click', isThisCorrect);
function isThisCorrect(event) {
  if (captureBall2 == insertRGBcolor)
    loadAnswer.innerText = 'Acertou!'
  else (captureBall2 != insertRGBcolor)
    loadAnswer.innerText = 'Errou! Tente novamente'
}

ball3.addEventListener('click', isThisCorrect);
function isThisCorrect(event) {
  if (captureBall3 == insertRGBcolor)
    loadAnswer.innerText = 'Acertou!'
  else (captureBall3 != insertRGBcolor)
    loadAnswer.innerText = 'Errou! Tente novamente'
}

ball4.addEventListener('click', isThisCorrect);
function isThisCorrect(event) {
  if (captureBall4 == insertRGBcolor)
    loadAnswer.innerText = 'Acertou!'
  else (captureBall4 != insertRGBcolor)
    loadAnswer.innerText = 'Errou! Tente novamente'
}

ball5.addEventListener('click', isThisCorrect);
function isThisCorrect(event) {
  if (captureBall5 == insertRGBcolor)
    loadAnswer.innerText = 'Acertou!'
  else (captureBall5 != insertRGBcolor)
    loadAnswer.innerText = 'Errou! Tente novamente'
}

ball6.addEventListener('click', isThisCorrect);
function isThisCorrect(event) {
  if (captureBall6 == insertRGBcolor)
    loadAnswer.innerText = 'Acertou!'
  else (captureBall6 != insertRGBcolor)
    loadAnswer.innerText = 'Errou! Tente novamente'
}
window.onload = function() {
  funcLoadAnswer();
};




