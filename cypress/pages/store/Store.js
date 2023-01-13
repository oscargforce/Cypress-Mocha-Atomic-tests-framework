import productPage from "./Products";
import searchComponent from "./Search";
import navigationBarComponent from "../common-components/NavigationBar";

class Store {
  searchForAProduct(product) {
    searchComponent.searchInput(product);
    searchComponent.clickOnSearchButton();
  }
  addProductToCart(product) {
    productPage.addProductToCart(product);
  }

  get getNavigationBarComponent() {
    return navigationBarComponent;
  }

  get getProductsComponent() {
    return productPage;
  }
}

export default new Store();
