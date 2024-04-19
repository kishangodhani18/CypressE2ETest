describe('Fast.com Network Speed Checker Test', () => {
  it('should check web speed on fast.com', () => {
    cy.log('Web Speed Checker');
    cy.visit('https://fast.com/');
    cy.wait(10000); // Wait for speed test, adjust as needed
    cy.log('Get Title:' + Cypress.$('title').text());
  });
});
