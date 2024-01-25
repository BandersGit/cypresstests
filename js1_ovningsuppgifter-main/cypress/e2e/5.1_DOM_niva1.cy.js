/// <reference types="cypress"/>

beforeEach(() => {
  cy.visit(`localhost:${Cypress.env("SERVER_PORT")}/src/05-DOM_Manipulation/Niva_1/`);
});

describe("DOM Manipulation part 1 tests", () => {
  it("1 - Should have a button that changes color on click", () => {
    cy.get('button[data-testid="col-change-btn"]')
      .invoke("css", "background-color")
      .then((btnColor) => {
        cy.get('button[data-testid="col-change-btn"]').click()
          .invoke("css", "background-color")
          .should("not.eq", btnColor);
      });
  });

  it("2 - Should have a button that changes a paragraphs text", () => {
    cy.get('p[data-testid="paragraph"]')
      .invoke("text")
      .then((text) => {
        cy.get('button[data-testid="para-change-btn"]').click();
        cy.get('p[data-testid="paragraph"]')
          .invoke("text")
          .should("not.eq", text);
      });
  });

  it("3 - Should have a button that replaces an image with another", () => {
    cy.get('img[data-testid="image"').should("be.visible");

    cy.get('img[data-testid="image"')
      .invoke("attr", "src")
      .then((imgSrc) => {
        cy.get('button[data-testid="img-change-btn"]').click();
        cy.get('img[data-testid="image"')
          .invoke("attr", "src")
          .should("not.eq", imgSrc);

        cy.get('img[data-testid="image"').should("be.visible");

        cy.get('button[data-testid="img-change-btn"]').click();
        cy.get('img[data-testid="image"')
          .invoke("attr", "src")
          .should("eq", imgSrc);

        cy.get('img[data-testid="image"').should("be.visible");
      });
  });

  it("4 - Should have a div that changes color on mouseover", () => {
    cy.get('div[data-testid="col-change-div"]')
      .invoke("css", "background-color")
      .then((divColor) => {
        cy.get('div[data-testid="col-change-div"]')
          .trigger("mouseover")
          .invoke("css", "background-color")
          .should("not.eq", divColor);
      });
  });

  it("5 - Should have a button that adds a text element", () => {
    cy.get('button[data-testid="add-text-btn"]').click();

    cy.get('div[data-testid="new-text-div"]').then((div) => {
      cy.wrap(div)
        .children()
        .its("length")
        .then((length) => {
          cy.get('button[data-testid="add-text-btn"]').click();
          cy.wrap(div)
            .children()
            .should("have.length", length + 1);

          cy.wrap(div)
            .children()
            .each((el) => {
              cy.wrap(el).invoke("text").should("not.be.empty");
            });
        });
    });
  });

  it("5 - Should add css styling class", () => {
    cy.get('button[data-testid="add-text-btn"]').dblclick();

    cy.get('div[data-testid="new-text-div"]')
      .children()
      .invoke("attr", "class")
      .should("eq", "text-styling");
  });

  it("6 - Should add list elements to an existing list", () => {
    cy.get('ul[data-testid="ul"]')
      .find("li")
      .its("length")
      .should("be.greaterThan", 1);
  });
});
