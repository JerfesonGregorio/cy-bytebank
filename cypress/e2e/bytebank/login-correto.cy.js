const { v4: uuidv4 } = require("uuid");

beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

it("acessando conta cadastrada", () => {
  const email = `${uuidv4()}@gmail.com`;
  const password = uuidv4();

  cy.intercept({
    method: "POST",
    url: "public/cadastrar",
    hostname: "localhost",
  }).as("registerRouter");
  cy.registrarBytebank(email, password);
  cy.wait("@registerRouter").its("response.statusCode").should("eq", 201);

  cy.wait(1000);

  cy.intercept({
    method: "POST",
    url: "public/login",
    hostname: "localhost",
  }).as("loginRouter");
  cy.loginBytebank(email, password);
  cy.wait("@loginRouter").its("response.statusCode").should("eq", 201);

  cy.url().should("include", "/home");
  cy.get(`[data-test="app-home"]`).should("be.visible")
});
