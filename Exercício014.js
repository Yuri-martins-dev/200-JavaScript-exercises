//Escreva um programa que verifica se um ano é bissexto.
let ano = prompt("Digite um ano para verificar se ele é bissexto:");
while (isNaN(ano)) {
    ano = Number(prompt("Digite apenas números por favor."));
}
bissexto = ano % 4 === 0

if (ano % 4 === 0 && !(ano % 100 === 0) || ano % 400 === 0) {
    alert("O ano " + ano + " é bissexto.");
} else {
    alert("O ano " + ano + " não é bissexto.")
}