describe('Retornando usuários contidos na api', () => {
    
    it('retornando lista de usuarios', () => {

        cy.requestUsersProperty('http://localhost:8000/users')
    });

    it('retornando usuario expecífico' , () => {

        cy.requestUserRegisted('c691fd15-dcd5-4f24-89da-cdfa3cef9d67')
    })

});