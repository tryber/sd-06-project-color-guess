window.onload = function() {

    let rgb = [];
    let placar = 0;
    
    function generateColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        if (rgb.length !== 0){
            rgb = [];
        }
        rgb.push(r);
        rgb.push(g);
        rgb.push(b);
    }

    function setCorrectColor() {
        
        
    }

    generateColor();
    function starting() {
        let randomColor = document.querySelector("#rgb-color");
        randomColor.innerHTML = "(" + rgb + ")";

        function setBallsColor() {
            let getBalls = document.querySelectorAll(".ball");
            for (let i = 0; i < getBalls.length; i += 1){
                generateColor();
                let colorBall = "rgb(" + rgb + ")"
                getBalls[i].style.backgroundColor = colorBall;
            }
            let ballRandom = Math.floor(Math.random() * 6);
            let sortedColor = "rgb" + document.querySelector("#rgb-color").innerHTML;
            getBalls[ballRandom].style.backgroundColor = sortedColor;
        }

        setBallsColor();
        document.querySelector("#answer").innerHTML = "Escolha uma cor";
        document.querySelector("#score").innerHTML = "Placar: " + placar;
    }

    starting();

    let restart = document.querySelector("#reset-game");
    restart.addEventListener("click", starting)

    let ball01 = document.querySelector(".bola1");
    let ball02 = document.querySelector(".bola2");
    let ball03 = document.querySelector(".bola3");
    let ball04 = document.querySelector(".bola4");
    let ball05 = document.querySelector(".bola5");
    let ball06 = document.querySelector(".bola6");

    ball01.addEventListener("click", function() {
        let corBola = ball01.style.backgroundColor.replace(/\s/g, '')
        let corTexto = "rgb" + document.querySelector("#rgb-color").innerHTML;
        if (corBola !== corTexto){
            document.querySelector("#answer").innerHTML = "Errou! Tente novamente!";
        } else {
            document.querySelector("#answer").innerHTML = "Acertou!";
            placar += 3;
            document.querySelector("#score").innerHTML = "Placar: " + placar;
        }
    })

    ball02.addEventListener("click", function() {
        let corBola = ball02.style.backgroundColor.replace(/\s/g, '')
        let corTexto = "rgb" + document.querySelector("#rgb-color").innerHTML;
        if (corBola !== corTexto){
            document.querySelector("#answer").innerHTML = "Errou! Tente novamente!";
        } else {
            document.querySelector("#answer").innerHTML = "Acertou!";
            placar += 3;
            document.querySelector("#score").innerHTML = "Placar: " + placar;
        }
    })

    ball03.addEventListener("click", function() {
        let corBola = ball03.style.backgroundColor.replace(/\s/g, '')
        let corTexto = "rgb" + document.querySelector("#rgb-color").innerHTML;
        if (corBola !== corTexto){
            document.querySelector("#answer").innerHTML = "Errou! Tente novamente!";
        } else {
            document.querySelector("#answer").innerHTML = "Acertou!";
            placar += 3;
            document.querySelector("#score").innerHTML = "Placar: " + placar;
        }
    })

    ball04.addEventListener("click", function() {
        let corBola = ball04.style.backgroundColor.replace(/\s/g, '')
        let corTexto = "rgb" + document.querySelector("#rgb-color").innerHTML;
        if (corBola !== corTexto){
            document.querySelector("#answer").innerHTML = "Errou! Tente novamente!";
        } else {
            document.querySelector("#answer").innerHTML = "Acertou!";
            placar += 3;
            document.querySelector("#score").innerHTML = "Placar: " + placar;
        }
    })

    ball05.addEventListener("click", function() {
        let corBola = ball05.style.backgroundColor.replace(/\s/g, '')
        let corTexto = "rgb" + document.querySelector("#rgb-color").innerHTML;
        if (corBola !== corTexto){
            document.querySelector("#answer").innerHTML = "Errou! Tente novamente!";
        } else {
            document.querySelector("#answer").innerHTML = "Acertou!";
            placar += 3;
            document.querySelector("#score").innerHTML = "Placar: " + placar;
        }
    })

    ball06.addEventListener("click", function() {
        let corBola = ball06.style.backgroundColor.replace(/\s/g, '')
        let corTexto = "rgb" + document.querySelector("#rgb-color").innerHTML;
        if (corBola !== corTexto){
            document.querySelector("#answer").innerHTML = "Errou! Tente novamente!";
        } else {
            document.querySelector("#answer").innerHTML = "Acertou!";
            placar += 3;
            document.querySelector("#score").innerHTML = "Placar: " + placar;
        }
    })

    
}