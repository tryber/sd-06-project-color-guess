window.onload = function(){
    let bola = document.querySelectorAll(".ball");
    let bolas = document.querySelector(".bolas");
    let gerada = document.querySelector("#rgb-color")
    let answer = document.querySelector("#answer")
    let reset = document.querySelector("#reset-game");
    let score = document.querySelector("#score");
    let randonN = Math.floor(Math.random() * 6);
let scoreInt = 0;
    
    
    for(let i = 0; i < bola.length; i++){
        bola[i].style.backgroundColor = "rgb("+ (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + Math.floor(Math.random() * 256) + ")" ;
    }

  gerada.innerText = bola[randonN].style.backgroundColor


 

    bolas.addEventListener("click", function(event){
       var corSelect = event.target.style.backgroundColor
       if(corSelect == gerada.innerText){
        answer.innerHTML = "Acertou!";
        scoreInt += 3;
        score.innerText = scoreInt
       }else{
        answer.innerText = "Errou! Tente novamente!";
       }
    })





    reset.addEventListener("click", function(){
        for(let i = 0; i < bola.length; i++){
            bola[i].style.backgroundColor = "rgb("+ (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + Math.floor(Math.random() * 256) + ")" ;
        }
        answer.innerText = "Escolha uma cor";
        gerada.innerText = "rgb("+ (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + Math.floor(Math.random() * 256) + ")" ;
        let randonN = Math.floor(Math.random() * 6);
        gerada.innerText = bola[randonN].style.backgroundColor
    })



}