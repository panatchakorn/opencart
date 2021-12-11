class resultsPage{
    elements = {
        pageHeader : "h1",
        sectionHeader : "h2",
        productTileCountText : ".text-right",
        productTileHeader : "h4 > a",        
        productTile : "#content > * .product-thumb"

    }
    get pageHeader(){
        return cy.get(this.elements.pageHeader)
    }
    get resultsHeader(){
        return cy.get(this.elements.sectionHeader)
    }
    get productTile(){
        return cy.get(this.elements.productTile)
    }
    get productTilePageCount(){
        return cy.get(this.elements.productTileCountText)
    }
    get productTileHeader(){
        return cy.get(this.elements.productTileHeader)
    }
}
export default resultsPage