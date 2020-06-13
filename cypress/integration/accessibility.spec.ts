/* eslint-disable no-undef */

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('main')
      .injectAxe();
  });
  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y();
    cy.contains('I Accept').click();
    cy.contains('Switch to').click();
    cy.checkA11y();
  });
});
