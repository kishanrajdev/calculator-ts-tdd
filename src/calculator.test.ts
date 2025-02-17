import {add, stringInputToArr} from './calculator';
import {describe} from "node:test";

test('adds two numbers', () => {
    expect(add('2')).toBe(5);
});

describe('Calculator', () => {
    describe('stringInputToArr', () => {
        it('converts string to array with default delimiter ","', () => {
            const inputStr = "1, 2, 3, 4, 5, 6";
            const output = [1, 2, 3, 4, 5, 6];
            expect(stringInputToArr(inputStr)).toBe(output);
        })
    })
})