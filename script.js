function RandomGenerator8Bits() {
  const valores = [];
  const primeiroValor = Math.ceil(Math.random()*2);
  for (let i = 0; i < 3; i += 1) {
    if (i === 0) {
      valores.push(primeiroValor);
    }
    if (i >= 1) {
      const DemaisValores = Math.ceil(Math.random()*5);
      valores.push(DemaisValores);
    }
  }
  return (valores.join(''));
}

function generateRandomColorCode() {
  const parameters = [];
  for (let i = 0; i < 3; i += 1) {
    parameters.push(RandomGenerator8Bits());
  }
  const numero = parameters.join(',');
  return `(${numero})`;
}

function geraElementos(n) {
  for(i = 0; i < n; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball'
    const codigoCorGerada = generateRandomColorCode()

    ball.style.backgroundColor = `rgb${codigoCorGerada}`;
    document.getElementById('balls-container').appendChild(ball);

  }
}

function randomElementBackgroundColor() {
  const balls = document.querySelectorAll('.ball');
  const randomChoice = Math.ceil(Math.random()*(balls.length-1))
  for (let i = 0; i < balls.length; i += 1) {
    if (i === randomChoice) {
      const backgroundColor = balls[i].style.backgroundColor;
      document.getElementById('rgb-color').innerText += ` (${pegaNumeros(backgroundColor)})`;
      return `rgb(${backgroundColor})`
    }
  }
}

function pegaNumeros (element) {
  let newElement = [] ;
  for(let i in element) {
    if (Number(element[i]) === Number(element[i])  ) {
      newElement.push(element[i]);
    }
  }
  return  newElement.join('')
}

function comparaElementos(e,answer) {

  if (e.currentTarget.style.backgroundColor === answer) {
    document.getElementById('answer').innerText = 'Acertou'
  } else {
      document.getElementById('answer').innerText = 'Errou! Tente Novamente'
  }
}

geraElementos(6);
const balls = document.querySelectorAll('.ball');
const answer = randomElementBackgroundColor();
for (let i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', function (e) {
    comparaElementos(e,answer);
  })
}


