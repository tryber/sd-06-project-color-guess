const color = document.querySelector('#rgb-color');
function generateColor() {
  let first = Math.ceil((Math.random()) * 255);
  let second = Math.ceil((Math.random()) * 255);
  let third = Math.ceil((Math.random()) * 255);

  color.innerHTML = '(' + first + ', ' + second + ', ' + third + ')';
}

generateColor();