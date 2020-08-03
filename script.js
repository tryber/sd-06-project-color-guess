window.onload = function () {
  function geraCores() {
    const valorR = Math.floor(Math.random() * 256);
    const valorG = Math.floor(Math.random() * 256);
    const valorB = Math.floor(Math.random() * 256);

    return `rgb(${valorR}, ${valorG}, ${valorB})`;
  }

  const arrayDeCores = [];
  for (let indice = 0; indice < 6; indice += 1) {
    arrayDeCores.push(geraCores());
  }

  const valorParaAdivinhar = document.querySelector('#rgb-color');
  const numeroIndice = Math.floor(Math.random() * 6);
  valorParaAdivinhar.innerText = arrayDeCores[numeroIndice].slice(3);

  const respostaCor = document.querySelector('#answer');
  respostaCor.innerHTML = 'Escolha uma cor';

  const itensDeCores = document.getElementById('itensDeCores');
  for (let ordem = 0; ordem < 6; ordem += 1) {
    const circuloDeCores = document.createElement('li');
    circuloDeCores.className = 'ball';
    circuloDeCores.style.backgroundColor = arrayDeCores[ordem];
    circuloDeCores.addEventListener('click', function () {
      if (this.style.backgroundColor === arrayDeCores[numeroIndice]) {
        respostaCor.innerHTML = 'Acertou!';
      } else {
        respostaCor.innerHTML = 'Errou! Tente novamente!';
      }
    });
    itensDeCores.appendChild(circuloDeCores);
  }
};
