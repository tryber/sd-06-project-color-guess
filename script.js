window.onload = function(){
    let bola = document.querySelectorAll(".ball");
    let bolas = document.querySelector(".bolas");
    let gerada = document.querySelector("#rgb-color")
    let answer = document.querySelector("#answer")

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



}