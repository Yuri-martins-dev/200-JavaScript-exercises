// Escreva um programa que imprime uma classificação baseada na nota de um aluno.
// Por falta de instruções, vou adotar que o aluno precise de 7 para passar de ano

let nota01 = Number(prompt ("Digite a primeira nota do aluno:"));
while(isNaN(nota01)) {        nota01 = Number(prompt("Por favor, digite apenas números"));
}
 if (nota01 >= 7) {
    alert("O aluno passou de ano.");
 } else {
    alert("O aluno reprovou");
 }