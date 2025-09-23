//Declare três variáveis e atribua valores numéricos a elas. Use operadores de comparação para comparar os valores entre as variáveis. Imprima os resultados.
let num01 = 8;
let num02 = 24;
let num03 = -50;
console.log (num01 == num02);   //False
console.log (num01 == "8");     //True
console.log (num01 === "8");    //False pois três iguais comparam valor e tipo
console.log (num01 != num02);   //True
console.log (num01 !== "8");    //True pois não são do mesmo tipo

console.log (num03 < num02 > num01);          //False 
console.log (num03 < num02 && num02 > num01); //True