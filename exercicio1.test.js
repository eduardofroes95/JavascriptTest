const calcularMdc = require('./exercicio1')



describe('Teste unitário do exercício 01', () => {




    test('Validando a função de calcular o menor divisor comum', () => {

        expect(calcularMdc(5, 15)).toBe(5)

    });

    test('Validando cenário negativo da função', () => {

        expect(calcularMdc(5, 15)).not.toBe(6)

    });


})
