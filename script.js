let buttonReset = document.querySelector('#reset-game')
let textRgb = document.querySelector('#rgb-color');
let balls = document.querySelectorAll('.ball');
let answer = document.querySelector('#answer');

randomColor = () => {
    function c() {
        let hex = Math.floor(Math.random() * 256).toString(16);
        return ("0"+String(hex)).substr(-2);
    }
    for(let i = 0; i < balls.length; i++) {
        balls[i].style.backgroundColor = '#'+c()+c()+c();
    }
}

window.onload = randomColor();

buttonReset.addEventListener('click', randomColor)


aleatoryRgb = () => {
    for (let i = 0; i < balls.length; i++) {
        textRgb.innerHTML = balls[i].style.backgroundColor;
    }
}

window.onload = aleatoryRgb();
buttonReset.addEventListener('click', aleatoryRgb)
buttonReset.addEventListener('click', function() {
    answer.innerHTML = 'Escolha uma cor'
})

checkingColor = () => {
    for(let i = 0; i < balls.length; i++) {
        balls[i].addEventListener('click', function() {
            if(textRgb.innerHTML === balls[i].style.backgroundColor) {
                answer.innerText = "Acertou!"
            } else {
                answer.innerText = "Errou! Tente novamente!"
            }
        })
    }
}

checkingColor();

