//Escreva um programa que determina a estação do ano com base no mês.

const mesesValidos = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

function perguntarMes() {
    let mes = prompt("Por favor, digite o nome de um mês para saber a qual estação pertence:");

while (mes.match(/[0-9]/) || !mesesValidos.includes(mes)) {
   mes = prompt("Digite apenas o nome do mês(sem números).")
   } 
  return mes;
}

let nomeMes = perguntarMes().toLowerCase()

function descobrirEstacao(nomeMes) {
   switch (nomeMes) {
    case "janeiro":
    case "fevereiro":
    case "dezembro":
        alert("Este mês faz parte do Verão.");
        break;
    case "setembro":
    case "outubro":
    case "novembro":
        alert("Este mês faz parte da Primavera.");
        break;
    case "março":
    case "abril":
    case "maio":
        alert("Este mês faz parte do outono.");
        break;
    case "junho":
    case "julho":
    case "agosto":
        alert("Este mês faz parte do Inverno.");
        break;
 }  
} 

descobrirEstacao(nomeMes)