describe("Formulario", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it("Preenche todos os campos do formulario.", () => {
        cy.visit("/automation-practice-form");
        cy.get('#firstName')
            .clear()
            .type('Cypress');
        cy.get('#lastName')
            .clear()
            .type('Automation');
        cy.get('#userEmail')
            .type('cypress@automation.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
            .click()
        cy.get('#userNumber')
            .clear()
            .type('1234567890');
        cy.get('#dateOfBirthInput')
            .type('12/01/2002{enter}');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)')
            .click();
        cy.get('.form-file-label')
            .selectFile('cypress/fixtures/imgs/cypress.png');
        cy.get('#currentAddress')
            .type('lorem ipsulium generator')
    });
});
