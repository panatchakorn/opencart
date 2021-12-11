import * as webUrl from '../support/hostconfig'

class registrationPage{
    elements = {
        pageHeader : "h1",
        firstnameInput : "#input-firstname",
        lastnameInput : "#input-lastname",
        emailInput : "#input-email",
        telephoneInput : "#input-telephone",
        passwordInput : "#input-password",
        passwordConfirmInput : "#input-confirm",
        agreeToPolicyCheckbox : "[name='agree']",
        continueButton : "[value='Continue']",
        alertText : ".alert"
    }
     
    navigateToUrl(){
        const url = webUrl.getBaseUrl()
        cy.visit(url + '/index.php?route=account/register')     
    }

    enterFirstname(firstname){
        cy.get(this.elements.firstnameInput).clear().type(firstname)
    }

    enterLastname(lastname){
        cy.get(this.elements.lastnameInput).clear().type(lastname)
    }
    
    enterEmail(email){
        cy.get(this.elements.emailInput).clear().type(email)
    }

    enterPhone(phone){
        cy.get(this.elements.telephoneInput).clear().type(phone)
    }

    enterPassword(password){
        cy.get(this.elements.passwordInput).clear().type(password)
    }

    enterPasswordConfirm(password){
        cy.get(this.elements.passwordConfirmInput).clear().type(password)        
    }

    clickAgreeToPolicy(){
        cy.get(this.elements.agreeToPolicyCheckbox).click()
    }
    
    clickContinue(){
        cy.get(this.elements.continueButton).click()
    }

    registerUser(firstname,lastname,email, phone, password,passwordConfirm,isAgree){
        this.enterFirstname(firstname)
        this.enterLastname(lastname)
        this.enterEmail(email)
        this.enterPhone(phone)
        this.enterPassword(password)
        this.enterPasswordConfirm(passwordConfirm)
        this.clickAgreeToPolicy(isAgree)
        this.clickContinue()
    }
    
    get pageHeader(){
        return cy.get(this.elements.pageHeader)
    }

    get alertText(){
        return cy.get(this.elements.alertText)
    }

}
export default registrationPage