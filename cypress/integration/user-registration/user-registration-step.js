import { Given , When, Then } from "cypress-cucumber-preprocessor/steps"
import registrationPage from '../../pages/registration-page'
import topNavigationPage from '../../pages/top-navigation-page'
import * as tool from '../../support/utilities'

const registerPage = new registrationPage()
const topNavigation = new topNavigationPage()

Given('As a user of the registration page of the demo website', () => {
    registerPage.navigateToUrl()
})

When('I provide an email that has already been used in the system', (datatable) => {
    datatable.hashes().forEach(user => {
        registerPage.registerUser(user.firstname,user.lastname,user.email,user.phone,user.password,user.confirm,user.isAgree)
    })
})
Then('I see an appropriate error message {string}', (message) => {
    cy.get('.alert').should('include.text',message)
    //cy.get('.alert').should('include.text','Warning: E-Mail Address is already registered!')
    //cy.screenshot()
})
        
When('I provide a unique email that has not been used in the system',(datatable) => {    
    datatable.hashes().forEach(user => {
        let username = user.firstname + tool.generateString(7) //generate random username with 7 characters
        let email = username + user.email        
        cy.log('unique email is ' + email)
        //registerPage.registerUser(username,'TestLastname',email,'1234567','1234','1234','yes')
        registerPage.registerUser(username,user.lastname,email,user.phone,user.password,user.confirm,user.isAgree)
    })
})

Then('I see a header message {string}', (message) => {
    registerPage.pageHeader.should('have.text',message)
})

Given('As a user of the website',() => {
    cy.visit('/')
})

When('I click to navigate to registration page',() => {
    topNavigation.navigateTo('registration')
}) 

Then('I see a header message {string}}',(message) => {
    cy.get(url).contains('account/register')
    registerPage.pageHeader.should('have.text',message)
}) 

afterEach(() => {
    cy.screenshot()
})
