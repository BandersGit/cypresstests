/// <reference types="cypress"/>

const testIp = "127.0.0.1"
const testCountry = "country_stub"
const testCity = "city_stub"
const testIsp = "ISP_stub"
const testLat = 54.8888
const testLon = 12.0410
const testTemp = "temp_stub"

beforeEach(() => {
    cy.visit(`http://localhost:${Cypress.env("SERVER_PORT")}/src/07-Fetch/2_apier/`);
});

describe("API:er - Nivå 2", () => {

    const testAuthor = "test-author"
    const testQuote = "test-quote"

    it("1. Should display fetched quote and author", () => {

        cy.intercept("https://api.quotable.io/random", {
            body: {
                author: testAuthor,
                content: testQuote
            }
        })

        cy.get('[data-testid="random-quote-btn"]').click()

        cy.get('[data-testid="random-quote')
            .should('contain', testQuote)
            .should('be.visible')

        cy.get('[data-testid="random-quote-author')
            .should('contain', testAuthor)
            .should('be.visible')
    });



    it("2. Should display image from fetched image source", () => {

        const imagePath = "https://images.dog.ceo/breeds/pekinese/n02086079_10373.jpg"

        cy.intercept("https://dog.ceo/api/breeds/image/random", { message: imagePath })

        cy.get('[data-testid="dog-btn"').click()

        cy.get('[data-testid="dog-img"')
            .should('be.visible')
            .invoke('attr', 'src')
            .should('eq', imagePath)
    })

    it("3. Should display fetched ip location information", () => {

        cy.intercept("https://api.ipify.org/?format=json", { ip: testIp })
        cy.intercept(`http://ip-api.com/json/${testIp}`, {
            country: testCountry,
            city: testCity,
            isp: testIsp,
            lat: testLat,
            lon: testLon
        })
        cy.intercept(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${testLat}&lon=${testLon}`, { properties: { timeseries: [{ data: { instant: { details: { air_temperature: testTemp } } } }] } })

        cy.get('[data-testid="ip-btn"]').click()

        cy.get('[data-testid="ip"]')
            .should('contain', testIp)
            .should('be.visible')

        cy.get('[data-testid="ip-country"]')
            .should('contain', testCountry)
            .should('be.visible')

        cy.get('[data-testid="ip-city"]')
            .should('contain', testCity)
            .should('be.visible')

        cy.get('[data-testid="ip-isp"]')
            .should('contain', testIsp)
            .should('be.visible')

    })

})

describe("API:er - Bonusnivå", () => {

    it('4. Bonus - Should display fetched ip location weather and map', () => {

        cy.intercept("https://api.ipify.org/?format=json", { ip: testIp })
        cy.intercept(`http://ip-api.com/json/${testIp}`, {
            country: testCountry,
            city: testCity,
            isp: testIsp,
            lat: testLat,
            lon: testLon
        })
        cy.intercept(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${testLat}&lon=${testLon}`, { properties: { timeseries: [{ data: { instant: { details: { air_temperature: testTemp } } } }] } })

        cy.get('[data-testid="ip-btn"]').click()

        cy.get('[data-testid="ip-weather"]')
            .should('contain', testTemp)
            .should('be.visible')

        cy.get('[data-testid="ip-map"]')
            .invoke('attr', 'src')
            .should('contain', testLon)
    })

    it('5. Bonus - Should display alert when status code is not in the 200 range', () => {

        cy.intercept("https://api.quotable.io/random", { statusCode: 403 })

        const stub = cy.stub()
        cy.on('window:alert', stub)

        cy.get('[data-testid="random-quote-btn"]').click()
            .then(() => {
                expect(stub).to.have.been.calledOnce
            })
    })

    it('5. Bonus - Should display alert on network error', () => {

        cy.intercept("https://api.quotable.io/random", { forceNetworkError: true })

        const stub = cy.stub()
        cy.on('window:alert', stub)

        cy.get('[data-testid="random-quote-btn"]').click()
            .then(() => {
                expect(stub).to.have.been.calledOnce
            })
    })
})

