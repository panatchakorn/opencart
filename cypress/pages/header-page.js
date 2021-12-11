class headerPage {
    elements = {
        logoLink : "[id=logo] > a ",
        searchInput : "[id='search'] >  input",
        searchButton : "#search > * button",
        cartButton : "[id='cart'] > button",
        cartTotal : "#cart-total"
    }
    enterKeyword(keyword){
        cy.get(this.elements.searchInput).should('be.visible').clear().type(keyword)
    }

    clickSearch(){
        cy.get(this.elements.searchButton).click()
    }
    
    search(keyword){
        this.enterKeyword(keyword)
        this.clickSearch()
    }

    get cartTotal(){
        return cy.get(this.elements.cartTotal)
    }
}
export default headerPage