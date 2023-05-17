const arrayExercicio = require('./exercicio2')



describe('Teste unitário do exercício 02', () => {




    test('Passando os índices errados', () => {

        expect(arrayExercicio([12, 21, 55, 73, 78, 54, 32, 19, 71, 35, 77])).not.toBe([12, 78])

    });

    test('Passando os índices corretos', () => {
    
        expect(arrayExercicio([12, 21, 55, 73, 78, 54, 32, 19, 11, 71, 35, 77])).toStrictEqual([4, 8])

    });


})
