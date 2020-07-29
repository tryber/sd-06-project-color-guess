window.onload = function () {

  coloringCircles();

  function generatorRandomColors() {
    let randomGeneratorNumber = Math.floor(0x100000000) * Math.random();
    let formatatterRgb =  '('  + (randomGeneratorNumber & 255) + ', ' + (randomGeneratorNumber >> 8 & 255) + ', ' + (randomGeneratorNumber >> 16 & 255) + ')';
    return formatatterRgb
  }
  
  function coloringCircles() {
    const circles = document.getElementsByClassName('ball');
    const guessing = document.getElementById('rgb-color')
    for (let i = 0; i < circles.length; i += 1) {
      circles[i].style.backgroundColor = "rgb"+generatorRandomColors();
      guessing.innerHTML = generatorRandomColors();
    }
}
const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', coloringCircles);
}

