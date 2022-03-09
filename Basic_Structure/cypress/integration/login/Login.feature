Feature: Form details

Scenario Outline: Fill out the form
When The user fills a form with the following configurations
Then verify the form details

Examples:
    | name | mail | contact |
    | admin  | admin@gmail.com  | 123456  |
