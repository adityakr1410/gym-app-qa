@regression
Feature: User login

  Background:
    Given Using base URL

    @smoke @regression
    Scenario Outline: Valid user login
      Given User credentials "<email>" and "<password>"
      When User sends a POST request to "/auth/login" with the request payload
      Then Response status code should be 200
      And Response should contain the "<role>" role
      And Response should match the "<response>"schema
      And Store token from response
      And Success message should be "Login successful"

      Examples:
        | email                  | password       | role          | response             |
        | wade_warren@energyx.com| Anish@123      | coach         | CoachLoginResponse   |


  @regression
  Scenario Outline:Invalid login credentials
    Given User credentials "<email>" and "<password>"
    When User sends a POST request to "/auth/login" with the request payload
    Then Response status code should be 401
    And Error message should contain "Incorrect username or password"

    Examples:
      | email                   | password        |
      | adit@sd.com             | asdaA@asf13     |
      | aadityakr1410@gmail.com | Adity@13        |
      | wade_warren@energyx.com | Anish23         |

  @regression
  Scenario Outline:For missing login credentials
    Given User credentials "<email>" and "<password>"
    When User sends a POST request to "/auth/login" with the request payload
    Then Response status code should be 400
    And Error message should contain "<message>"

    Examples:
      | email         | password        | message                         |
      |               | dasdQs@12       | Email and Password are required |
      | asd@asd.com   |                 | Email and Password are required |