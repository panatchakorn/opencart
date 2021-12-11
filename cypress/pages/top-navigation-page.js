class topNavigationPage{
    elements = {
        contactList : "ul.list-inline > :nth-child(1) > a",
        myAccountList : "ul.list-inline > * .dropdown-toggle",
        registerOption : "ul.list-inline > * .dropdown-menu > :nth-child(1) > a",
        LoginOption : "ul.list-inline > * .dropdown-menu > :nth-child(1) > a",
        shoppingCartList : "ul.list-inline > :nth-child(4) > a",
        checkoutList : "ul.list-inline > :nth-child(5) > a"
    }
    
    navigateTo(page){
        
        switch(page){
            case 'contact':
                {
                    cy.get(thiselements.contactList).click()
                    return
                }
            case 'registration':
                {
                    cy.get(this.elements.myAccountList).click()
                    cy.get(this.elements.registerOption).click()
                    return
                }
            case 'login':
                {
                    cy.get(this.elements.myAccountList).click()
                    cy.get(this.elements.LoginOption).click()
                    return
                }
            case 'shoppingCart':
                {
                    cy.get(this.elements.shoppingCartList).click()
                    return
                }
            case 'checkout':
                {
                    cy.get(this.elements.shoppingCartList).click()
                    return
                }
        }
    }


}

export default topNavigationPage