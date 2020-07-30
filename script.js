//Create a random rgb color
let randomColor = document.getElementById('rgb-color');
function generateColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    let colorResult = 'rgb(' + x + ',' + y + ',' + z + ')';
    randomColor.innerHTML = colorResult;
}
generateColor();
