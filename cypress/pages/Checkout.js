import navigationBarComponent from './common-components/NavigationBar';

class Checkout {
  get getNavigationBarComponent() {
    return navigationBarComponent;
  }
  get cartIsEmptyDivElement() {
    return cy.get('p[class*="cart-empty"]');
  }
  get returnToShopBtnElement() {
    return cy.get('a[class*="wc-backward"]');
  }
  get invalidInputErrorMsgElement() {
    return cy.get('.woocommerce-error');
  }

  get placeOrderBtnElement() {
    return cy.get('#place_order');
  }

  fillInCheckoutForm({
    firstName,
    lastName,
    country,
    streetAdress,
    city,
    zipCode,
    phoneNum,
    email,
  }) {
    cy.get('#billing_first_name').type(firstName);
    cy.get('#billing_last_name').type(lastName);

    cy.get('#select2-billing_country-container').click();
    cy.get('#select2-billing_country-results li').each((element, index) => {
      const currentCountry = element.text();
      if (currentCountry.toLowerCase() === country.toLowerCase()) {
        return cy.get('#select2-billing_country-results li').eq(index).click();
      }
    });

    cy.get('#billing_address_1').type(streetAdress);
    cy.get('#billing_city').type(city);
    cy.get('#billing_postcode').type(zipCode);
    cy.get('#billing_phone').type(phoneNum);
    if (!cy.get('#billing_email').then(($el) => $el.val())) cy.get('#billing_email').type(email);
  }
}

export default new Checkout();
