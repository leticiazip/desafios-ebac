let numero = 1000;
let x = 5;
let y = 7;
let soma = 0;
let arraySoma = [];


function multiplos(numero) {
    for (let i = 1; i < numero; i++) {
        if (i % x === 0 || i % y === 0) {
            arraySoma.push(i);
        }
    }
    for (let i = 0; i < arraySoma.length; i++) {
        soma += arraySoma[i]
    }
    return arraySoma;
}

multiplos(numero);
console.log(`A soma desses múltiplos é: ${soma}`);
