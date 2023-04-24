describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://facebook.com')
    cy.title()
  })
})
