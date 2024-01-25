/// <reference types="cypress"/>

beforeEach(() => {
  cy.visit(`localhost:${Cypress.env("SERVER_PORT")}/src/06-Formular/Niva_1/`);
});

describe("DOM tests", () => {
  it("1 - Should display input words in reverse order", () => {
    //given
    const inputString = "ett två tre";
    const outputString = "tre två ett";

    //when
    cy.get('[data-testid="reverse-input"]')
      .type(inputString);

    //then
    cy.contains(outputString)
      .should("exist");
  });

  it("2 - Should display the number of vowels in the input", () => {
    //given
    const inputString = "Hej Hoj Haj Haj Hyj Höj";
    const vowelsOutputString = "eoayö";
    const numberOutputString = "6";

    //when
    cy.get('[data-testid="vowels-input"]')
      .type(inputString);

    //then
    cy.contains(vowelsOutputString)
      .should("exist");
    cy.contains(numberOutputString)
      .should("exist");
  });

  it("3 - Should display initials of name input", () => {
    //given
    const inputString = "John Oscar Carl Doe";
    const outputString = "JOCD";

    //when
    cy.get('[data-testid="name-input"]')
      .type(inputString);

    //then
    cy.contains(outputString)
      .should("exist");
  });

  it("4 - Should display a formatted version of the phone number input", () => {
    //given
    const inputString = "1234567890";
    const outputString = "123-456 78 90";

    //when
    cy.get('[data-testid="phone-input"]')
      .type(inputString);

    //then
    cy.contains(outputString)
      .should("exist");
  });

  /* const array = [["abc", "Weak"], ["Abc", "Ok"], ["Abc2", "Good"], ["Abc2!", "Great"], ["AbcAbc2!", "Excellent"]]
  
  array.forEach(args => {

    it('Should display "' + args[1] + '" when input is "' + args[0] + '"', () => {

      //given
      const inputString = args[0]
      const outputString = args[1]

      //when
      cy.get('[data-testid="password-input"]').type(inputString)

      //then
      cy.contains(outputString).should('exist')

    })
    
  }) */

  it('5 - Should have a username input with type: "text" inside a form', () => {
    //given
    cy.get('form [data-testid="nameInput"]')

      //when
      .invoke("attr", "type")

      //then
      .should("eq", "text");
  });

  it('5 - Should have a email input with type: "email" inside a form', () => {
    //given
    cy.get('form [data-testid="emailInput"]')

      //when
      .invoke("attr", "type")

      //then
      .should("eq", "email");
  });

  it('5 - Should have a username input with type: "password" inside a form', () => {
    //given
    cy.get('form [data-testid="passwordInput"]')

      //when
      .invoke("attr", "type")

      //then
      .should("eq", "password");
  });

  it("5 - Should have a warning text when some , but not all input fields have text", () => {
    //given & when
    cy.get('form [data-testid="nameInput"]')
      .type("input");
    cy.get('form [data-testid="emailInput"]')
      .type("input@input");

    //then
    cy.contains("Alla fält måste vara ifyllda")
      .should("exist");
  });

  it("5 - Should have a warning text that disappears when all input fields have text", () => {
    //given & when
    cy.get('form [data-testid="nameInput"]')
      .type("input");
    cy.get('form [data-testid="emailInput"]')
      .type("input@input");
    cy.get('form [data-testid="passwordInput"]')
      .type("input");

    //then
    cy.contains("Alla fält måste vara ifyllda")
      .should("not.exist");
  });

  it("5 - Should have a button that is disabled when no inputs have text inside a form", () => {
    //given
    cy.get("form button")

      //when
      .invoke("attr", "disabled")

      //then
      .should("exist");
  });

  it("5 - Should enable button when all inputs have text", () => {
    //given & when
    cy.get('form [data-testid="nameInput"]')
      .type("input");
    cy.get('form [data-testid="emailInput"]')
      .type("input@input");

    cy.get("form button")
      .invoke("attr", "disabled")

      //then
      .should("exist");

    //given & when
    cy.get('form [data-testid="passwordInput"]')
      .type("input");

    cy.get("form button")
      .invoke("attr", "disabled")

      //then
      .should("not.exist");
  });
});
