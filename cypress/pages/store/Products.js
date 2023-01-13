class ProductsPage {
  addProductToCart(productName) {
    cy.get(`a[aria-label*="“${productName}”"]`).click();
  }
  get productsDiv() {
    return cy.get('ul[class="products columns-4"] li');
  }
  productTitle({ index }) {
    return this.productsDiv.eq(index).find('h2');
  }
}

export default new ProductsPage();
