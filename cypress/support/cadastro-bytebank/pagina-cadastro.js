const el = require("./elements").ELEMENTS;

Cypress.Commands.add("registrarBytebank", (email, password) => {
  cy.get(el.btnCadastro).click();

  cy.get(el.nomeCompleto).type("cccc");
  cy.get(el.email).type(email);
  cy.get(el.senha).type(password);
  cy.get(el.check).check();
  cy.get(el.submeter).click({ force: true });

});
