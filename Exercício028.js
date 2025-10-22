// Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.
let array = [];
let accounted = 0;
let adicinarNumero = 0;
while (accounted < 100) {
    adicinarNumero ++;
    array.push(adicinarNumero);
    accounted ++;
}
console.log(array);
let soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);