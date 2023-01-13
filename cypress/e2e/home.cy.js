/// <reference types="cypress" />
import pages from '../pages/Pages';

describe('Basic Home Features', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should work to navigate to the store page', () => {
    pages.getHomePage.shoppingBtnElement.click();
    cy.url().should('include', '/store');
  });

  it('should work to navigate to contact us page', () => {
    pages.getHomePage.findMoreBtnElement.click();
    cy.url().should('include', '/contact-us');
  });

  it('should have five featured products on the home page', () => {
    const homePage = pages.getHomePage;
    homePage.featuredProductsTitleElement.should('have.text', 'Featured Products');
    homePage.featuredProductsElements.should('have.length', 5);
  });

  it('Male cover should navigate to mens store', () => {
    pages.getHomePage.shopNowMenBtnElement.should('have.text', 'Shop Now').click();
    cy.url().should('include', '/men');
  });

  it('Women cover should navigate to womans store', () => {
    pages.getHomePage.shopNowWomenBtnElement.should('have.text', 'Shop Now').click();
    cy.url().should('include', '/women');
  });

  it('Accessories cover should navigate to accessories store', () => {
    pages.getHomePage.shopNowAccessoriesBtnElement.should('have.text', 'Check Out').click();
    cy.url().should('include', '/accessories');
  });
});
