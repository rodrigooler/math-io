const {divide} = require("../src");

describe("Function divide", () => {
    test("should divide the number 71 and 100 and give the result 0.71", () => {
        expect(divide(71, 100)).toBe(0.71);
    });
})
