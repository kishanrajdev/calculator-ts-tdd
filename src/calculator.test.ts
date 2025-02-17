import {add, stringInputToArr} from './calculator';
import {describe} from "node:test";

describe('Calculator', () => {
    describe('stringInputToArr', () => {
        test('converts string to array with default delimiter ","', () => {
            const inputStr = "1, 2, 3, 4, 5, 6";
            const output = [1, 2, 3, 4, 5, 6];
            expect(stringInputToArr(inputStr)).toEqual(output);
        });

        test('converts string to array with custom delimiter specified using "//"', () => {
            const inputStr = "//;\n1;2;3;4"
            const output = [1, 2, 3, 4];
            expect(stringInputToArr(inputStr)).toEqual(output);
        });
    });
});