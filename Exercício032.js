alert("Vamos jogar pedra, papel, tesoura.");

let escolha; // declaramos antes do laço

do {
  escolha = prompt("Digite uma das seguintes opções: pedra, papel ou tesoura.");
  escolha = escolha.toLowerCase() // garante minúsculas
} while (escolha !== "pedra" && escolha !== "papel" && escolha !== "tesoura");