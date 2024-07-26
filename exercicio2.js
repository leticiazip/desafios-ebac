let numeros = [11, 36, 98, 150, 236, 6, 27, 48]
let indiceMaior = 0;
let valorMaior = 0;
let indiceMenor = 0;
let valorMenor = numeros[0]

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > valorMaior) {
        valorMaior = numeros[i]
        indiceMaior = i
    }

    if (numeros[i] <= valorMenor) {
        valorMenor = numeros[i]
        indiceMenor = i
    }
}

console.log(`O índice que possui o maior valor do array é (${indiceMaior}) com ${valorMaior}`)

console.log(`O índice que possui o menor valor do array é (${indiceMenor}) com ${valorMenor}`)