// Escreva um programa que determina o número de dias em um mês.
const mesesValidos = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let bissexto 


let ano = prompt("Primeiramente, digite numericamente um ano");
while (isNaN(ano)) {
    ano = Number(prompt("Digite apenas números por favor."));
}
if (ano % 4 === 0 && !(ano % 100 === 0) || ano % 400 === 0) {
    bissexto = true
} else {
    bissexto = false
}

function perguntarMes() {
    let mes = prompt("Digite o nome de um mês para descobrir quantos dias ele tem.");
while (mes.match(/[0-9]/) || !mesesValidos.includes(mes)) {
    mes = prompt("Digite um mês válido, sem usar números");
 }
 return mes
}
let nomeMes = perguntarMes().toLowerCase()

if (bissexto && nomeMes === "fevereiro") {
    alert("Este mês tem 29 dias.");
} else {
    switch (nomeMes) {
        case "fevereiro":
            alert("Este mês tem 28 dias.");
            break;
        case "abril":
        case "junho":
        case "setembro":
        case "novembro":
            alert("Este mês tem 30 dias.");
            break;
        case "janeiro":
        case "março":
        case "maio":
        case "julho":
        case "agosto":
        case "outubro":
        case "dezembro":
            alert("Este mês tem 31 dias.");
            break;
    }
}