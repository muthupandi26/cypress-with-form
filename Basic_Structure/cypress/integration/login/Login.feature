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

Scenario: Form with values
When Enter name and email
Then Enter Radio & Checkbox values
Then Form result

Scenario: Form without Email Box value
When Enter name without email
Then Form result 2

Scenario: Form without Radio Button values
When Missing Radio button value
Then Form result 3

Scenario: Form without Checkbox values
When Missing Checkbox value
Then Form result 4

Scenario: Upload file for Image
When uploading file for Image

Scenario: Upload file for json 
When uploading file for json format