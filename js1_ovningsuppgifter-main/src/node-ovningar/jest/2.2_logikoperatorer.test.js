const o = require("../2.2_logikoperatorer")

describe("Nivå 1", () => {

    test("Uppg. 1", () => {
        const result = o.uppg1();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 2", () => {
        const result = o.uppg2();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })

    test("Uppg. 3", () => {
        const result = o.uppg3();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 4", () => {
        const result = o.uppg4();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })


    test("Uppg. 5", () => {
        const result = o.uppg5();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 6", () => {
        const result = o.uppg6();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })


    test("Uppg. 7", () => {
        const result = o.uppg7(true, false);
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test.each([
        [false, false, false],
        [false, true, false],
        [true, true, true]
    ])("Uppg. 8, input %s, %s, expecting: %s", (a, b, expected) => {
        const result = o.uppg8(a, b);
        expect(result).not.toBeNull()
        expect(result).toEqual(expected)
    })


})

describe("Nivå 2", () => {

    test.each([
        ["Gunnar", "Gunnar"],
        ["", "gäst"],
        [0, "gäst"],
        [undefined, "gäst"],
        [null, "gäst"]
    ])("Uppg. 9, input %s, expecting: 'Hej %s'", (username, expected) => {

        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg9(username);

        expect(consoleSpy).toHaveBeenCalledWith(`Hej ${expected}`)
        consoleSpy.mockReset()
    })

    test.each([
        ["Gunnar", "Gunnar"],
        [0, 0],
        [undefined, "gäst"],
        [null, "gäst"]
    ])("Uppg. 10, input %s, expecting: 'Hej %s'", (username, expected) => {

        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg10(username);

        expect(consoleSpy).toHaveBeenCalledWith(`Hej ${expected}`)
        consoleSpy.mockReset()
    })


    test.each([
        "Gunnar",
        ""
    ])
        ("Uppg. 11, input %s", (username) => {
            const consoleSpy = jest.spyOn(console, 'log');
            o.uppg11(username);

            if (username) {
                expect(consoleSpy).toHaveBeenCalledWith(username)
            } else {
                expect(consoleSpy).not.toBeCalled();
            }
            consoleSpy.mockReset()
        })

    test("Uppg. 12", () => {
        const result = o.uppg12();
        expect(result).not.toBeNull()
        expect(result).toBeTruthy()
    })

    test("Uppg. 13", () => {
        const result = o.uppg13();
        expect(result).not.toBeNull()
        expect(result).toBeFalsy()
    })


})

describe("Bonusövningar", () => {

    test.each([
        [false, false, true],
        [false, true, true],
        [true, true, false]
    ])
        ("Uppg. 14, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg14(a, b);
            expect(result).toBe(expected)
        })

    test.each([
        [false, false, false],
        [false, true, true],
        [true, true, false]
    ])
        ("Uppg. 15, input %s, %s, expecting: %s", (a, b, expected) => {
            const result = o.uppg15(a, b);
            expect(result).toBe(expected)
        })


    test("Uppg. 16", () => {
        const result = o.uppg16();
        expect(result).not.toBeNull()
        expect(result).toBeUndefined()
    })

    test("Uppg. 17", () => {
        const result = o.uppg17()
        expect(result).toBe(false)
    })


})


