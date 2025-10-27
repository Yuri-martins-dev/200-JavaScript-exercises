// Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.
let minimo = 1;
let maximo = 100;
let acertou = false;

alert("Pense em um número entre 1 e 100. Eu vou tentar adivinhar!");

while (!acertou) {
    let palpite = Math.floor((minimo + maximo) / 2);
    let resposta = prompt(`O número é ${palpite}? (responda: "maior", "menor" ou "sim")`);

    if (resposta === "sim") {
        alert(`Acertei! O número é ${palpite}! 😎`);
        acertou = true;
    } else if (resposta === "maior") {
        minimo = palpite + 1;
    } else if (resposta === "menor") {
        maximo = palpite - 1;
    } else {
        alert('Responda apenas com "maior", "menor" ou "sim".');
    }
}
