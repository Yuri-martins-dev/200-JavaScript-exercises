// Escreva um programa que verifica a situação de um estudante de acordo com sua média final.
// Não entendi o enunciado dessa questão.
let nota = Number(prompt("Digite a nota do aluno:"));
while (isNaN(nota)) {
    nota = Number(prompt("Por favor, digite apenas números"));
}

    if (nota < 7) {
        alert("O aluno reprovou.");
    } else {
        alert("O aluno passou de ano.");
    }