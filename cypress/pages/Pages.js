import Home from "./Home";
import Store from "./store/Store";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderRecieved from "./OrderRecieved";

class Pages {
  get getHomePage() {
    return Home;
  }
  get getStorePage() {
    return Store;
  }
  get getCartPage() {
    return Cart;
  }
  get getCheckoutPage() {
    return Checkout;
  }
  get getOrderRecievedPage(){
    return OrderRecieved
  }
}

export default new Pages();
