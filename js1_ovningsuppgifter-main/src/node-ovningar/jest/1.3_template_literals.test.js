const o = require("../1.3_template_literals")

describe("Nivå 1", () => {

    test("Uppg. 1", () => {
        expect(o.uppg1.toString(), "Expected it to be written as `Hej ${username}`").toContain("`Hej ${username}`")
    })

})


