const loadAnswer = document.getElementById("answer");
function funcLoadAnswer(){
    loadAnswer.style.marginLeft = '200px';
    loadAnswer.style.marginTop = '20px';
    loadAnswer.innerText = 'Escolha uma cor';
}

const getBallsClass = document.querySelectorAll('.ball');

window.onload = function(){
    funcLoadAnswer()
}
