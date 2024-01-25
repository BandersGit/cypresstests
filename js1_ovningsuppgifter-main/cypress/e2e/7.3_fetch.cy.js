/// <reference types="cypress"/>

beforeEach(() => {


  cy.intercept(
    { method: "GET", url: "http://localhost:3000/posts" },
    {
      body: [{
        "id": 1,
        "title": "Först!!!!",
        "content": "Hej allihopa, jag var först! Vem av er blir tvåa på att skriva i gästboken?",
        "author": "Alice"
      }]
    })
  cy.visit(`http://localhost:${Cypress.env("SERVER_PORT")}/src/07-Fetch/3_backend/`);

});

describe("Submitting and getting posts", () => {

  it("1 - Should get and display initial posts on load", () => {

    cy.contains("Alice")
    cy.contains("Först!!!!")
    cy.contains("Hej allihopa, jag var först! Vem av er blir tvåa på att skriva i gästboken?")


  });

  it("2 - Post send values from the form correctly", () => {

    const apiUrl = "http://localhost:3000/posts"
    const author = "Gunnar"
    const title = "TestTitle"
    const content = "TestContent"


    cy.intercept({ method: 'POST', url: apiUrl }, { statusCode: 201 }).as("submit")


    cy.get('input[name="author"]').type(author)
    cy.get('input[name="title"]').type(title)
    cy.get('textarea[name="content"]').type(content)

    cy.get('input[data-testid="submit-btn"]')
      .click()

    cy.wait("@submit")
      .its('request.body')
      .then(body => {
        expect(body).to.have.property("author", author)
        expect(body).to.have.property("title", title)
        expect(body).to.have.property("content", content)
      })


  });

  it("3 - update without user interaction when new posts have added to the backend", () => {

    const apiUrl = "http://localhost:3000/posts"
    const author = "Gunnar"
    const title = "TestTitle"
    const content = "TestContent"


    cy.contains("Alice")
    cy.contains("Först!!!!")
    cy.contains("Hej allihopa, jag var först! Vem av er blir tvåa på att skriva i gästboken?")
    cy.should("not.contain", "Gunnar")
    cy.should("not.contain", "Attans, jag som trodde jag var så snabb")

    cy.intercept(
      { method: "GET", url: "http://localhost:3000/posts" },
      {
        body: [{
          "id": 1,
          "title": "Först!!!!",
          "content": "Hej allihopa, jag var först! Vem av er blir tvåa på att skriva i gästboken?",
          "author": "Alice"
        },
        {
          "id": 2,
          "title": "Hej",
          "content": "Attans, jag som trodde jag var så snabb",
          "author": "Gunnar"
        }]
      })


    cy.contains("Gunnar")
    cy.contains("Attans, jag som trodde jag var så snabb")


  });

});
