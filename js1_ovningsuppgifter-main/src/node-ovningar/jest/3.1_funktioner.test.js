const o = require("../3.1_funktioner")

const consoleSpy = jest.spyOn(console, 'log');
const debugMessage = () => `du printade ut: ${consoleSpy.mock.calls.toString()}`

afterEach(() => {
    consoleSpy.mockReset()
})

describe("Nivå 1", () => {

    test.each([
        [3, 1, 4],
        [5, 7, 12]
    ])("Uppg. 1, input %s, %s, expected %s", (a, b, expected) => {

        const func = o.uppg1(a, b);

        if (func) {
            const result = func(a, b)
            expect(result).toBe(expected)
            expect(consoleSpy, debugMessage()).toHaveBeenCalledWith(result)
            expect(o.uppg1.toString()).toContain("function sum")
        } else {
            throw new Error("function has not been returned properly")
        }

    })

    test.each([
        [3, 1, 3],
        [4, 7, 28]
    ])("Uppg. 2, input %s, %s, expected %s", (a, b, expected) => {

        const func = o.uppg2(a, b);

        if (func) {
            const result = func(a, b)
            expect(result).toBe(expected)
            expect(consoleSpy, debugMessage()).toHaveBeenCalledWith(result)
            expect(o.uppg2.toString()).toContain("const multiply = function")
        } else {
            throw new Error("function has not been returned properly")
        }




    })

    test.each([
        [3, 1, 2],
        [4, 7, -3]
    ])("Uppg. 3, input %s, %s, expected %s", (a, b, expected) => {

        const func = o.uppg3(a, b);

        if (func) {
            const result = func(a, b)
            expect(result).toBe(expected)
            expect(consoleSpy, debugMessage()).toHaveBeenCalledWith(result)
            expect(o.uppg3.toString()).toContain("const subtract = (")
        } else {
            throw new Error("function has not been returned properly")
        }




    })

    test.each([
        [3, 1, 3],
        [4, 7, 7]
    ])("Uppg. 4, input %s, %s, expected %s", (a, b, expected) => {

        const func = o.uppg4(a, b);

        if (func) {
            const result = func(a, b)
            expect(result).toBe(expected)
        } else {
            throw new Error("function has not been returned properly")
        }

    })

    test.each([
        [3, 9],
        [4, 16]
    ])("Uppg. 5, input %s, expected %s", (a, expected) => {

        const func = o.uppg5(a);

        if (func) {
            const result = func(a)
            expect(result).toBe(expected)
        } else {
            throw new Error("function has not been returned properly")
        }

    })

    test.each([
        ['sv', "Alice", "Hej Alice!"],
        ['en', "Bob", "Hello Bob!"]
    ])("Uppg. 6, input %s, %s, expected %s", (lang, name, expected) => {

        const func = o.uppg6(lang, name);

        if (func) {
            const result = func(lang, name)
            expect(result).toBe(expected)
        } else {
            throw new Error("function has not been returned properly")
        }
    })

    test("Uppg. 7", () => {

        const result = o.uppg7();

        expect(result).toBe("word")

    })

    test("Uppg. 8", () => {

        const result = o.uppg8();

        expect(result).toBe("wordLength")

    })

    test("Uppg. 9", () => {

        const result = o.uppg9();

        expect(result).toBe("number")

    })

    test("Uppg. 10", () => {

        const result = o.uppg10();

        expect(result).toBe("Gunnar")

    })


})

describe("Nivå 2", () => {

    test.each([
        ['sten', "sax", "du vann"],
        ['påse', "påse", "lika"],
        ['sten', "påse", "datorn vann"],
    ])("Uppg. 11, input %s, expected %s", (playerMove, computerMove, expected) => {

        const func = o.uppg11();

        if (func) {
            const result = func(playerMove, computerMove)
            expect(result).toBe(expected)
        } else {
            throw new Error("function has not been returned properly")
        }
    })

    test.each([
        [[1, 7, 2], [2, 7, 1]],
        [["Alice", "Bob"], ["Bob", "Alice"]],
    ])("Uppg. 12, input %s, %s, expected %s", (list, expected) => {

        const func = o.uppg12();

        if (func) {
            const result = func(list)
            expect(result).toEqual(expected)
        } else {
            throw new Error("function has not been returned properly")
        }
    })



})

describe("Bonusövningar", () => {

    test.each([
        [9, 3],
        [16, 4],
    ])("Uppg. 13, input %s, expected %s", (number, expected) => {

        const func = o.uppg13();

        if (func) {
            const result = func(number)
            expect(result).toEqual(expected)
        } else {
            throw new Error("function has not been returned properly")
        }
    })


})


