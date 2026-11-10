import { sum } from './sum.js';

describe("test for sum function", () => {
    test("2 + 2 = 4", () => {
        expect(sum(2, 2)).toBe(4);
    });
});