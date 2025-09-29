//Escreva um programa que determina o maior entre três números.
let a = prompt("Digite um número.");
while (isNaN(a)) {
    a = Number(prompt("Por favor, digite apenas números."));
}

let b = prompt("Digite um segundo número.");
while (isNaN(b)) {
    b = Number(prompt("Por favor, digite apenas números."));
}

let c = prompt("Por fim, digite um último número:");
while (isNaN(c)) {
    c = Number(prompt("Por favor, digite apenas números."));
}

if (a > b && a > c) {
    alert(`O número ${a} é o maior.`);
} else if (b > a && b > c) {
    alert(`O número ${b} é o maior.`);
} else  
    alert(`O número ${c} é o maior.`);
