Cypress.Commands.add('login', (user, password) => { 

    cy.get('[data-test="loginUserName"]').type(user);
    cy.get('[data-test="loginPassword"').type(password);
    cy.get('[data-test="loginBtn"').click();

})

Cypress.Commands.add('register', (email, fullName, userName, password) => {

    cy.get('[data-test="register"]').click()
    cy.get('[data-test="email"]').type(email)
    cy.get('[data-test="fullName"]').type(fullName)
    cy.get('[data-test="registerUserName"]').type(userName)
    cy.get('[data-test="registerPassword"]').type(password)
    cy.get('[data-test="btnRegister"]').click()
    
})
