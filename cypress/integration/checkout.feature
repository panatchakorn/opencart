Feature: Allow user to checkout
        As a user shopping in the demo site
        When I add some products to the shopphing card
        Then I can checkout

    Scenario: Add item to shopping cart
        Given As a user of the "Samsung Galaxy Tab" product details page
        When I add "2" item to the shopping cart
        Then the item is added to the shopping cart
    
    Scenario: Perform guest checkout
        Given As a user has "1" "Samsung SyncMaster" product in the shopping cart
        When I fill in billing details
            | firstname | lastname | email               | phone   | isGuest | address1      | city     | postcode | country     | region   |
            | Silvestre | Wilson   | swilson19@gmail.com | 1234567 | yes     | 34 Tuaraki Rd | Manutuke | 4072     | New Zealand | Gisborne |
        And I select delivery method
        And I fill in payment details
        Then I can complete the checkout
