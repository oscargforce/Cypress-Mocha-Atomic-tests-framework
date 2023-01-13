class NavigationBar {
  get cartBtnElement() {
    return cy.get(
      ".ast-primary-header-bar > .site-primary-header-wrap > .ast-builder-grid-row > .site-header-primary-section-right > .ast-header-woo-cart > #ast-site-header-cart > .ast-site-header-cart-li > .cart-container > .ast-cart-menu-wrap > .count"
    );
  }
}

export default new NavigationBar();
