/// <reference types="cypress"/>

beforeEach(() => {

    cy.intercept('data.json', { fixture: 'testdata.json' })

    cy.intercept('data.json', cy.spy().as('myRequest'))

    cy.visit("localhost:5500/src/07-Fetch/1_latte_lux/");
});

describe('Fetch level 1 tests', () => {

    it('Should fetch data.json', () => {

        cy.get('@myRequest').should('have.been.calledOnce');

    })

    it('Should add elements to DOM through javascript', () => {

        cy.get('[data-testid="coffee-item"]').each(($item) => {
            cy.wrap($item)
                .find('[data-testid="coffee-name"]')
                .should('exist')
                .should('be.visible')

            cy.wrap($item)
                .find('[data-testid="coffee-price"]')
                .should('exist')
                .should('be.visible')

            cy.wrap($item)
                .find('[data-testid="quantity-buttons"]')
                .should('exist')
                .should('be.visible')

            cy.wrap($item)
                .find('[data-testid="add-button"]')
                .should('exist')
                .should('be.visible')

            cy.wrap($item)
                .find('[data-testid="quantity"]')
                .should('exist')
                .should('be.visible')

            cy.wrap($item)
                .find('[data-testid="sub-button"]')
                .should('exist')
                .should('be.visible')
        })
    })

    it('Should add coffee name and price from json file', () => {
        let index = 0;
        cy.get('[data-testid="coffee-item"]').each(($item) => {

            cy.fixture('testdata.json').then((dataItem) => {
                cy.wrap($item)
                    .find('[data-testid="coffee-name"]')
                    .invoke('text')
                    .should('eq', dataItem[index].coffee)

                cy.wrap($item)
                    .find('[data-testid="coffee-price"]')
                    .invoke('text')
                    .should('eq', `${dataItem[index].price} kr`)

                index++
            })
        })
    })

    it("Should display the correct quantity of added coffee items", () => {
        cy.get('[data-testid="coffee-item"]').each(($item) => {
            cy.wrap($item)
                .find('[data-testid="quantity"]')
                .as("quantity")
                .invoke("text")
                .then((quantValue) => {
                    cy.wrap($item).find('[data-testid="add-button"]').click().click();
                    cy.get("@quantity").should("have.text", parseInt(quantValue) + 2);
                });
        });
    });

    it("Should display the correct quantity of coffee items after subtract button is clicked", () => {
        cy.get('[data-testid="coffee-item"]').each(($item) => {
            cy.wrap($item)
                .find('[data-testid="quantity"]')
                .as("quantity")
                .invoke("text")
                .then((quantValue) => {
                    cy.wrap($item).find('[data-testid="add-button"]').click().click();
                    cy.wrap($item).find('[data-testid="sub-button"]').click();
                    cy.get("@quantity").should("have.text", parseInt(quantValue) + 1);
                });
        });
    });

    it("Should display total cost of added and reduced coffee items", () => {
        let result = 6;
        cy.get('[data-testid="coffee-item"]')
            .each(($item) => {
                cy.wrap($item).find('[data-testid="add-button"]').click().click();
                cy.wrap($item).find('[data-testid="sub-button"]').click();
            })
            .then(() => {
                cy.get('[data-testid="total-amount"]').should("contain", result);
            });
    });
}) 