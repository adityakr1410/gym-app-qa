@regression
Feature: US_3_Automatic Role Assignment (R8.1)

  Background:
    And User is on Login Page

  @smoke @regression
  Scenario: Client Login
    Given User sign in with the following details
      | email           | password   |
      | akash@gmail.com | Akash@1234 |
    When User clicks on Login Button
    Then User navigates to Dashboard Page
    And Username in dashboard is showing "Client"

  @smoke @regression
  Scenario: Client Login
    Given User sign in with the following details
      | email           | password  |
      | wade_warren@energyx.com | Anish@123 |
    When User clicks on Login Button
    Then User navigates to Dashboard Page
    And Username in dashboard is showing "Coach"