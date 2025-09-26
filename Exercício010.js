    // Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).
    let nota01 = Number(prompt ("Digite a primeira nota do aluno:"));
    while(isNaN(nota01)) {
        nota01 = Number(prompt("Por favor, digite apenas números"));
    }

    let nota02 = Number(prompt ("Digite a segunda nota do aluno:"));
    while(isNaN(nota02)) {
        nota02 = Number(prompt("Por favor, digite apenas números"));
    }

    mediaFinal = (nota01 + nota02) / 2;

    if (mediaFinal < 7) {
        alert("O aluno reprovou.");
    } else {
        alert("O aluno passou de ano.");
    }