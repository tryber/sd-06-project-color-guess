const loadAnswer = document.getElementById("answer");
function funcLoadAnswer(){
    loadAnswer.style.marginLeft = '200px';
    loadAnswer.style.marginTop = '20px';
    loadAnswer.innerText = 'Escolha uma cor';
}

window.onload = function(){
    funcLoadAnswer()
}
