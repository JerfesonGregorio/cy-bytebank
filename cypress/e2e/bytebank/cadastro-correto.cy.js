const { v4: uuidv4 } = require("uuid");

describe("Página de usuário", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Cadastrando um novo usuário com dados corretos", () => {
    const email = `${uuidv4()}@gmail.com`;
    const password = uuidv4();
    cy.intercept({
      method: "POST",
      url: "/",
      hostname: "localhost"
    }).as("routerPost")
    cy.registrarBytebank(email, password);
    cy.wait("@routerPost").its("response.statusCode").should("eq", 201)
    cy.get('[data-test="mensagem-sucesso"]')
    .contains("Usuário cadastrado com sucesso!")
    .should("be.visible");
  });
});
