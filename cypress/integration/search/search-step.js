import { Given , When, Then, And } from "cypress-cucumber-preprocessor/steps"
import headerPage from '../../pages/header-page'
import productDetailsPage from '../../pages/product-details-page'
import resultsPage from '../../pages/results-page'

const header = new headerPage()
const results = new resultsPage()
const details = new productDetailsPage()

let selectedProductTitle = '' // to store selected product title and will be used for comparison in assertion

beforeEach(() => {
    Given('As a user of the website', () => {
        cy.visit('/')
    })
})
  
	When('I search for {string}',(keyword) => {
        header.search(keyword)
    }) 
    
    Then('I see the results page',() => {
        results.resultsHeader.should('have.text','Products meeting the search criteria')
    })

    And('the result shows matches product {string}', (keyword) => {
        //Check no match message should not appear on the page
        cy.get('p').should('not.have.text','There is no product that matches the search criteria.') 
        
        //Check number of product tiles showing on the results page
        let resultsTileCount = 0
        results.productTile.then((productTileCount) => {
            resultsTileCount = Cypress.$(productTileCount).length
            cy.log('No. of matches product tile is : ' + resultsTileCount)
            results.productTilePageCount.should('include.text','Showing 1 to ' + resultsTileCount)
        })

        // System returns all products when spaces are entered for search keyword
        // Only check product title when user has entered a search keyword
        if (keyword.trim() != ''){            
            results.productTileHeader.contains(keyword, {matchCase: false})   
        }        
    })

    And('the result shows no match message {string}',(message) => {
        cy.contains(message)        
    })

    Given('As a user viewing the search results', () => {
        cy.visit('/')
        header.search('  ')
    }) 
        
before(() => {
    When('I select a product {string}', (itemNumber) => {
        results.productTileHeader.eq(itemNumber).then(($title) => {
            selectedProductTitle = ($title.text())
            cy.log("User select product title : "+ selectedProductTitle)
        })
        results.productTileHeader.eq(itemNumber).click()
    })   
})
    
    Then('I see full product details', () => {
        details.pageHeader.should('have.text',selectedProductTitle)
        details.price.should('be.visible').should('include.text','$')
        details.currentTab.should('be.visible').should('have.text','Description')        
        //cy.log('selected product title is : ' +selectedProductTitle)
    }) 

afterEach(() => {
    cy.screenshot()
})
    