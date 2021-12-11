class checkoutPage {
    elements = {
        pageHeader : "h1",        
        guestCheckoutButton : "[value='guest']",
        checkoutContinutButton : "[id='button-account']",
        firstnameInput : "#input-payment-firstname",
        lastnameInput : "#input-payment-lastname",
        emailInput : "#input-payment-email",
        phoneInput : "#input-payment-telephone",
        address1Input : "#input-payment-address-1",
        cityInput : "#input-payment-city",
        postcodeInput : "#input-payment-postcode",
        countryOption : "#input-payment-country",
        regionOption : "#input-payment-zone",
        sameDeliveryBillingCheckbox : "[name='shipping_address']",
        billingContinueButton : "[id=button-guest]",
        deliveryMethodContinueButton : "[id='button-shipping-method']",
        agreeButton : "[name='agree']",
        paymentMethodContinueButton : "[id='button-payment-method']",
        confirmOrderButton : "[id='button-confirm']"
    }
    
    //Step 1: Checkout option
    selectCheckoutOptions(isGuest){
        //default to Register Account Option
        if(isGuest == 'yes'){
            cy.get(this.elements.guestCheckoutButton).click()
        }        
        cy.get(this.elements.checkoutContinutButton).click()
    }
    //Step 2: Billing Details
    enterPersonalDetails(fname,lname,email,phone){
        cy.get(this.elements.firstnameInput).should('be.visible').clear().type(fname)
        cy.get(this.elements.lastnameInput).clear().type(lname)
        cy.get(this.elements.emailInput).clear().type(email)
        cy.get(this.elements.phoneInput).clear().type(phone)
    }
    enterAddressDetails(address1,city,postcode,country,region,isSameDeliveryBilling){
        cy.get(this.elements.address1Input).clear().type(address1)
        cy.get(this.elements.cityInput).clear().type(city)
        cy.get(this.elements.postcodeInput).clear().type(postcode)
        cy.get(this.elements.countryOption).select(country)
        cy.get(this.elements.regionOption).select(region)
        cy.get(this.elements.sameDeliveryBillingCheckbox).invoke('attr','checked').then(($status) => {
            // only check the box same delivery and billing address if it's not in correct state
            if(($status == 'unchecked' && isSameDeliveryBilling == 'yes') ||
                ($status == 'checked' && isSameDeliveryBilling == 'no')){
                cy.get(this.elements.sameDeliveryBillingCheckbox).click()
            }            
        })
        cy.get(this.elements.billingContinueButton).click()
    }
    //Step 3: Delivery Details

    //Step 4: Delivery Method
    enterDeliveryMethod(){
        // default to flat shipping
        cy.get(this.elements.deliveryMethodContinueButton).click()        
    }
    //Step 5: Payment Method
    enterPaymentMethod(){
        //default to Cash On Delivery
        cy.get(this.elements.agreeButton).click()        
        cy.get(this.elements.paymentMethodContinueButton).click()        
    }
    //Step 6: Confirm Order
    clickConfirmOrder(){
        cy.get(this.elements.confirmOrderButton).click()
    }

    get pageHeader(){
        return cy.get(this.elements.pageHeader)
    }
}
export default checkoutPage