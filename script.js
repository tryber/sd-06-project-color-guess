const valorR = Math.floor(Math.random()* 256);
const valorG = Math.floor(Math.random()* 256);
const valorB = Math.floor(Math.random()* 256);
const valorRGB = `rgb( ${valorR} , ${valorG} , ${valorB} )`;
console.log(valorRGB)

const valorParaAdivinhar = document.querySelector('#rgb-color');
valorParaAdivinhar.innerHTML = valorRGB.slice(3)
