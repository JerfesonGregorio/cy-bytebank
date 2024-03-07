const el = require("./elements").ELEMENTS;

Cypress.Commands.add("registrarBytebank", (name, email, password) => {
  cy.get(el.btnCadastro).click();

  cy.get(el.nomeCompleto).type(name);
  cy.get(el.email).type(email);
  cy.get(el.senha).type(password);
  cy.get(el.check).check();
  cy.get(el.submeter).click({ force: true });

});
