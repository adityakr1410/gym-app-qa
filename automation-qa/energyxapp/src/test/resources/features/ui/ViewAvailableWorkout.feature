@regression
Feature: US_4_view_available_workout

  Background:
    Given User is on the Home Page

  @smoke @regression
  Scenario Outline: Search for a specific workout
    When User selects sport "<sport>"
    And User selects date "<date>"
    And User selects time "<time>"
    And User selects coach "<coach>"
    And User clicks Find Workout button
    Then Available workouts should have sport "<sport>"
    And Available workouts should have date "<date>"
    And Available workouts should have time "<time>"
    And Available workouts should have coach "<coach>"
    Examples:
      | sport       | date          | time     | coach            |
      | Yoga        | 30 April 2025 | 8:00 AM  | Kristin Watson   |

  @regression
  Scenario Outline: Filter check for a specific sport
    When User selects sport "<sport>"
    Then User clicks Find Workout button
    And Available workouts should have sport "<sport>"
    Examples:
      | sport   |
      | Yoga    |
      | Pilates |

  @regression
  Scenario Outline: Filter check for a specific date
    When User selects date "<date>"
    Then User clicks Find Workout button
    And Available workouts should have date "<date>"
    Examples:
      | date          |
      | 9 July 2025   |
      | 10 July 2025  |

  @regression
  Scenario Outline: Filter check for a specific time
    When User selects time "<time>"
    Then User clicks Find Workout button
    And Available workouts should have time "<time>"
    Examples:
      | time    |
      | 9:00 AM |
      | 10:00 AM|

  @regression
  Scenario Outline: Filter check for specific coach
    When User selects coach "<coach>"
    Then User clicks Find Workout button
    And Available workouts should have coach "<coach>"
    Examples:
      | coach           |
      | Kristin Watson  |

  @regression
  Scenario Outline: Verify no workouts for non available workout search
  Verify it gives "No workouts available" when no slots are available

    When User selects coach "<coach>"
    And User selects time "<time>"
    Then User clicks Find Workout button
    And It should show message No workouts available
    Examples:
      | coach           | time    |
      | Kristin Watson  | 2:00 PM |