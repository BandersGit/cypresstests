const o = require("../2.4_loopar")

/**
 * @param {Number} lower - inclusive lower limit
 * @param {Number} upper - inclusive upper limit
 * @returns {Number[]} - ranged array. Omvänd om lower större än lower
 */
const range = (lower, upper) => {
    let rangedArray = [];
    if (lower > upper) {
        while (lower > upper)
            rangedArray.push(lower--);
    }
    while (lower <= upper)
        rangedArray.push(lower++);
    return rangedArray
}


const consoleSpy = jest.spyOn(console, 'log');
const debugMessage = () => `du printade ut: ${consoleSpy.mock.calls.toString()}`

describe("Nivå 1", () => {


    test("Uppg. 1", () => {




        o.uppg1()

        try {
            expect(consoleSpy, debugMessage()).toBeCalledTimes(11);
            range(0, 10).forEach((n, index) => {
                expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index + 1, n)
            })
        } finally {
            consoleSpy.mockReset()
        }

    })

    test("Uppg. 2", () => {

        o.uppg2()

        try {
            expect(consoleSpy, debugMessage()).toBeCalledTimes(10);
            range(10, 1).forEach((n, index) => {
                expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index + 1, n)
            })

        } finally {
            consoleSpy.mockReset()
        }

    })

    test.each([
        [3, 10],
        [0, 20]
    ])("Uppg. 3, input %s, %s", (startNumber, endNumber) => {

        o.uppg3(startNumber, endNumber)

        try {
            expect(o.uppg3.toString(), "Använde du verkligen en for-loop?").toContain('for')
            expect(consoleSpy, debugMessage()).toBeCalledTimes((endNumber - startNumber) + 1); // inclusive limit
        } finally {
            consoleSpy.mockReset()
        }

    })


    test.each([
        [3, 6],
        [-5, 39]
    ])("Uppg. 4, input %s, %s", (startNumber, endNumber) => {

        o.uppg4(startNumber, endNumber)

        try {
            expect(o.uppg4.toString(), "Använde du verkligen en while-loop?").toContain('while')
            expect(consoleSpy, debugMessage()).toBeCalledTimes((endNumber - startNumber) + 1); // inclusive limit
            range(startNumber, endNumber).forEach((n, index) => {
                expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index + 1, n)
            })
        } finally {
            consoleSpy.mockReset()
        }

    })

    test("Uppg. 5", () => {

        o.uppg5()

        try {
            expect(o.uppg5.toString(), "Använde du verkligen en for-loop?").toContain('for')
            expect(consoleSpy, debugMessage()).toBeCalledTimes(5); // inclusive limit
            range(1, 10)
                .filter(x => x % 2 == 0)
                .forEach((n, index) => {
                    expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index + 1, n)
                })
        } finally {
            consoleSpy.mockReset()
        }

    })

    test("Uppg. 6", () => {

        o.uppg6()

        try {
            expect(consoleSpy).toBeCalledWith(210)
        } finally {
            consoleSpy.mockReset()
        }

    })

})

describe("Nivå 2", () => {




    test("Uppg. 7", () => {

        const list = [2, 5, 9, 22, 12];
        expect(() => o.uppg7(list)).not.toThrow()

        const result = o.uppg7(list)
        expect(result, `din lista var [${result}], förväntat var [${list.map(x => x * 2)}]`)
            .toStrictEqual(list.map(x => x * 2))

    })

    test("Uppg. 8", () => {

        var list = ["Hej", "Båt", "Bil", "Gurka"]

        o.uppg8(list)

        try {
            expect(consoleSpy, debugMessage()).toBeCalledTimes(list.length);
            list.forEach((n, index) => {
                expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index + 1, n)
            })
        } finally {
            consoleSpy.mockReset()
        }

    })

    test("Uppg. 9", () => {

        var list = ["Hej", "Båt", "Bil", "Gurka"]
        o.uppg9(list)

        try {
            expect(o.uppg9.toString(), "Använde du verkligen en 'For of'-loop?").toContain('of list')
            expect(consoleSpy, debugMessage()).toBeCalledTimes(list.length);
            list.forEach((n, index) => {
                expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index + 1, n)
            })
        } finally {
            consoleSpy.mockReset()
        }

    })

    test("Uppg. 10", () => {

        const mathSpy = jest.spyOn(Math, 'random')
            .mockReturnValueOnce(3 / 20)
            .mockReturnValueOnce(14 / 20)
            .mockReturnValue(17 / 20)

        const counter = o.uppg10()

        try {
            expect(counter, "Jag har simulerat att slumptalet blir 3, 14 och sedan 17 i testet. Alltså 3 loop-rundor innan det blir träff").toEqual(3)
        } finally {
            consoleSpy.mockReset()
            mathSpy.mockRestore()
        }

    })

    test("Uppg. 11", () => {

        o.uppg11()

        try {
            range(1, 30)
                .map(fizzBuzzify)
                .forEach((n, index) => {
                    expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index + 1, n)
                })
        } finally {
            consoleSpy.mockReset()
        }

    })

})


describe("Bonusövningar", () => {

    test("Uppg 12", () => {
        const person = { fname: "Alice", lname: "Alicedottir", age: 25, isHappy: true }

        o.uppg12(person)

        try {
            let index = 1;
            for (key in person) {
                expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index, key)
                index++
            }
        } finally {
            consoleSpy.mockReset()
        }

    })

    test("Uppg 13", () => {
        const person = { fname: "Alice", lname: "Alicedottir", age: 25, isHappy: true }

        o.uppg13(person)

        try {
            let index = 1;
            for (key in person) {
                expect(consoleSpy, debugMessage()).toHaveBeenNthCalledWith(index, `${key}: ${person[key]}`)
                index++
            }
        } finally {
            consoleSpy.mockReset()
        }

    })

    test.each([
        [4, 10, [5, 7]],
        [14, 16, []],
        [-10, 6, [2, 3, 5]]
    ])("Uppg 14, in %s, %s; exp. ut %s", (start, end, list) => {


        const result = o.uppg14(start, end)
        expect(result).toEqual(list)


    })


})

const fizzBuzzify = (n) => n % 3 === 0
    ? (n % 5 === 0 ? "fizzbuzz" : "fizz")
    : n % 5 === 0 ? "buzz" : n


