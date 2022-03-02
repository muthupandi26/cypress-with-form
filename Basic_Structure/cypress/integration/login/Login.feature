Feature: Login

Scenario: Login
When Login with correct username and password
Then I can see the message

Scenario: InvalidLogin(wrong password)
When Login with wrong password
# Then I can see error message

Scenario: InvalidLogin(wrong username)
When Login with wrong username
# Then I can see error message

Scenario: Checkbox testing
When check the checkbox value

# Scenario: login form
# When Login with correct details

