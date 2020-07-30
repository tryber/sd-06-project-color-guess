//Create a random rgb color
let rgbColor = document.getElementById('rgb-color');
function generateColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    let colorResult = 'rgb(' + x + ',' + y + ',' + z + ')';
    
    return colorResult;
}
rgbColor.innerHTML = generateColor();

//Generate the balls' color, and define the correct answer
let balls = document.querySelectorAll('.ball');

function rgbColorBall() {
    const randomNumber = (Math.floor(Math.random())) * balls.length; //Generate a number between 0 and 5
    for (let index = 0; index < balls.length; index += 1) {
        if (index === randomNumber) {
            //let correctAnswer = rgbColor;
            //correctAnswer = 'rgb' + correctAnswer;
            let correctAnswer = balls[index].style.backgroundColor;
            console.log(correctAnswer);
        } else {
        let rgb = generateColor();
        balls[index].style.backgroundColor = rgb;
        }
    }
}
rgbColorBall();

//Ask the user to select a ball
let gameText = document.createElement('p');
gameText.id = 'answer';
let divGameText = document.querySelector('.game-text')
divGameText.appendChild(gameText);
for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', function(event) {
        let correctAnswer = rgbColor.innerHTML;
        let UserAnswer = event.target.style.backgroundColor;
        
        if (UserAnswer === correctAnswer) {
            gameText.innerHTML = 'Acertou!';
        } else {
            gameText.innerHTML = 'Errou! Tente novamente';
        }
    })
}
