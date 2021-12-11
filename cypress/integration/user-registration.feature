Feature: Allow user to register on the site
		As a user of the registration page of the demo website
		When I provide valid unique credentials
		An account is created for me

	Scenario: Navigate to registration
		Given As a user of the website
		When I click to navigate to registration page
		Then I see a header message "Register Account"

	Scenario: Invalid credentials
		Given As a user of the registration page of the demo website
		When I provide an email that has already been used in the system
			| firstname | lastname | email             | phone   | password | confirm | isAgree |
			| Jane      | Johnson  | CUOuNze@gmail.com | 1234567 | 1234     | 1234    | yes     |
		Then I see an appropriate error message "Warning: E-Mail Address is already registered!"
	
	Scenario: Register new user
		Given As a user of the registration page of the demo website
		When I provide a unique email that has not been used in the system
			| firstname | lastname | email      | phone   | password | confirm | isAgree |
			| Jack      | Mew      | @gmail.com | 1234567 | 1234     | 1234    | yes     |
		Then I see a header message "Your Account Has Been Created!"
		

