Feature: Allow user to search for product
    As a user of the demo website
    I want to search for product and view full details
    
    Scenario: Search found products
        Given As a user of the website
        When I search for "mac"
        Then I see the results page 
        And the result shows matches product "mac"
    
    Scenario: Search has no match
        Given As a user of the website
        When I search for "enohpi"  
        Then I see the results page           
        And the result shows no match message "There is no product that matches the search criteria."
    
    # Pass product position in the When statement. First product has a position of 0.   
    Scenario: View product details
        Given As a user viewing the search results
        When I select a product "0"
        Then I see full product details