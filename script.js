window.onload = function () {

  coloringCircles();
  const ballsPalette = document.querySelector('#balls');

  function randomNumbers() {
    return Math.floor(Math.random() * 255)
  }

  function generatorRandomColors() {
    let generatedRgb = '(' + randomNumbers() + ", " + randomNumbers() + ", " + randomNumbers() + ')';
    return generatedRgb;
  }
  
  function coloringCircles() {
    const circles = document.getElementsByClassName('ball');
    const guessing = document.getElementById('rgb-color')
    for (let i = 0; i < circles.length; i += 1) {
      circles[i].style.backgroundColor = 'rgb'+generatorRandomColors();
      guessing.innerHTML = generatorRandomColors();
    }
  }
  const resetButton = document.getElementById('reset-game');
  resetButton.addEventListener('click', coloringCircles);
}

// Clicar e pegar a cor

function chooseBall(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  let selectedColor = document.querySelector('.selected').style.backgroundColor;
  console.log(selectedColor)
}

ballsPalette.addEventListener('click', chooseBall);





