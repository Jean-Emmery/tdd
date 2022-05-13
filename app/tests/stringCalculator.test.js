import { StringCalculator } from '../js/stringCalculator.js';

describe('str calculator', () => {
    const strCalc = new StringCalculator();
    test('empty returns 0', () => {
        expect(strCalc.add('')).toEqual(0);
    });

    test('1 returns 1', () => {
        expect(strCalc.add('1')).toEqual(1);
    });

    test('1,2 returns 3', () => {
        expect(strCalc.add('1,2')).toEqual(3);
    });

    test('negative number throw an error', () => {
        expect(() => strCalc.add('1,-2')).toThrow(Error);
    });

    test(' > 1000 numbers ignored', () => {
        expect(strCalc.add('1\n2,1002')).toEqual(3);
    });

    test('delimiter works', () => {
        expect(strCalc.add('//;\n1;2')).toEqual(3);
    });

    test('multiple demimiters', () => {
        expect(strCalc.add('//[*][%]\n1*2%3')).toEqual(6);
    });

    test('multiple characters delimiter', () => {
        expect(strCalc.add('//[***]\n1***2***3')).toEqual(6);
    });

    test('multiple characters for multiple delimiters', () => {
        expect(strCalc.add('//[**][%%]\n1**2%%3')).toEqual(6);
    });
});
