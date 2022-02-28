Feature: Visit

Scenario: Visit
When Visit locally created form
Then I login that site

Scenario: InvalidLogin(without password)
When Login with empty password
# Then I should see error message