/// <reference types="cypress" />
/* eslint-disable no-undef */

describe('Visiting /', function () {
  it('renders a link to the contact form', function () {
    cy.visit('http://localhost:8000');
    cy.contains('Contact').click();
  });
});
