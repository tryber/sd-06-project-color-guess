window.onload = function(){
    let bola = document.querySelectorAll(".ball");
    let bolas = document.querySelector(".bolas");
    let gerada = document.querySelector("#rgb-color")
    let answer = document.querySelector("#answer")
let reset = document.querySelector("#reset-game");
    gerada.innerText = "rgb("+ (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + Math.floor(Math.random() * 256) + ")" ;


    for(let i = 0; i < bola.length; i++){
        bola[i].style.backgroundColor = "rgb("+ (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + Math.floor(Math.random() * 256) + ")" ;
    }


    bolas.addEventListener("click", function(event){
       var corSelect = event.target.style.backgroundColor
       if(corSelect == gerada){
        answer.innerText = "Acertou!";
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

    })



}