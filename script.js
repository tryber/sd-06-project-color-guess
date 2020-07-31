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
        gameArea.appendChild(ball);
    }
}

window.onload = function () {
    generateBalls(4);
}