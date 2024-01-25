const o = require("../2.3_conditionals")

describe("Nivå 1", () => {

    test.each([
        [15, 0],
        [18, 1],
        [21, 1],
        [14, 0]
    ])("Uppg. 1, input %s", (number, calledTimes) => {

        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg1(number);

        try {
            expect(consoleSpy).toBeCalledTimes(calledTimes)
            if (calledTimes) {
                expect(consoleSpy).toHaveBeenCalledWith('Du är myndig')
            }
        } finally {
            consoleSpy.mockReset()
        }

    })

    test.each([
        [10, 0],
        [13, 1],
        [15, 1],
        [19, 1],
        [21, 0]
    ])("Uppg. 2, input %s", (number, calledTimes) => {

        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg2(number);

        try {
            expect(consoleSpy).toBeCalledTimes(calledTimes)
            if (calledTimes) {
                expect(consoleSpy).toHaveBeenCalledWith('Du är en tonåring')
            }
        } finally {
            consoleSpy.mockReset()
        }

    })

    test.each([
        [0, "Du är ett barn"],
        [5, "Du är ett barn"],
        [13, "Du är en tonåring"],
        [15, "Du är en tonåring"],
        [19, "Du är en tonåring"],
        [20, "Du är vuxen"],
        [25, "Du är vuxen"],
        [-7, "ogiltigt värde, kan ej avgöra din ålderskategori"],
        ["text", "ogiltigt värde, kan ej avgöra din ålderskategori"]

    ])("Uppg. 3, input %s", (number, expectedOutput) => {

        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg3(number);

        try {
            expect(consoleSpy).toHaveBeenCalledWith(expectedOutput)
            expect(consoleSpy).toHaveBeenCalledWith("Tack för att du använt åldersbestämmaren 3000")
        } finally {
            consoleSpy.mockReset()
        }




    })

    test.each([
        ["Gunnar", true],
        ["Alice", false]
    ])("Uppg. 4, input %s", (name, expectedOutput) => {

        const result = o.uppg4(name);

        expect(result).toBe(expectedOutput)



    })

    test.each([
        ["jan", 31],
        ["feb", 28],
        ["mar", 31],
        ["apr", 30],
        ["may", 31],
        ["jun", 30]
    ])("Uppg. 5, input %s", (month, expectedOutput) => {


        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg5(month);

        try {
            expect(o.uppg5.toString()).toContain("switch")
            expect(consoleSpy).toHaveBeenCalledTimes(1)
            expect(consoleSpy).toBeCalledWith(expectedOutput)
        } finally {
            consoleSpy.mockReset()
        }



    })

    test.each([
        [17, "Du är omyndig"],
        [18, "Du är myndig"]
    ])("Uppg. 6, input %s", (age, expectedOutput) => {

        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg6(age);

        try {
            expect(consoleSpy).toBeCalledWith(expectedOutput)
        } finally {
            consoleSpy.mockReset()
        }
    })



})

describe("Nivå 2", () => {

    test.each([
        ["monday", 5, "stängt"],
        ["tuesday", 7, "öppet"],
        ["wednesday", 15, "öppet"],
        ["thursday", 21, "stängt"],
        ["friday", 23, "stängt"],
        ["saturday", 8, "stängt"],
        ["saturday", 9, "öppet"],
        ["saturday", 15, "öppet"],
        ["saturday", 18, "stängt"],
        ["saturday", 23, "stängt"],
        ["sunday", undefined, "stängt"]
    ])("Uppg. 7, input %s, %s", (weekday, hour, expectedOutput) => {

        const consoleSpy = jest.spyOn(console, 'log');
        o.uppg7(weekday, hour);

        try {
            if (weekday === "sunday") {
                expect(consoleSpy).toBeCalledWith("stängt");
                return;
            }
            expect(consoleSpy).toBeCalledWith(expectedOutput)
        } finally {
            consoleSpy.mockReset()
        }
    })

    test.each([
        [{ username: "Gunnar", password: "Hemligt" }, "Gunnar", "Hemligt", "Authorized"],
        [{ username: "Gunnar", password: "Hemligt" }, "Gunnar", "FelaktigtPass", "UnAuthorized"],
        [{ username: "Gunnar", password: "Hemligt" }, "FelaktigtAnvdNamn", "Hemligt", "UnAuthorized"],
        [{ username: "Gunnar", password: "Hemligt" }, "FelaktigtAnvdNamn", "FelaktigtPass", "UnAuthorized"]
    ])("Uppg. 8, input %s, %s, %s", (user, username, password, expectedOutput) => {

        const result = o.uppg8(user, username, password, expectedOutput);
        expect(result).toBe(expectedOutput);

    })


})

describe("Bonusövningar", () => {

    test.each([
        [{
            username: "Gunnar", isFrozen: false, isDead: false, selectedPrimaryWeapon: { name: "axe", attackModifier: 1.2 }
        }, 24],
        [{
            username: "Gunnar", isFrozen: true, isDead: false, selectedPrimaryWeapon: { name: "axe", attackModifier: 1.2 }
        }, 0],
        [{
            username: "Gunnar", isFrozen: false, isDead: true, selectedPrimaryWeapon: { name: "axe", attackModifier: 1.2 }
        }, 0],
        [{
            username: "Gunnar", isFrozen: false, isDead: false, selectedPrimaryWeapon: undefined
        }, 20],
        [null, undefined]
    ])("Uppg. 9, input %s", (user, expectedOutput) => {

        expect(o.uppg9.toString()).not.toContain("else")

        if (!user) {
            expect(() => o.uppg9(user)).toThrow();
            return;
        }

        const result = o.uppg9(user, expectedOutput);
        expect(result).toBe(expectedOutput);


    })

})


