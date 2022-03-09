Feature: Form details

Scenario: Fill out the form
When The user fills a form with the following configurations:

| name | email       | contact   |
|gender | file       | 
|test  | test@gmail.com | 1234567890 | 
| male | Capture.PNG |

Then verify the form details
