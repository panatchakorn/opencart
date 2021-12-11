class shoppingcartPage {
    elements = {
        pageHeader : "h1",
        checkoutButton : "a.btn.btn-primary"
    }
    
    clickCheckout(){
        cy.get(this.elements.checkoutButton).click()
    }

    get pageHeader(){
        return cy.get(this.elements.pageHeader)
    }
}
export default shoppingcartPage