
describe("Nivå 1", () => {

    const o = require("../1.2_operatorer")

    test("Uppg. 1", () => {
        const result = o.uppg1();
        expect(result).toBe(7)
    })

    test("Uppg. 2", () => {
        const result = o.uppg2();
        expect(result).toBe(12)
    })

    test("Uppg. 3", () => {
        const result = o.uppg3();
        expect(result).toBe(6)
    })

    test("Uppg. 4", () => {
        const result = o.uppg4();
        expect(result).toBe(40)

    })

    test("Uppg. 5", () => {
        const result = o.uppg5();
        expect(result).toBe(2)
    })

    test("Uppg. 6", () => {
        const result = o.uppg6();
        expect(result).toBe(1)
    })

    test("Uppg. 7", () => {
        const result = o.uppg7();
        expect(result).toBe(49)
    })

    test("Uppg. 8", () => {
        const result = o.uppg8();
        expect(result).toBe("Hello World")
    })


})

describe("Nivå 2", () => {

    const o = require("../1.2_operatorer")



    test("Uppg. 9", () => {
        const result = o.uppg9();
        expect(result).toBe(1000)
    })

    test("Uppg. 10", () => {
        const result = o.uppg10();
        expect(result).toBe(-5)
    })

    test("Uppg. 11", () => {
        const result = o.uppg11();
        expect(result).toBe(2)
    })


    test("Uppg. 12", () => {
        const result = o.uppg12();
        expect(result).toBe(4)
    })

    test("Uppg. 13", () => {
        const result = o.uppg13();
        expect(result).toBe(6)
    })

    test("Uppg. 14", () => {
        const result = o.uppg14();
        expect(result).toBe(8)
    })

    test("Uppg. 15", () => {
        const result = o.uppg15();
        expect(result).toBe(87)
    })

    test("Uppg. 16", () => {
        const result = o.uppg16();
        expect(result).toBe(29)
    })

    test("Uppg. 17", () => {
        const { a, b } = o.uppg17();
        expect(a).toBe(5)
        expect(b).toBe(4)
    })


    test("Uppg. 18", () => {
        const { a, b } = o.uppg18();
        expect(a).toBe(5)
        expect(b).toBe(5)
    })

    test("Uppg. 19", () => {
        const { a, b } = o.uppg19(3, 7);
        expect(a).toBe(7)
        expect(b).toBe(3)
    })

    test("Uppg. 20", () => {
        const player = o.uppg20({ health: 100 }, 75);
        expect(player.health).toBe(25)
    })



})

describe("Bonusövningar", () => {

    const o = require("../1.2_operatorer")


    test("Uppg. 21", () => {
        const { a, b } = o.uppg21(10, 23);
        expect(a).toBe(23)
        expect(b).toBe(10)
    })

    test("Uppg. 22", () => {
        const person = o.uppg22({ age: 12 }, "name", "Gunnar");
        expect(person).toEqual({ age: 12, name: "Gunnar" })
    })

    test.each([[1, 3], [2, 2]])('Uppg. 23 (input: %s)', (input, expected) => {
        const permission = o.uppg23(input);
        expect(permission).toBe(expected)
    })

    test.each([[2, 6], [7, 3]])("Uppg. 24 (input: %s)", (input, expected) => {
        const permission = o.uppg24(input);
        expect(permission).toBe(expected)
    })

    test.each([[7, 1], [6, 0]])("Uppg. 25 (input: %s)", (input, expected) => {
        const permission = o.uppg25(input);
        expect(permission).toBe(expected)
    })

    test.each([[3.7, 3], [-3.7, -3]])("Uppg. 26 (input: %s)", (input, expected) => {
        const result = o.uppg26(input);
        expect(result).toBe(expected)
    })

    test.each([[7, 3], [2, 2]])("Uppg. 27 (input: %s)", (input, expected) => {
        const permission = o.uppg27(input);
        expect(permission).toBe(expected)
    })

    test("Uppg. 28", () => {
        const { a, b } = o.uppg27(5, 7);
        expect(a).toBe(7)
        expect(b).toBe(5)
    })



})


