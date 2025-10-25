    //Usando um laço for, imprima todos os números primos de 1 a 100.
    let accounted = 1;
    do {
        accounted = accounted + 1;
        if (accounted === 2 || accounted === 3 || accounted === 5 || accounted === 7 ) {
            console.log(accounted);
        } else if (accounted % 2 === 0 || accounted % 3 ===0 || accounted % 5 === 0 || accounted % 7 === 0) {
            // Nada acontece
        } else {
            console.log(accounted)
        }
    } while (accounted < 100)

