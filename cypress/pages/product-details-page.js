class productDetailsPage{
    elements = {
        pageHeader : "h1",
        priceText : ".col-sm-4 > * h2",
        quantityInput : "#product > * #input-quantity",
        addToCartButton : "#product > * #button-cart",
        productTileHeader : "h4 > a",        
        productTile : "#content > * .product-thumb",
        currentTab : ".active > a",
        alert: "[id=product-product] > .alert",
        shoppingCartButton : "[id='cart'] > button"
    }
    
    enterQuantity(amount){
        cy.get(this.elements.quantityInput).should('be.visible').clear().type(amount)
    }
    clickAddToCart(){
        cy.get(this.elements.addToCartButton).click()
    }
    addTocart(quantity){
        this.enterQuantity(quantity)
        this.clickAddToCart()
    }
    goToShoppingCart(){
        cy.get(this.elements.shoppingCartButton).click()
    }
    
    get pageHeader(){
        return cy.get(this.elements.pageHeader)
    }
    get price(){
        return cy.get(this.elements.priceText)
    }
    
    get currentTab(){
        return cy.get(this.elements.currentTab)
    }
    
    get productTile(){
        return cy.get(this.elements.productTile)
    }
    
    get productTileHeader(){
        return cy.get(this.elements.productTileHeader)
    }
    get alert(){
        return cy.get(this.elements.alert,{timeout:15000}).should('be.visible')
    }
}
export default productDetailsPage