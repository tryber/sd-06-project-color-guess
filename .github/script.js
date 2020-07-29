// criando os números aleatórios da cor que deverá ser adivinhada
    let first = Math.round(Math.random() * 255);
    let second = Math.round(Math.random() * 255);
    let third = Math.round(Math.random() * 255);
    let color = ("rgb(" + ([first, second, third].toString())) + (')');
    let guess = ("(" + ([first, second, third].toString())) + (')');
// adicionando texto da color no h2
    let guessTheColor = document.querySelector("#rgb-color")
    // guessTheColor.innerHTML = guess

 