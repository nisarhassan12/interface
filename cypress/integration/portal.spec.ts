/// <references types="Cypress" />
/* eslint-disable no-undef */

describe('Visiting /portal', function () {
  context('as an anonymous user', function () {
    it('redirects the user back to the home screen', function () {
      cy.visit('/portal');
      cy.url().should('not.include', '/portal');
    });
  });
  context('logged in as a portal user', function () {
    it('renders the profile is a user is logged in', function () {
      cy.loginAsPortalUser().then(() => {
        cy.visit('/portal');
        cy.contains('Profile').click();
        cy.url().should('include', '/portal/profile');
      });
    });
  });
});
