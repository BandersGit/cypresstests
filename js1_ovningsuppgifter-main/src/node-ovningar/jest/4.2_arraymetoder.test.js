const o = require("../4.2_arraymetoder")

const consoleSpy = jest.spyOn(console, 'log');
const debugMessage = () => `du printade ut: ${consoleSpy.mock.calls.toString()}`

afterEach(() => {
    consoleSpy.mockReset()
})


describe("Nivå 1", () => {

    test("Uppg. 1", () => {
        const result = o.uppg1();
        expect(result).toEqual(["apple", "orange", "banana"])
    })

    test("Uppg. 2", () => {
        const result = o.uppg2();
        expect(result).toEqual(["pineapple", "banana", "apple", "orange"])
    })

    test("Uppg. 3", () => {

        const result = o.uppg3();
        expect(result).toEqual(["banana", "apple"])

    })

    test("Uppg. 4", () => {
        const result = o.uppg4();
        expect(result).toEqual(["apple", "orange"])
    })

    test("Uppg. 5", () => {

        const result = o.uppg5();
        expect(result).toEqual(["banana", "orange"])

    })

    test("Uppg. 6", () => {

        const result = o.uppg6();
        expect(result).toBe(2)
    })

    test("Uppg. 7", () => {

        const result = o.uppg7();
        expect(result).toEqual(["orange", "apple", "banana"])
    })

    test("Uppg. 8", () => {

        o.uppg8();
        expect(consoleSpy, debugMessage()).toHaveBeenCalledWith("banana")
        expect(consoleSpy, debugMessage()).toHaveBeenCalledWith("apple")
        expect(consoleSpy, debugMessage()).toHaveBeenCalledWith("orange")

    })

    test("Uppg. 9", () => {

        const result = o.uppg9();
        expect(result).toBe("Idag har jag ätit banan, äpple, citron")

    })

})

describe("Nivå 2", () => {

    test("Uppg. 10", () => {

        o.uppg10();
        expect(consoleSpy, debugMessage()).toHaveBeenCalledWith("Alice")
        expect(consoleSpy, debugMessage()).toHaveBeenCalledWith("Bob")
        expect(consoleSpy, debugMessage()).toHaveBeenCalledWith("Charlie")

    })




})

describe("Bonusövningar", () => {
    test.each([
        [["orange", "apple", "banana"], ["orange", "apple"]],
        [["banana", "orange", "apple",], ["orange", "apple"]],
        [["orange", "apple",], ["orange", "apple"]],
        [["orange", "banana", "apple", "banana"], ["orange", "apple"]]
    ])("Uppg. 11, input %s, expected %s", (list, expected) => {

        const result = o.uppg11(list);
        expect(result).toEqual(expected)
    })

})


