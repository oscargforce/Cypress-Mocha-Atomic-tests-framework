import navigationBarComponent from './common-components/NavigationBar';

class Cart {
  get getNavigationBarComponent() {
    return navigationBarComponent;
  }
  get removeThisItemBtnElements() {
    return cy.get('a[aria-label="Remove this item"]');
  }
  get productNameElements() {
    return cy.get('td[class="product-name"]');
  }
  get increaseQuantityElements() {
    return cy.get('.quantity input');
  }
  get updateCartBtnElement() {
    return cy.get('[name="update_cart"]');
  }
  get checkOutBtnElement() {
    return cy.get('.checkout-button');
  }
  get cartIsEmptyDivElement() {
    return cy.get('.cart-empty');
  }
  get restoreItemDivElement() {
    return cy.get('.restore-item');
  }
}

export default new Cart();
