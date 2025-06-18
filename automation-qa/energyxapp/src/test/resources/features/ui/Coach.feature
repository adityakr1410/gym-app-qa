@regression
Feature: US_5_View detailed information on Coach

  Background:
    Given User is on the Coaches page

  @smoke @regression
  Scenario: Verify Coach Display
    Then User views the list of coaches
    And each coach card should display the name, bio and Book Workout button

  @regression
  Scenario Outline: Check Navigation from Book Workout Button to Login Page
    When User clicks on the Book Workout button for "<coach_name>" coach
    Then Login modal pops up
    When User clicks on Login Button in Login modal
    Then User redirected to login page

    Examples:
      | coach_name     |
      | Kristin Watson |
      | Wade Warren    |
      | Jacob Jones    |

  @regression
  Scenario Outline: Check cancel button in login modal
    When User clicks on the Book Workout button for "<coach_name>" coach
    Then Login modal pops up
    When User clicks on Cancel Button in Login modal
    Then Modal gets disappear
    And  User remains in Coaches page

    Examples:
      | coach_name     |
      | Kristin Watson |
      | Wade Warren    |
      | Jacob Jones    |

  @smoke @regression
  Scenario Outline: Check Coach Page with logged in state
    When User clicks on the Book Workout button for "<coach_name>" coach
    Then Login modal pops up
    When User clicks on Login Button in Login modal
    And User sign in with the following details
      | email    | password |
      | akashakp@gmail.com | Akprm@671 |
    And User clicks on Login Button
    And User clicks on Coaches in Nav
    And User clicks on the Book Workout button for "<coach_name>" coach
    Then User redirects to coach profile page

    Examples:
      | coach_name     |
      | Kristin Watson |
      | Wade Warren    |
      | Jacob Jones    |

#  TODO: When backend is done
#  Scenario: Validate Coach Ratings
#    When User checks the displayed rating for each coach
#    Then the ratings should match the expected values as per the database or reference data