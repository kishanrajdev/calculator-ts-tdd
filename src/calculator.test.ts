import { add } from './calculator';

test('adds two numbers', () => {
    expect(add('2')).toBe(5);
});
