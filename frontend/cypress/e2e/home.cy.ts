describe('Home Page', () => {
    it('displays a title', () => {
        cy.visit('/')
        cy.get('[data-testid="home-page-title"]').should('be.visible')
    })
})
