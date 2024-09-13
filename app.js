let Numero1 = Math.floor(Math.random()* 101);
let userInput = 0;
let intentos = 0;
let salida = "BeyronssDev";


function playGame() {
    userInput = parseInt(document.getElementById("text1").value);

    if (userInput !== Numero1) {
        salida = `${userInput} no es el numero a adivinar, intenta otra vez`;
        intentos++;
    }

    if (userInput == Numero1) {
        salida = `${userInput} Haz adivinado el numero!!`;
        document.getElementById("display-numero").innerHTML = Numero1;
    }

    document.getElementById("display-resultado").innerHTML = `${salida}. Este es su intento número: ${intentos}.`;
    document.getElementById("text1").select();
}

function resetGame() {
    Numero1 = Math.floor(Math.random()* 101);
    document.getElementById("display-numero").innerHTML = "?";
    document.getElementById("display-resultado").innerHTML = "A jugar!!";
    document.getElementById("text1").focus();
}