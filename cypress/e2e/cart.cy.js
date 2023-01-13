/// <reference types="cypress" />
import pages from '../pages/Pages';

describe('Basic Features', () => {
  beforeEach(() => {
    const cookies = cy.loginThroughApi({
      username: Cypress.env('username'),
      password: Cypress.env('password'),
    });
    cy.addProductToCartThroughApi({
      cookies: cookies,
      productId: 1208,
      quantity: 1,
    });
    cy.visit('/cart');
  });

  it('should display the correct product on the cart page', () => {
    pages.getCartPage.productNameElements.first().should('contain.text', 'Faint Blue Jeans');
  });

  it('should work to navigate to the checkout page', () => {
    pages.getCartPage.checkOutBtnElement.click();
    cy.url().should('include', '/checkout');
  });

  it('should work to delete an item from the cart', () => {
    const cartPage = pages.getCartPage;
    cartPage.removeThisItemBtnElements.click();
    cartPage.cartIsEmptyDivElement.should('have.text', 'Your cart is currently empty.');
    cartPage.restoreItemDivElement.should('be.visible');
  });

  it('should work to restore an item from the cart', () => {
    const cartPage = pages.getCartPage;
    cartPage.removeThisItemBtnElements.click();
    cartPage.restoreItemDivElement.click();
    cartPage.productNameElements.should('be.visible');
  });
});
