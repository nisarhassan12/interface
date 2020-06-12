/// <reference types="cypress" />
/* eslint-disable no-undef */

describe('Blog page', () => {
  beforeEach(() => {
    cy.visit('/blog');
  });
  it('has an edit button that loads GitHub', () => {
    cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });
});
