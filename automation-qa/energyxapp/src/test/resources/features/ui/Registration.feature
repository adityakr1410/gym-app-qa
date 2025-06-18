@regression
Feature: US_1_User Profile Registration

  Background:
    Given User is on Registration Page

  @smoke @regression
  Scenario Outline: Valid Registration
    Given User sign up with the following details
      | email   | firstName    | lastName    | password   | confirmPassword    | target   | preferableActivity   |
      | <email> | <first name> | <last name> | <password> | <confirm password> | <target> | <preferred activity> |
    When User clicks on Create An Account Button
    Then Success toast should pop up
    And User redirected to login page

    Examples:
      | first name | last name | email               | password  | confirm password | target      | preferred activity |
      | Akash      | Parida    | akashakp1@gmail.com | Akprm@671 | Akprm@671        | Gain weight | Yoga               |

  @regression
  Scenario Outline: Error message check for email input
    Given User sign up with the following details
      | email   | firstName    | lastName    | password   | confirmPassword    | target   | preferableActivity   |
      | <email> | <first name> | <last name> | <password> | <confirm password> | <target> | <preferred activity> |
    When User clicks on Create An Account Button
    Then User gets error message in "email" field with "Please enter a valid email address"

    Examples:
      | first name | last name | email       | password   | confirm password | target      | preferred activity |
      | John       | Smith     |             | Akash@1234 | Akash@1234       | Gain weight | Yoga               |
      | John       | Smith     |             | Akash@1234 | Akash@1234       | Gain weight | Yoga               |
      | John       | Smith     | johndoe.com | Akash@1234 | Akash@1234       | Gain weight | Yoga               |
      | John       | Smith     | john@doecom | Akash@1234 | Akash@1234       | Gain weight | Yoga               |

  @regression
  Scenario Outline: Error message check for Blank Password
    Given User sign up with the following details
      | email   | firstName    | lastName    | password   | confirmPassword    | target   | preferableActivity   |
      | <email> | <first name> | <last name> | <password> | <confirm password> | <target> | <preferred activity> |
    When User clicks on Create An Account Button
    Then User gets error message in "password" field with "Password is required"

    Examples:
      | first name | last name | email        | password    | confirm password | target      | preferred activity |
      | John       | Smith     | john@doe.com |             |                  | Gain weight | Yoga               |

  @regression
  Scenario Outline: Error message check for Invalid Password
    Given User sign up with the following details
      | email   | firstName    | lastName    | password   | confirmPassword    | target   | preferableActivity   |
      | <email> | <first name> | <last name> | <password> | <confirm password> | <target> | <preferred activity> |
    When User clicks on Create An Account Button
    Then User gets error message in "password" field with "Password must contain at least one special character, uppercase character, lowercase character and one number"

    Examples:
      | first name | last name | email        | password    | confirm password | target      | preferred activity |
      | John       | Smith     | john@doe.com | password@12 | password@12      | Gain weight | Yoga               |
      | John       | Smith     | john@doe.com | lowercase   | lowercase        | Gain weight | Yoga               |


  @regression
  Scenario Outline: Error message check for first name input
    Given User sign up with the following details
      | email   | firstName    | lastName    | password   | confirmPassword    | target   | preferableActivity   |
      | <email> | <first name> | <last name> | <password> | <confirm password> | <target> | <preferred activity> |
    When User clicks on Create An Account Button
    Then User gets error message in "first name" field with "Invalid first name"

    Examples:
      | first name | last name | email                  | password   | confirm password | target      | preferred activity |
      |            | Parida    | akashakp0037@gmail.com | Akash@1234 | Akash@1234       | Gain weight | Yoga               |
      | 123        | Parida    | akashakp0037@gmail.com | Akash@1234 | Akash@1234       | Gain weight | Yoga               |

  @regression
  Scenario Outline: Error message check for last name input
    Given User sign up with the following details
      | email   | firstName    | lastName    | password   | confirmPassword    | target   | preferableActivity   |
      | <email> | <first name> | <last name> | <password> | <confirm password> | <target> | <preferred activity> |
    When User clicks on Create An Account Button
    Then User gets error message in "last name" field with "Invalid last name"

    Examples:
      | first name | last name | email                  | password   | confirm password | target      | preferred activity |
      | John       |           | akashakp0037@gmail.com | Akash@1234 | Akash@1234       | Gain weight | Yoga               |
      | John       | 123       | akashakp0037@gmail.com | Akash@1234 | Akash@1234       | Gain weight | Yoga               |

    @regression
  Scenario Outline: Error message check for unmatched password
    Given User sign up with the following details
      | email   | firstName    | lastName    | password   | confirmPassword    | target   | preferableActivity   |
      | <email> | <first name> | <last name> | <password> | <confirm password> | <target> | <preferred activity> |
    When User clicks on Create An Account Button
    Then User gets error message in "confirm password" field with "Passwords don't match"

    Examples:
      | first name | last name | email        | password     | confirm password  | target      | preferred activity |
      | John       | Smith     | john@doe.com | Password123! | DifferentPass123! | Gain weight | Yoga               |

  @regression
  Scenario: Error in duplicate Registration
    Given User sign up with the following details
      | email          | firstName | lastName | password     | confirmPassword | target      | preferableActivity |
      | john@gmail.com | john      | doe      | Password@123 | Password@123    | Gain weight | Yoga               |
    And User clicks on Create An Account Button
    And User is on Registration Page
    And User sign up with the following details
      | email          | firstName | lastName | password     | confirmPassword | target      | preferableActivity |
      | john@gmail.com | john      | doe      | Password@123 | Password@123    | Gain weight | Yoga               |
    When User clicks on Create An Account Button
    Then User gets duplicate Registration Toast
