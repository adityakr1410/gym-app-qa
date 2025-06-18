@regression
Feature: User registration

  Background:
    Given Using base URL

  @smoke @regression
  Scenario: Verify registration with correct details
    Given User registration with correct data
    When User sends a POST request to "auth/signup" with the request payload
    Then Response status code should be 200
    And Response should match the "userProfileResponse"schema

  @regression
  Scenario Outline: Registration with missing fields
    Given User registration with data email "<email>", firstName "<firstName>", lastName "<lastName>", password "<password>", preferableActivity "<preferableActivity>", target "<target>"
    When User sends a POST request to "auth/signup" with the request payload
    Then Response status code should be 400
    And Response should match the "UserRegistrationError"schema

    Examples:
      | email                 | firstName | lastName | password  | preferableActivity | target              |
      |                       | adsdasdas | efsdrgvw | asdASd12@ | Strength training  | Improve flexibility |
      | avbsdsfsd123a@fds.asd |           | efsdrgvw | asdASd12@ | Strength training  | Improve flexibility |
      | avbsdsfsd123a@fds.asd | nbkjkjba  |          | asdASd12@ | Strength training  | Improve flexibility |
      | avbsdsfsd123a@fds.asd | nbkjkjba  | efsdrgvw |           | Strength training  | Improve flexibility |
      | avbsdsfsd123a@fds.asd | nbkjkjba  | efsdrgvw | asdASd12@ |                    | Improve flexibility |
      | avbsdsfsd123a@fds.asd | nbkjkjba  | efsdrgvw | asdASd12@ | Strength training  |                     |

  @regression
  Scenario Outline: Registration with wrong email format
    Given User registration with data email "<email>", firstName "<firstName>", lastName "<lastName>", password "<password>", preferableActivity "<preferableActivity>", target "<target>"
    When User sends a POST request to "auth/signup" with the request payload
    Then Response status code should be 400
    And Response should match the "UserRegistrationError"schema

    Examples:
      | email                  | firstName | lastName | password  | preferableActivity | target              |
      | aqw1256@fdsasd         | adsdasdas | efsdrgvw | asdASd12@ | Strength training  | Improve flexibility |
      | ader321@sd123a@fds.asd | adsdasdas | efsdrgvw | asdASd12@ | Strength training  | Improve flexibility |
      | aqafvd1                | adsdasdas | efsdrgvw | asdASd12@ | Strength training  | Improve flexibility |

  @regression
  Scenario Outline: Registration with wrong first name format
    Given User registration with data email "<email>", firstName <firstName>, lastName "<lastName>", password "<password>", preferableActivity "<preferableActivity>", target "<target>"
    When User sends a POST request to "auth/signup" with the request payload
    Then Response status code should be 400
    And Response should match the "UserRegistrationError"schema

    Examples:
      | email            | firstName   | lastName | password  | preferableActivity | target              |
      | demo273@mail.com | "Durgesh23" | efsdrgvw | asdASd12@ | Strength training  | Improve flexibility |
      | demo733@mail.com | "Durges@b"  | efsdrgvw | asdASd12@ | Strength training  | Improve flexibility |
      | demo753@mail.com | "       "   | efsdrgvw | asdASd12@ | Strength training  | Improve flexibility |

  @regression
  Scenario Outline: Registration with wrong last name format
    Given User registration with data email "<email>", firstName "<firstName>", lastName <lastName>, password "<password>", preferableActivity "<preferableActivity>", target "<target>"
    When User sends a POST request to "auth/signup" with the request payload
    Then Response status code should be 400
    And Response should match the "UserRegistrationError"schema

    Examples:
      | email            | firstName | lastName  | password  | preferableActivity | target              |
      | demo273@mail.com | Durgesh   | "Mehta12" | asdASd12@ | Strength training  | Improve flexibility |
      | demo733@mail.com | Durges    | "Meht@"   | asdASd12@ | Strength training  | Improve flexibility |
      | demo753@mail.com | Durgesh   | "    "    | asdASd12@ | Strength training  | Improve flexibility |

  @regression
  Scenario Outline: Registration with wrong password format
    Given User registration with data email "<email>", firstName "<firstName>", lastName "<lastName>", password "<password>", preferableActivity "<preferableActivity>", target "<target>"
    When User sends a POST request to "auth/signup" with the request payload
    Then Response status code should be 400
    And Response should match the "UserRegistrationError"schema

    Examples:
      | email            | firstName | lastName | password | preferableActivity | target              |
      | demo273@mail.com | Durgesh   | Mehta    | Aa1@wed  | Strength training  | Improve flexibility |
      | demo733@mail.com | Durges    | Mehta    | Aa1wdefc | Strength training  | Improve flexibility |
      | demo753@mail.com | Durgesh   | Mehta    | A@acgdrm | Strength training  | Improve flexibility |
      | demo753@mail.com | Durgesh   | Mehta    | 1a@2fgtx | Strength training  | Improve flexibility |
      | demo753@mail.com | Durgesh   | Mehta    | A@23FEVL | Strength training  | Improve flexibility |

  @regression
  Scenario Outline: Registration with wrong preferable activity format
    Given User registration with data email "<email>", firstName "<firstName>", lastName "<lastName>", password "<password>", preferableActivity <preferableActivity>, target "<target>"
    When User sends a POST request to "auth/signup" with the request payload
    Then Response status code should be 400
    And Response should match the "UserRegistrationError"schema

    Examples:
      | email            | firstName | lastName | password  | preferableActivity  | target              |
      | demo273@mail.com | Durgesh   | Mehta    | Aa1@wed53 | "Cycling"           | Improve flexibility |
      | demo733@mail.com | Durges    | Mehta    | Aa1wde@fc | "      "            | Improve flexibility |

  @regression
  Scenario Outline: Registration with wrong preferable activity format
    Given User registration with data email "<email>", firstName "<firstName>", lastName "<lastName>", password "<password>", preferableActivity "<preferableActivity>", target <target>
    When User sends a POST request to "auth/signup" with the request payload
    Then Response status code should be 400
    And Response should match the "UserRegistrationError"schema

    Examples:
      | email            | firstName | lastName | password  | preferableActivity | target              |
      | demo273@mail.com | Durgesh   | Mehta    | Aa1@wed53 | Strength training  | "Six packs"         |
      | demo733@mail.com | Durges    | Mehta    | Aa1wde@fc | Strength training  | "       "           |