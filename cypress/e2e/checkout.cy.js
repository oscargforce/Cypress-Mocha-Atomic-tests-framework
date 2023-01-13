/// <reference types="cypress" />
import pages from '../pages/Pages';
import checkoutData from '../fixtures/checkout.json';

describe('Basic Features', () => {
  it('should work to fill in the checkout form and to place order', () => {
    const cookies = cy.loginThroughApi({
      username: Cypress.env('username'),
      password: Cypress.env('password'),
    });
    cy.addProductToCartThroughApi({
      cookies: cookies,
      productId: 1208,
      quantity: 1,
    });
    cy.visit('/checkout');

    const checkoutPage = pages.getCheckoutPage;
    checkoutPage.fillInCheckoutForm(checkoutData);
    checkoutPage.placeOrderBtnElement.click();

    pages.getOrderRecievedPage.orderPlacedSuccessMessageElement.should(
      'have.text',
      'Thank you. Your order has been received.'
    );
  });

  it('should say your cart is empty if no items are in it and ask to return to the shop.', () => {
    const checkoutPage = pages.getCheckoutPage;
    cy.visit('/checkout');

    checkoutPage.cartIsEmptyDivElement.should('have.text', 'Your cart is currently empty.');
    checkoutPage.returnToShopBtnElement.should('contain.text', 'Return to shop').click();
    cy.url().should('include', '/store');
  });
});
