/// <reference types= "cypress" />
const expectedcurrency = "SAR";
const expectedAttribute = "lang"
const expectedlanguge = "en"

describe("aspir test cases ", () => {
  it.skip("check the currency sar", () => {
    cy.visit("https://www.almosafer.com/en?ncr=1.io");
    cy.get(".cta__saudi").click();
    cy.get('[data-testid="Header__CurrencySelector"]')
      .invoke("text")
      .should("include", expectedcurrency);
  });

  it("check the languge of the website ", () => {
    cy.visit("https://www.almosafer.com/en?ncr=1.io");

    cy.get(".cta__saudi").click();

    cy.get('html').should('have.attr',expectedAttribute,expectedlanguge)
  });
});
