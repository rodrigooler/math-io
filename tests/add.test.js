const {add} = require("../src");

describe("Function add", () => {
    test("should add the number 2 and 4 and give the result 6", () => {
        expect(add(2, 4)).toBe(6);
    });
    test("should add the number 10 and 20 and give the result 30", () => {
        expect(add(2, 4)).toBe(6);
    });
    test("should add the number 115 and 100 and give the result 215", () => {
        expect(add(2, 4)).toBe(6);
    });
    test("should add the number 2004 and 550 and give the result 2554", () => {
        expect(add(2, 4)).toBe(6);
    });
    test("should add the number 399 and 7 and give the result 406", () => {
        expect(add(2, 4)).toBe(6);
    });
})
