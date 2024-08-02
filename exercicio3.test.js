const { multiplos } = require('./exercicio3')

it('Soma dos múltiplos abaixo de 1000', () => {
    expect(multiplos(5, 7)).toBe(156361)
    expect(multiplos(3, 5)).toBe(545890)
    expect(multiplos(9, 12)).toBe(1019587)
});

