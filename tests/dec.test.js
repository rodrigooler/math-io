const {dec} = require("../src");

describe("Function dec", () => {
    test("should dec the number 2 and give the result 1", () => {
        expect(dec(2)).toBe(1);
    });
    test("should dec the number 10 and give the result 9", () => {
        expect(dec(10)).toBe(9);
    });
    test("should dec the number 115 and give the result 114", () => {
        expect(dec(115)).toBe(114);
    });
    test("should dec the number 2004 and give the result 2003", () => {
        expect(dec(2004)).toBe(2003);
    });
    test("should dec the number 399 and give the result 398", () => {
        expect(dec(399)).toBe(398);
    });
})
