const {positiveSum, opposite, removeChar, repeatStr} = require('./script')



describe('sum', () => {

test('сумма целых чисел', () => {
    expect(positiveSum([1,2])).toBe(3)
})
test('сумма дробных чисел', () => {
    expect(positiveSum([0.1, 0.2])).toBeCloseTo(0.3)
})
})

describe('num', () => {

    test('сравниваем целые числа', () => {
        expect(opposite(1)).toBe(-1)
    })
    })

 describe('remove', () => {

        test('Удалить первый и последний символы', () => {
            expect(removeChar('eloquent')).toBe('loquen')
        })
        test('Удалить первый и последний символы', () => {
            expect(removeChar('place')).toBe('lac')
        })
        })

describe('repeat', () => {

    test('повторяем строку', () => {
    expect(repeatStr(3, "*")).toBe('***')
  })
  test('повторяем строку', () => {
    expect(repeatStr(2, "ha ")).toBe('ha ha ')
  })
  })
