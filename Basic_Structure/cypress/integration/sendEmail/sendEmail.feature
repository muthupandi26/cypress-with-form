Feature: Send Email checking

Scenario: Send an email
When The user sends an email
Then verify if email is received at destination
