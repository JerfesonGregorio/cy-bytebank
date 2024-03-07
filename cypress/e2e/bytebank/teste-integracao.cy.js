const { v4: uuidv4 } = require("uuid");

describe('Teste de cadastro de usuario', () => {
    

    it('Um novo usuário deve ser cadastrado com sucesso', () => {

        const name = 'Jerfeson'
        const email = `${uuidv4()}@gmail.com`;
        const password = uuidv4();


        cy.visit('/')
        cy.registrarBytebank(name, email, password)
        cy.loginBytebank(email, password)

        cy.request()




    })



});