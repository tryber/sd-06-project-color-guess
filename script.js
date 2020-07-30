window.onclick = function() {
    //if (event.target.backgroundColor === 
}
function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++ ) {
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}
for(let i = 1; i < 7; i++) {
    let divCor = document.createElement("div");
    divCor.className = "ball";
    divCor.style.backgroundColor = gera_cor();
    document.querySelector("#container-balls").appendChild(divCor);    
}
