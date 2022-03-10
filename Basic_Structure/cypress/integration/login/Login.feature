Feature: Form details

Scenario: Fill out the form
When The user fills a form with the following configurations
    | name | password | radio | checkbox | file |
    | admin  | admin@gmail.com  | HTML | Car | Capture.PNG |

Then verify the form details
