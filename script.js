function verifyAnswer(event) {
    let color = event.target.style.backgroundColor;
    color = color.slice(3);
    console.log(color, document.getElementById('rgb-color').innerText)
    if (color !== document.getElementById('rgb-color').innerText) {
        document.getElementById('info').innerText = 'Errou! Tente novamente';
    } else {
        document.getElementById('info').innerText = 'Acertou!';
    }
}

function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

function generateBalls(numberOfBalls) {
    const gameArea = document.getElementById('game-area');
    for (ball = 0; ball < numberOfBalls; ball += 1) {
        const ball = document.createElement('div');
        const color = generateRandomColor();
        ball.classList.add('ball');
        ball.style.backgroundColor = color;
        ball.addEventListener('click', verifyAnswer);
        gameArea.appendChild(ball);
    }
}

function generateText(numberOfBalls) {
    const balls = document.getElementsByClassName('ball');
    const index = Math.floor(Math.random() * (numberOfBalls))
    let innerText = window.getComputedStyle(balls[index], null).getPropertyValue('background-color');
    innerText = innerText.slice(3);
    document.getElementById('rgb-color').innerText = innerText;
}

window.onload = function () {
    generateBalls(6);
    generateText(6);
}