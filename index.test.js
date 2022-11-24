import countString from './index'

describe('countString', () => {
    test('counting the characters in the string', () => {
        const result = countString('test');
        expect(result).toBe(4);
    })
})