const { arrayMenorMaior } = require('./exercicio2')

it('Índice com menor e maior valor, respectivamente', () => {
    expect(arrayMenorMaior(...[4, 5, 3, 9, 36])).toEqual([4, 2])
    expect(arrayMenorMaior(...[159, 45, 98, 32, 51])).toEqual([0, 3])
    expect(arrayMenorMaior(...[98, 489, 124, 963, 12, 974, 6])).toEqual([5, 6])
});