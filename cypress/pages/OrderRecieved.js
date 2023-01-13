import navigationBarComponent from './common-components/NavigationBar';

class OrderRecieved {
  get getNavigationBarComponent() {
    return navigationBarComponent;
  }
  get orderPlacedSuccessMessageElement() {
    return cy.get('.woocommerce-notice--success');
  }
}

export default new OrderRecieved();
