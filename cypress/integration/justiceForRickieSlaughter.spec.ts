/* eslint-disable no-undef */

describe('Visiting /justice-for-rickie-slaughter', function () {
  it('renders a link to the contact form', function () {
    cy.visit('/justice-for-rickie-slaughter');
    cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });
});
