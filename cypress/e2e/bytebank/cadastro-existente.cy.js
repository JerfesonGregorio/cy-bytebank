const { v4: uuidv4 } = require("uuid");

describe("Página de usuário", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Cadastrando um novo usuário existente ", () => {
    const email = `${uuidv4()}@gmail.com`;
    const password = uuidv4();
    cy.intercept({
      method: "POST",
      url: "/",
      hostname: "localhost"
    }).as("routerPost")
    cy.registrarBytebank(email, password);
    cy.wait("@routerPost").its("response.statusCode").should("eq", 201)
    cy.registrarBytebank(email, password);
    cy.get('[data-test="mensagem-erro"]')
    .contains("E-mail já cadastrado!")
    .should("be.visible")
    cy.wait("@routerPost").its("response.statusCode").should("eq", 401)
  });
});