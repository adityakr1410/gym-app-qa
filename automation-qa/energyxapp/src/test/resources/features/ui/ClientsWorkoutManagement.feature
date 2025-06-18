@regression
Feature: US_6_Client's Workout management

    @regression
    Scenario: Check login popup when user not logged in and clicked on Book Workout

      Given User is on the Home Page
      When User clicks Find Workout button
      And User clicks Book Workout button
      Then Login popup should appear

    @smoke @regression
    Scenario: Check successful workout booking from client dashboard

      Given User is on Login Page
      And User sign in with the following details
        | email           | password    |
        | adityakr1410@gmail.com | Adity@123  |
      When User clicks on Login Button
      And User clicks on Home navbar button
      And User clicks Find Workout button
      And User clicks Book Workout button
      Then Confirm your booking pops up
      When User clicks confirm button on confirm pop up
      Then Workout booking success message should appear

    @smoke @regression
    Scenario Outline: Check successful workout booking from coach card
      Given User is on Login Page
      And User sign in with the following details
        |email                  | password          |
        |adityakr1410@gmail.com | Adity@123        |
      When User clicks on Login Button
      And User clicks on Coaches navbar button
      And User chooses coach "<coach>" Book Workout button
      And User selects date on coach page "<date>"
      And User selects time on coach page "<time>"
      And User clicks coach page Book workout button
      Then Coach page confirm booking pops up with "<date>", "<time>" and "<coach>"
      And User clicks confirm on coach page
      And Booking confirmed pops up

      Examples:
        | coach         | date          | time                |
        | Kristin Watson| 9 July 2025   | 10:00 - 11:00 AM    |
#        | Kristin Watson| 3 July 2025   | 2:00 - 3:00 PM      |
#        | Kristin Watson| 3 July 2025   | 12:00 - 1:00 PM     |

    @regression
    Scenario Outline: Check whether booked workout is accessible through client dashboard
      Given User is on Login Page
      And User sign in with the following details
        | email                  | password           |
        | adityakr1410@gmail.com     | Adity@123       |
      When User clicks on Login Button
      And User clicks on Coaches navbar button
      And User chooses coach "<coach>" Book Workout button
      And User selects date on coach page "<date>"
      And User selects time on coach page "<time>"
      And User clicks coach page Book workout button
      Then Coach page confirm booking pops up with "<date>", "<time>" and "<coach>"
      And User clicks confirm on coach page
      And Booking confirmed pops up
      Then Workout page should have card with "<date>" and "<time>"

      Examples:
        | coach         | date          | time                |
        | Kristin Watson| 9 July 2025   | 10:00 - 11:00 AM    |
        | Kristin Watson| 3 July 2025   | 12:00 - 1:00 PM     |
        | Jenny Wilson  | 3 July 2025   | 1:00 - 2:00 PM      |