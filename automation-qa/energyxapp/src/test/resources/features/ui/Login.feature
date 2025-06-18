@regression
Feature: US_2_User Login

  Background:
    Given User is on Registration Page
    And User sign up with the following details
      | firstName | lastName | email           | password   | confirmPassword | target      | preferableActivity |
      | Akash     | Parida   | akash@gmail.com | Akash@1234 | Akash@1234      | Gain weight | Yoga               |
    And User clicks on Create An Account Button
    And User is on Login Page

  @smoke @regression
  Scenario: Valid Login
    Given User sign in with the following details
      | email    | password |
      | akash@gmail.com | Akash@1234 |
    When User clicks on Login Button
    Then User navigates to Dashboard Page

  @regression
  Scenario: Error message check for blank email input
    Given User sign in with the following details
      | email | password |
      |       |          |
    When User clicks on Login Button
    Then User gets error message in Login Page with "Please enter both email and password."
    And "Login Failed" toast pops up with message "Please enter both email and password."

  @regression
  Scenario Outline: Invalid email
    Given User sign in with the following details
      | email   | password   |
      | <email> | <password> |
    When User clicks on Login Button
    Then "Login Failed" toast pops up with message "User does not exist."

    Examples:
      | email           | password   |
      | a@gamil.com     | Akash@1234 |
      | aksjflkj@gkfd.com | Alksdfjs12 |

  @regression
  Scenario Outline: Invalid password
    Given User sign in with the following details
      | email   | password   |
      | <email> | <password> |
    When User clicks on Login Button
    Then "Login Failed" toast pops up with message "Incorrect username or password."

    Examples:
      | email           | password  |
      | akash@gmail.com | aksdjfklj |
      | akash@gmail.com | aisfd232  |