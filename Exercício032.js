// Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.
alert("Vamos jogar pedra, papel, tesoura.")
let escolha = prompt("Digite uma das seguintes opções: pedra, papel, tesoura.")
escolha.toLowerCase()
while (escolha !== "pedra" || "papel" ||  "tesoura") {
    escolha = prompt("Digite apenas umas das opções a seguir: pedra, papel, ou tesoura.")
}