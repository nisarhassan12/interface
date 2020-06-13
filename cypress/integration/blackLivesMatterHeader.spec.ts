
/* eslint-disable no-undef */

describe('Visiting any page', function () {
  it('renders the #BlackLivesMatter header', function () {
    cy.visit('http://localhost:8000/');
    cy.contains('#BlackLivesMatter').should('be.visible');
    cy.visit('http://localhost:8000/blog');
    cy.contains('#BlackLivesMatter').should('be.visible');
    cy.visit('http://localhost:8000/upward-mobility');
    cy.contains('#BlackLivesMatter').should('be.visible');
  });
});
