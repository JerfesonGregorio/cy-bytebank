describe("Retornando usuários contidos na api", () => {
    
    // it('Retornando lista de usuarios', () => {

    //     cy.requestUsersProperty('http://localhost:8000/users')
    // });

    // it('Retornando usuário expecífico' , () => {

    //     cy.requestUserRegisted('c691fd15-dcd5-4f24-89da-cdfa3cef9d67')
    // })

    // it('Testando um usuário não cadastrado', () => {
        
    //     cy.requestUserNotFound()
    // });

    it('Interceptando o POST user/login', () => {


        cy.intercept({
            method: "POST",
            url: "users/login",
            hostname: "localhost"
        }).as("loginRequest")

        cy.loginBytebank("neilton@alura.com", "123456")

        // cy.wait("@loginRequest").its("response.statusCode").should("eq", 200)
        cy.wait("@loginRequest").then((interception) => {
            interception.response = {
                statusCode: 200,
                body: {
                    sucess: true,
                    message: 'Login bem sucedido!'
                }
            }
        })
        
        cy.get('[data-test="titulo-boas-vindas"]').should("contain.text", "Bem vindo de volta!")

    });

});