import {add, stringInputToArr} from './calculator';
import {describe} from "node:test";

describe('Calculator', () => {
    describe('stringInputToArr', () => {
        it('converts string to array with default delimiter ","', () => {
            const inputStr = "1, 2, 3, 4, 5, 6";
            const output = [1, 2, 3, 4, 5, 6];
            expect(stringInputToArr(inputStr)).toEqual(output);
        });

        it('converts string to array with custom delimiter specified using "//"', () => {
            const output = [1, 2, 3];
            expect(stringInputToArr("//;\n1;2;3")).toEqual(output);
            expect(stringInputToArr("//::\n1::2::3")).toEqual(output);
            expect(stringInputToArr("//;\n1\n2;3")).toEqual(output);
        });

        it('converts string to array with \\n between numbers', () => {
            const output = [1, 2, 3];
            expect(stringInputToArr("1\n2,3")).toEqual(output);
            expect(stringInputToArr("//;\n1\n2;3")).toEqual(output);
            expect(stringInputToArr("\n1\n2,3")).toEqual([0, ...output]);
        });

        it('if with // string does not contain \\n it throws error as invalid input', () => {
            const inputStr = "//;1;2;3;4"
            expect(() => stringInputToArr(inputStr)).toThrow('invalid input');
        });

        it('if string contains -ve number, it throws error as invalid input', () => {
            expect(() => stringInputToArr("1, -2, 3")).toThrow('invalid input  -2');
        });
    });

    describe('add', () => {
        it('returns 0 for empty string', () => {
            expect(add('')).toEqual(0);
        });

        it('returns the same number for string with 1 number', () => {
            expect(add('1')).toEqual(1);
            expect(add('\n1\n')).toEqual(1);
        });

        it('considers empty string between delimiters as 0', () => {
            expect(add('1,,3,')).toEqual(4);
        });

        it('considers \\n as delimiter to add numbers', () => {
            expect(add("1\n2,3\n4")).toEqual(10);
        });

        it('adds for custom delimiter specified using "//"', () => {
            expect(add("//::\n1::2\n3::4")).toEqual(10);
        })
    })
});