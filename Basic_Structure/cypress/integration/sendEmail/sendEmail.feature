Feature: Send Email checking

Scenario: Send an email
When The user sends an email
| Full_Name | Email | Subject | Message |
| muthu | muthupandi@tftus.com| just_checking | Hey Email |

Then verify if email is received at destination
