//  Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.
let idadeString = prompt("Digite a idade de uma pessoa usando algarismos.");
let idadeNumero = Number(idadeString)
while (isNaN(idadeNumero) || idadeNumero < 0) {
    idade = Number(prompt("Por favor, digite uma entrafa válida."));
}

if (idadeNumero >= 18) {
    alert("Essa pessoa pode dirigir pois é maior de idade.")
} else {
alert("Essa pessoa não pode dirigir pois é menor de idade.")
}