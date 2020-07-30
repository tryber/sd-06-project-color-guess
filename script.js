//Create a random rgb color
let randomColor = document.getElementById('rgb-color');
function generateColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    let colorResult = 'rgb(' + x + ',' + y + ',' + z + ')';
    
    return colorResult;
}
randomColor.innerHTML = generateColor();

//Generate the balls' color
let balls = document.querySelectorAll('.balls');

function rgbColorBall() {
    const randomNumber = (Math.floor(Mat.random())) * balls.length; //Generate a number between 0 and 5
    for (let index = 0; index < balls.length; index += 1) {
        if (index === randomNumber) {
            let correctAnswer = randomColor;
            correctAnswer = 'rgb' + correctAnswer;
            balls[index].style.backgroundColor = correctAnswer;
        } else {
            let rgb = generateColor();
            balls[index].style.backgroundColor = rgb;
        }
    }
}

