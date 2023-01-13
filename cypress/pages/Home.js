import navigationBarComponent from './common-components/NavigationBar';

class Home {
  get getNavigationBarComponent() {
    return navigationBarComponent;
  }
  get shoppingBtnElement() {
    return cy.get('a[href="/store"]');
  }
  get findMoreBtnElement() {
    return cy.get('.wp-block-button a[href*="/contact-us"]');
  }
  get featuredProductsTitleElement() {
    return cy.get('h2[class="has-text-align-center"]');
  }
  get featuredProductsElements() {
    return cy.get('ul[class*="products"] li');
  }
  get shopNowMenBtnElement() {
    return cy.get('.wp-block-button a[href*="/men"]');
  }
  get shopNowWomenBtnElement() {
    return cy.get('.wp-block-button a[href*="/women"]');
  }
  get shopNowAccessoriesBtnElement() {
    return cy.get('.wp-block-button a[href*="/accessories"]');
  }
}

export default new Home();
