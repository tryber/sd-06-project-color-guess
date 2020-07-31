let randomColor0 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor1 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor2 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor3 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor4 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor5 = '#' + ((1<<24)*Math.random()|0).toString(16);
let balls = document.querySelectorAll('.ball');
balls[0].style.backgroundColor = randomColor0;
balls[1].style.backgroundColor = randomColor1;
balls[2].style.backgroundColor = randomColor2;
balls[3].style.backgroundColor = randomColor3;
balls[4].style.backgroundColor = randomColor4;
balls[5].style.backgroundColor = randomColor5;
function hexToRgb(randomColor4) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(randomColor4);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
let showColor = document.getElementById('rgb-color');
showColor.innerHTML = `(${hexToRgb(randomColor4).r}, ${hexToRgb(randomColor4).g}, ${hexToRgb(randomColor4).b})`;
let acertos =0;
function bolaCerta() {
    return document.getElementById('answer').innerHTML = 'Acertou!', document.getElementById('score').innerHTML = `Placar: ${acertos += 3}`;

}
balls[4].addEventListener('click', bolaCerta)
function bolaErrada() {
    return document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
}
balls[0].addEventListener('click', bolaErrada)
balls[1].addEventListener('click', bolaErrada)
balls[2].addEventListener('click', bolaErrada)
balls[3].addEventListener('click', bolaErrada)
balls[5].addEventListener('click', bolaErrada)
function reset() {
    let randomColor0 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor1 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor2 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor3 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor4 = '#' + ((1<<24)*Math.random()|0).toString(16);
let randomColor5 = '#' + ((1<<24)*Math.random()|0).toString(16);
let balls = document.querySelectorAll('.ball');
balls[0].style.backgroundColor = randomColor0;
balls[1].style.backgroundColor = randomColor1;
balls[2].style.backgroundColor = randomColor2;
balls[3].style.backgroundColor = randomColor3;
balls[4].style.backgroundColor = randomColor4;
balls[5].style.backgroundColor = randomColor5;
showColor.innerHTML = `(${hexToRgb(randomColor4).r}, ${hexToRgb(randomColor4).g}, ${hexToRgb(randomColor4).b})`;
document.getElementById('answer').innerHTML = 'Escolha uma cor';
}
let btn = document.getElementById('reset-game');
btn.addEventListener('click', reset)

