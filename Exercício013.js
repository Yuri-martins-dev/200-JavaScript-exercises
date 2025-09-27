// Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.
alert("Vamos descobrir a altura de uma pessoa, para isso, siga as instruções a seguir.");

let altura = prompt("Digite a altura da pessoa. Ex.:1,82.");
altura = altura.replace(",",".");
while (isNaN(altura)) {
    altura = prompt("Digite apenas números por favor.");
}
altura = Number(altura);

let peso = Number(prompt("Digite o peso da pessoa em quilogramas. Ex.:1,82."));
while (isNaN(peso)) {
    peso = Number(prompt("Digite apenas números por favor."))
}

imc = peso / altura ** 2;

if (imc < 18.5) {
    alert("A pessoa está abaixo do peso.");
} else if (imc >= 18.5 && imc < 25) {
    alert("A pessoa está saudável. ");
} else if (imc >= 25 && imc <30) {
    alert("A pessoa está com sobrepeso.");
} else {
    alert("A pesssoa está com obesidade");
}