Feature: Form details

# Scenario: Login
# When Login with correct username and password
# Then I can see the message

# Scenario: InvalidLogin(wrong password)
# When Login with wrong password
# # Then I can see error message

# Scenario: InvalidLogin(wrong username)
# When Login with wrong username
# # Then I can see error message

# Scenario: Checkbox testing
# When check the checkbox value

Scenario: Test Case-1 Form with values
When Enter name and email
Then Enter Radio & Checkbox values
Then Form result

When Enter name without email
Then Form result 2

When Missing Radio button value
Then Form result 3

When Missing Checkbox value
Then Form result 4


Scenario: Test Case-2 Form without select file
When Missing select file

When uploading file for Image
 
When uploading file for json format


# Scenario: Test Case-3 Email sent Test case
# When Email sent Test case
# Then Email Sent starting