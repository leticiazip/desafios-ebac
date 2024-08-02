const { MDC } = require('./exercicio1')

it('Máximo divisor comum entre dois números', () => {
    expect(MDC(250, 64)).toBe(2)
    expect(MDC(12, 9)).toBe(3)
    expect(MDC(80, 50)).toBe(10)
});