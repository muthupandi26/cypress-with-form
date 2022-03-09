Feature: Form details

Scenario: Fill out the form
When The user fills a form with the following configurations
    | name | password | 
    | admin  | admin  | 

Then verify the form details
