let rgbColor = document.getElementById('rgb-color');
let fatherDiv = document.getElementById('container');
let answerText = document.getElementById('answer');
let btnResetGame = document.getElementById('reset-game');
let score = document.getElementById('score');
let randomColor = document.querySelectorAll('.ball');
let colorOfTheRound = generateRandomColor();
let randomNumber = Math.ceil(Math.random()*randomColor.length);
let isOk = false;



//window.onload = initialLoad;
//initialLoad();

//Gerar as cores
//function initialLoad() {
   
    rgbColor.innerText = colorOfTheRound.split('rgb').pop(0);
    answerText.innerText = "Escolha uma cor!";
    score.innerText=localStorage.getItem('Placar');

    for (let x = 0 ; x < randomColor.length ; x += 1){
        if (randomColor[x].className === 'ball'){
            if (x === randomNumber){
                randomColor[x].style.backgroundColor = colorOfTheRound;
                randomColor[x].style.border = "0px solid purple";
            } else {
                randomColor[x].style.backgroundColor = generateRandomColor();
                randomColor[x].style.border = "0px solid purple";
            }
        }
    }



fatherDiv.addEventListener('click',checkIfIsCorrect);


function checkIfIsCorrect(event){
    if(isOk === false){
        isOk = true;
        let scoreBoard = parseInt(localStorage.getItem('Placar'));

        event.target.style.border = "5px solid purple";
        let removingSpace = event.target.style.backgroundColor.replace(/ /g,'');
        if ((event.target.className === 'ball') && (removingSpace === colorOfTheRound)){
            answerText.innerText = "Acertou! Novas cores";
            scoreBoard+=1;
            score.innerText=scoreBoard;
            localStorage.setItem('Placar',scoreBoard);
        } else {
            answerText.innerText = "Errou! Tente novamente";
        } 
    }
}

btnResetGame.addEventListener('click',resetGame);

function resetGame(){
    document.location.reload(true);
}

function generateRandomColor() {
    let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}