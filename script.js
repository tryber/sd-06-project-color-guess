window.onload = function() {
    
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
    
    //Generate a random number from 0 to 5.
    function randomNumber(max) {
        return (Math.floor(Math.random()*Math.floor(max)));
    }
    randomNumber(6);
    console.log(randomNumber(6));
    
    //Generate the balls' color, and define the correct answer
    let balls = document.querySelectorAll('.ball');
    
    function rgbColorBall() {
        for (let index = 0; index < balls.length; index += 1) {
            if (index === randomNumber(6)) {
                balls[index].classList.add('correct-answer');
                let rgbCorrectAnswer = rgbColor.innerHTML;
                balls[index].style.backgroundColor = rgbCorrectAnswer;
            } else {
            let rgb = generateColor();
            balls[index].style.backgroundColor = rgb;
            }
        }
    }
    rgbColorBall();
}

//Ask the user to select a ball
let gameText = document.createElement('p');
gameText.id = 'answer';
let divGameText = document.querySelector('.game-text')
divGameText.appendChild(gameText);
for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', function(event) {
        //let rgbCorrectAnswer = rgbColor.innerHTML;
        let UserAnswer = event.target.style.backgroundColor;
        
        if (event.target.className === 'ball correct-answer') {
            gameText.innerHTML = 'Acertou!';
        } else {
            gameText.innerHTML = 'Errou! Tente novamente';
        }
    })
}

//Reset the game
const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', function() {
    rgbColor.innerHTML = generateColor();
    rgbColorBall();
    gameText.innerHTML = '';
})
