import { Given , When, Then, And } from "cypress-cucumber-preprocessor/steps"
import headerPage from '../../pages/header-page'
import productDetailsPage from '../../pages/product-details-page'
import resultsPage from '../../pages/results-page'
import topNavigationPage from '../../pages/top-navigation-page'
import shoppingCartPage from '../../pages/shopping-cart-page'
import checkoutPage from '../../pages/checkout-page'

const topNavigation = new topNavigationPage()
const header = new headerPage()
const results = new resultsPage()
const details = new productDetailsPage()
const shoppingCart = new shoppingCartPage()
const checkout = new checkoutPage()

let totalItemCount

    Given('As a user of the {string} product details page', (keyword) => {
        cy.visit('/')
        header.search(keyword)
        results.productTileHeader.first().click()
        details.pageHeader.should('be.visible')
    }) 
before(() => {
    When('I add {string} item to the shopping cart', (quantity) => {
        let cartTotalBefore
        header.cartTotal.then(($totalItem) => {
            cartTotalBefore = ($totalItem.text())
            cartTotalBefore = cartTotalBefore.split('i')[0].trim() // take the quantity before the word item from the shopping cart button
            cy.log('Cart total before is  ' + cartTotalBefore)
            details.addTocart(quantity)
            totalItemCount = parseInt(cartTotalBefore) + parseInt(quantity)
            cy.log('item count before: ' + cartTotalBefore + ' adding quantity ' + quantity + ' = ' + totalItemCount) 
        })
        
    }) 
})   
    
    Then('the item is added to the shopping cart',() => {
        details.alert.should('include.text','Success: You have added')        
        let cartTotalAfter
        header.cartTotal.then(($totalItem) => {
            cartTotalAfter = ($totalItem.text())
            cartTotalAfter = cartTotalAfter.split('i')[0].trim() // take the quantity before the word item from the shopping cart button
            cy.log('Cart total after is  ' + cartTotalAfter + ' = totalItemCount ' + totalItemCount)
            //Check item is added to the shopping cart
            expect(parseInt(cartTotalAfter)).to.eq(totalItemCount)
        })
    }) 

    Given('As a user has {string} {string} product/s in the shopping cart', (quantity,keyword) => {
        cy.visit('/')
        header.search(keyword)
        results.productTileHeader.first().click()
        details.pageHeader.should('be.visible')
        details.addTocart(quantity)
        details.goToShoppingCart()
        topNavigation.navigateTo('shoppingCart')
        shoppingCart.pageHeader.should('include.text','Shopping Cart')
        shoppingCart.clickCheckout()
    }) 
    When('I fill in billing details', (datatable) => {
        datatable.hashes().forEach(user => {
            checkout.selectCheckoutOptions(user.isGuest)
            checkout.enterPersonalDetails(user.firstname,user.lastname,user.email,user.phone)
            checkout.enterAddressDetails(user.address1,user.city,user.postcode,user.country,user.region)
        })
    }) 

    And('I select delivery method', () => {
            checkout.enterDeliveryMethod()
    }) 

    And('I fill in payment details' , () => {
            checkout.enterPaymentMethod()
    })
    
    Then('I can complete the checkout', () => {
            checkout.clickConfirmOrder()
            checkout.pageHeader.should('have.text','Your order has been placed!')
    }) 

afterEach(() => {
    cy.screenshot()
})
    