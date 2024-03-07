
Cypress.Commands.add("requestUsersProperty", (param) => {

    cy.request('GET', param).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).length.to.be.greaterThan(1);

        response.body.forEach(el => {

            expect(el).to.have.property('nome');
            expect(el).to.have.property('email');
            expect(el).to.have.property('transacoes');
            expect(el).to.have.property('senha');
        });

    })
})

Cypress.Commands.add("requestUserRegisted", (id) => {
    cy.request({
        method: 'GET',
        url: `http://localhost:8000/users/${id}`
    }).then((response) => {
        expect(response.status).to.eq(200);
        console.log(response.body.nome, response.body.email);
    })
})

Cypress.Commands.add("requestUserNotFound", () => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:8000/users/¨',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(404)
        expect(response.body).to.eq('Not Found')
    })
})
