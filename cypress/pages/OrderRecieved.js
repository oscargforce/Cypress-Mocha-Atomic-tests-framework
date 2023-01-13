import navigationBarComponent from './common-components/NavigationBar';

class OrderRecieved {
  get getNavigationBarComponent() {
    return navigationBarComponent;
  }
  get successPlacedOrderDivElement() {
    return cy.get('.woocommerce-notice--success');
  }
}

export default new OrderRecieved();
