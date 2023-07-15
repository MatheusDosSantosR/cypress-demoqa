describe("Login.", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it("Invalido usuario e senha.", () => {
        cy.visit("/login");
        cy.get('#userName')
            .type('userName');
        cy.get('#password')
            .type('password');
        cy.get('#login')
            .click();
        cy.get('#name')
            .should('have.text', 'Invalid username or password!');
    });

    it.only("Registrar conta.", () => {
        cy.visit("/login");
        cy.get('#newUser')
            .click();
        cy.get('#firstname')
            .type('first Namee');
        cy.get('#lastname')
            .type('last namue');
        cy.get('#userName')
            .type('teste321');
        cy.get('#password')
            .type('123456');
        cy.get('#register')
            .click();
        
    });
});
