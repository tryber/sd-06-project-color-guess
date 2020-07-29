window.onload = function() {

    let rgb = [];
    
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
        }

        setBallsColor();

    }

    starting();

    let restart = document.querySelector("#reset-game");
    restart.addEventListener("click", starting)
    
}