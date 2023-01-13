 class searchComponent{

     searchInput(product){
        return cy.get('#woocommerce-product-search-field-0').type(product)
    }
     clickOnSearchButton(){
        return cy.get('button[type="submit"]').eq(0).click()
    }
}

export default new searchComponent


