const el = require("./elements").ELEMENTS;

Cypress.Commands.add("loginBytebank", (email, password) => {
  cy.get(el.btnLogin).click();

  cy.get(el.email).type(email);
  cy.get(el.senha).type(password);
  
  cy.get(el.btnAcessar).click();
});
