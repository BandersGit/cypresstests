const o = require("../4.1_strängmanipulation")

describe("Nivå 1", () => {

    test("Uppg. 1", () => {
        const result = o.uppg1();
        expect(result).toBe("HEJ")
    })

    test("Uppg. 2", () => {
        const result = o.uppg2();
        expect(result).toBe("tjena")
    })

    test.each([
        ["Hej", 3],
        ["Cykel", 5]
    ])("Uppg. 3, input %s, expected %s", (word, expected) => {

        const result = o.uppg3(word);
        expect(result).toBe(expected)

    })

    test.each([
        ["Brygga", true],
        ["Hamn", false]
    ])("Uppg. 4, input %s, expected %s", (word, expected) => {

        const result = o.uppg4(word);
        expect(result).toBe(expected)

    })

    test.each([
        ["arbete", true],
        ["jobb", false]
    ])("Uppg. 5, input %s, expected %s", (word, expected) => {

        const result = o.uppg5(word);
        expect(result).toBe(expected)

    })

    test.each([
        ["Jag har en cykel", true],
        ["Vilken fin bil!", false]
    ])("Uppg. 6, input %s, expected %s", (sentence, expected) => {

        const result = o.uppg6(sentence);
        expect(result).toBe(expected)
    })

})

describe("Nivå 2", () => {

    test.each([
        ["Ta nåt gammalt, nåt nytt, nåt lånat, nåt blått", "Ta något gammalt, något nytt, något lånat, något blått"],
    ])("Uppg. 7, input %s, expected %s", (sentence, expected) => {

        const result = o.uppg7(sentence);
        expect(result).toBe(expected)
    })

    test("Uppg. 8", () => {

        const result = o.uppg8(5);
        expect(result).toBe("HejHejHejHejHej")

    })

    test("Uppg. 9", () => {

        const result = o.uppg9();
        expect(result).toEqual(["Det", "här", "är", "en", "exempelmening"])

    })

    test("Uppg. 10", () => {

        const example = "Det här är en exempelmening"

        const result = o.uppg10(example);

        expect(result).toBe("Det här är")

    })

})

describe("Bonusövningar", () => {

    test.each([
        [3, "III"],
        [9, "IV"],
        [23, "XXIII"],
        [49, "XLIX"]
    ])("Uppg. 11, input %s, expected %s", (number, expected) => {

        const func = o.uppg11(number);
        expect(result).toBe(expected)
    })

    test.each([
        ["Jag har en bil och en båt", "Jag har en Bil och en Båt"],
    ])("Uppg. 12, input %s, expected %s", (sentence, expected) => {

        const result = o.uppg12(sentence);
        expect(result).toBe(expected)
    })

})


