/// <reference types="cypress" />
import pages from '../pages/Pages';

describe('Basic Features', () => {
  beforeEach(() => {
    cy.visit('/store');
  });

  it('should work to search for a product', () => {
    pages.getStorePage.searchForAProduct('blue');
    pages.getStorePage.getProductsComponent
      .productTitle({ index: 0 })
      .should('contain.text', 'Blue');
  });

  it('should work to add a product to cart', () => {
    pages.getStorePage.addProductToCart('Basic Blue Jeans');
    pages.getStorePage.getNavigationBarComponent.cartBtnElement.should('contain.text', '1');
  });

  it('should work to navigate to the cart page', () => {
    pages.getStorePage.getNavigationBarComponent.cartBtnElement.click();
    cy.url().should('include', '/cart/');
  });
});
