const o = require("../1.1_variabler")


describe("Nivå 1", () => {

    test("Uppg. 1", () => {

        const result = o.uppg1();
        expect(typeof result.age).toBe('number')
        expect(typeof result.firstname).toBe('string')
        expect(typeof result.city).toBe('string')

    })

    test("Uppg. 2", () => {

        const result = o.uppg2();

        expect([true, false]).toContain(result.hasPet)
        expect(result.hasPetType).toBe('boolean'.toLowerCase())

    })

    test("Uppg. 3", () => {

        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg3();

        expect(consoleSpy).toHaveBeenCalledWith('Alice')
        consoleSpy.mockReset()
    })

    test("Uppg. 4", () => {

        const answer = o.uppg4();
        expect(["var", "let"]).toContain(answer)

    })

    test("Uppg. 5", () => {

        const age = o.uppg5();

        expect(age).not.toBe(5)
        expect(typeof age).toBe('number')

    })

    test("Uppg. 6", () => {

        const consoleSpy = jest.spyOn(console, 'log');
        const list = o.uppg6();

        expect(list.length).toBe(4)
        list.forEach((val) => {
            expect(typeof val).toBe('number')
        })

        expect(consoleSpy).toHaveBeenCalledWith(list)
        consoleSpy.mockReset()
    })

    test("Uppg. 7", () => {
        const { age, name } = o.uppg7();
        expect(age).toEqual(27)
        expect(name).toEqual("Alice")
    })

    test("Uppg. 8", () => {
        const { age, name } = o.uppg8();
        expect(age).toEqual(39)
        expect(name).toEqual("Johan")
    })

    test("Uppg. 9", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg9();

        expect(consoleSpy).toHaveBeenCalledWith(45)
        expect(consoleSpy).toHaveBeenCalledWith('Alice')
        consoleSpy.mockReset()
    })

    test("Uppg. 10", () => {
        expect(o.uppg10).not.toThrow()
    })


    test("Uppg. 11", () => {
        expect(o.uppg11).toThrow(new TypeError("Assignment to constant variable."))
    })


    test("Uppg. 12", () => {
        expect(o.uppg12).not.toThrow()
    })

})

describe("Bonusövningar", () => {
    test("Uppg. 13", () => {
        const person = o.uppg13("age", 37);
        expect(person).not.toHaveProperty("keyName")
        expect(person.age).toEqual(37)
    })

    test("Uppg. 14", () => {
        const person = o.uppg14("favoriteBand", "Noice");
        expect(person).not.toHaveProperty("keyName")
        expect(person.favoriteBand).toEqual("Noice")
    })
})