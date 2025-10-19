// Escreva um programa que verifica as cores de um semáforo.
function perguntarCor() {
    cor = prompt("Digite uma cor do semáforo para descobrir seu significado!");
    while (cor.match(/[0-9]/)) {
        cor = prompt("Digite uma entrada válida, sem conter números");
    }
  return cor
}
let nomeCor = perguntarCor().toLowerCase()

function verificarCor() {
    if (cor === "verde") {
        alert("Siga em frente");
    } else if (cor === "amarelo") {
        alert("Diminua a velocidade.");
    } else if (cor === "vermelho") {
        alert("Pare o Veículo.");
    } else {
        alert("Entrada Inválida")
    }
}
verificarCor()