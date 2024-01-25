const o = require("../2.1_jamforelser")

describe("Nivå 1", () => {

    test.each([[7, 5, true], [7, 7, false], [6, 7, false]])
        ("Uppg. 1, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg1(a, b);
            expect(result).toBe(expected)
        })

    test.each([[7, 5, true], [7, 7, true], [6, 7, false]])
        ("Uppg. 2, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg2(a, b);
            expect(result).toBe(expected)
        })

    test.each([[7, 5, false], [7, 7, false], [6, 7, true]])
        ("Uppg. 3, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg3(a, b);
            expect(result).toBe(expected)
        })

    test.each([[7, 5, false], [7, 7, true], [6, 7, true]])
        ("Uppg. 4, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg4(a, b);
            expect(result).toBe(expected)
        })

    test.each([[7, 5, false], [7, 7, true], [6, 7, false], ["hej", "hej", true]])
        ("Uppg. 5, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg5(a, b);
            expect(result).toBe(expected)
        })

    test.each([["5", 5, true]])
        ("Uppg. 5, input '%s', %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg5(a, b);
            expect(result).toBe(expected)
        })


    test.each([[7, 5, false], [7, 7, true], [6, 7, false], ["hej", "hej", true]])
        ("Uppg. 6, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg6(a, b);
            expect(result).toBe(expected)
        })

    test.each([["5", 5, false]])
        ("Uppg. 6, input '%s', %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg6(a, b);
            expect(result).toBe(expected)
        })


    test.each(
        [[7, 5, true],
        [7, 7, false],
        [6, 7, true],
        ["hej", "hej", false]]
    )
        ("Uppg. 7, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg7(a, b);
            expect(result).toBe(expected)
        })

    test.each([["5", 5, false]])
        ("Uppg. 7, input '%s', %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg7(a, b);
            expect(result).toBe(expected)
        })


    test.each([[7, 5, true], [7, 7, false], [6, 7, true], ["hej", "hej", false]])
        ("Uppg. 8, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg8(a, b);
            expect(result).toBe(expected)
        })

    test.each([["5", 5, true]])
        ("Uppg. 8, input '%s', %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg8(a, b);
            expect(result).toBe(expected)
        })


})

describe("Nivå 2", () => {

    test.each(
        [[{ age: 12 }, false],
        [{ age: 18 }, true],
        [{ age: 92 }, true]]
    )
        ("Uppg. 9, input '%s', %s, expecting: %s", (person, expected) => {
            const result = o.uppg9(person);
            expect(result).toBe(expected)
        })

    test.each([[3, false], [4, true]])
        ("Uppg. 10, input %s, %s, expecting: %s", (a, expected) => {
            const result = o.uppg10(a);
            expect(result).toBe(expected)
        })

    test.each([
        [undefined, undefined],
        [null, undefined],
        [{ name: "gunnar" }, undefined],
        [{ name: "gunnar", age: 12 }, 12]
    ])
        ("Uppg. 11, input '%s', %s, expecting: %s", (person, expected) => {
            const result = o.uppg11(person)

            expect(result).toBe(expected)
        })


    test("Uppg. 12", () => {
        const result = o.uppg12();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })

    test("Uppg. 13", () => {
        const result = o.uppg13();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 14", () => {
        const result = o.uppg14();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 15", () => {
        const result = o.uppg15();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })

    test("Uppg. 16", () => {
        const result = o.uppg16();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 17", () => {
        const result = o.uppg17();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })


    test("Uppg. 18", () => {
        const result = o.uppg18();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 19", () => {
        const result = o.uppg19();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 20", () => {
        const result = o.uppg20();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 21", () => {
        const result = o.uppg21();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })



})

describe("Bonusövningar", () => {


    test("Uppg. 22", () => {
        const result = o.uppg22();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 23", () => {
        const result = o.uppg23();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })

    test("Uppg. 24", () => {
        const result = o.uppg24();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })

})


