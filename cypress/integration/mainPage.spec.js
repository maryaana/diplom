describe('tests for main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display last six projects', () => {
    cy.get('.projectCardContainer').should('have.length', 6);
  });

  it('should slide reviews in gallery', async () => {
    let text = await cy.get('.lastReviewsGalleryContentText').first();
    text = text.text();
    cy.get('.lastReviewsControlArrowsWrapper svg').last().click();
    cy.wait(1000);
    cy.get('.lastReviewsGalleryContentText').first().should('not.have.text', text);
  });

  it('should display any news', () => {
    cy.get('.blogCardContainer').should('not.have.length', 0);
  });

  it('should open custom select', () => {
    cy.get('.formSelectRoot').first().click();
    cy.wait(1000);
    cy.get('.formSelectOptions').should('be.visible');
  });

  it('should handle menu logic', () => {
    cy.get('.menuButton').first().click();
    cy.wait(1000);
    cy.get('.menuModal').should('be.visible');
    cy.get('.menuCloseButton').first().click();
    cy.wait(1000);
    cy.get('.menuModal').should('not.exist');
  });
});
