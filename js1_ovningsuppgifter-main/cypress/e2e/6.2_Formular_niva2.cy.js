/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit(`localhost:${Cypress.env("SERVER_PORT")}/src/06-Formular/Niva_2/`);

    cy.get('div[data-testid="login-div"]').as("loginDiv");
    cy.get('div[data-testid="reg-div"]').as("regDiv");
    cy.get('button[data-testid="enter-button"]').as("enterButton");
});

describe("Crows Nest Tests", () => {
    it("Should not display login and register forms on load", () => {
        cy.get("@loginDiv").should("not.be.visible");

        cy.get("@regDiv").should("not.be.visible");
    });

    it("Should display login-form on landingpage-button click", () => {
        cy.get("@enterButton").click();
        cy.get("@loginDiv").should("be.visible");
    });

    it("Should display register-form and hide login-form on register-link click", () => {
        cy.get("@enterButton").click();

        cy.get("@loginDiv").find('a[data-testid="register-link"]').click();

        cy.get("@loginDiv").should("not.be.visible");

        cy.get("@regDiv").should("be.visible");
    });

    it("Should display login-form and hide register-form on register-button click", () => {
        cy.get("@enterButton").click();

        cy.get("@loginDiv").find('a[data-testid="register-link"]').click();

        cy.get("@regDiv").find('button[data-testid="register-button"]').click();

        cy.get("@regDiv").should("not.be.visible");

        cy.get("@loginDiv").should("be.visible");

    });

    it("Should close forms when login 'X' is clicked", () => {
        cy.get("@enterButton").click();

        cy.get("@loginDiv").find('[data-testid="close-login"]').click();

        cy.get("@loginDiv").should("not.be.visible");

        cy.get("@regDiv").should("not.be.visible");
    });

    it("Should close forms when register 'X' is clicked", () => {
        cy.get("@enterButton").click();

        cy.get("@loginDiv").find('a[data-testid="register-link"]').click();

        cy.get("@regDiv").find('[data-testid="close-register"]').click();

        cy.get("@loginDiv").should("not.be.visible");

        cy.get("@regDiv").should("not.be.visible");
    });

    it("Should display account information in login-form after registering", () => {
        const email = "test@test.com"
        const password = "test123"

        cy.get("@enterButton").click();

        cy.get("@loginDiv").find('a[data-testid="register-link"]').click();

        cy.get("@regDiv").find('input[data-testid="register-email"]').type(email)
        cy.get("@regDiv").find('input[data-testid="register-password"]').type(password)

        cy.get("@regDiv").find('button[data-testid="register-button"]').click();

        cy.get("@loginDiv").find('input[data-testid="login-email"]').should('have.value', email)
        cy.get("@loginDiv").find('input[data-testid="login-password"]').should('have.value', password)
    });
});