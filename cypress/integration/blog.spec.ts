/* eslint-disable no-undef */

describe('Blog page', () => {
  it('has an edit button that loads the edit page on GitHub', () => {
    cy.visit('/blog');
    cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });
});

describe('Setting Up Shop', () => {
  it('has an edit button that loads the edit page on GitHub', () => {
    cy.visit('/blog/setting-up-shop');
    cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });
});
