# Java Automation Testing for Gym Application(EnergyX)

## Overview
This document provides an overview of the QA testing procedures for the Gym Application. It details the testing strategies, environments, tools used, and how to run the tests. This guide is intended for QA engineers, developers, and stakeholders involved in testing the application.

## Requirement Analysis
The Requirement Analysis phase for the Gym Application is a critical step in understanding the needs and expectations of users and stakeholders. This phase outlines the key features, functional requirements, and non-functional requirements that will guide the design and development of the application.

A detailed Requirement Analysis Document is available to provide a deeper understanding of the needs and expectations for the Gym Application. The document includes all the gathered requirements, user stories, and acceptance criteria.

You can access the full Requirement Analysis Document here: [Gym Application Requirement Analysis](https://epam-my.sharepoint.com/:w:/p/akashkumar_parida/EXM1eyg50jlNmBG3PDoFzEIBrTg7suCX_tWicfwFcq-M8Q?e=7MeG3n)

## Test Plan
The Test Plan for the Gym Application outlines the overall testing approach, objectives, scope, and resources required for testing the system. It ensures that all functional and non-functional aspects of the application are thoroughly tested to meet the defined requirements.

A detailed Test Plan Document is available, which provides an in-depth description of the entire testing process for the Gym Application.

You can access the full Test Plan Document here: [Gym Application Test Plan](https://epam-my.sharepoint.com/:w:/p/akashkumar_parida/EcEzdLl_SdxOkkPYUMFJyZgB7NV4tVB1Y1c6uNr9mGzdqA?e=HMEmZl)

## Test Strategy
The Test Strategy for the Gym Application defines the high-level testing approach and key goals that guide the testing process. It aligns with the project’s overall objectives and ensures that testing efforts are focused on the most critical aspects of the application.

A detailed Test Strategy Document is available, which elaborates on the approach, scope, and specific testing techniques for the Gym Application.

You can access the full Test Strategy Document here: [Gym Application Test Strategy](https://epam-my.sharepoint.com/:w:/p/akashkumar_parida/EXCYk7HnjJpCgfnr7dKPgz8BZlWxaHcKjSjuFkuUjhMvDA?e=AbWqzF)

## Folder Structure

```declarative
automation-qa/
├── energyxapp/                     # Main project directory for the energyxapp application
│   ├── src/                         # Source code directory
│   │   ├── main/                    # Main application source code
│   │   │   ├── java/                # Java source files
│   │   │   │   └── com.energyx/     # Base package for the application
│   │   │   │       ├── constant/     # Constants used throughout the application
│   │   │   │       ├── exceptions/   # Custom exception classes
│   │   │   │       ├── models/       # Data models representing application entities
│   │   │   │       ├── pages/        # Page object models for UI interactions
│   │   │   │       └── utils/        # Utility classes and helper functions
│   │   │   └── resources/            # Resource files for the application
│   │   │       └── config.properties  # Configuration properties for the application
│   │   └── test/                     # Test code directory
│   │       ├── java/                 # Java test files
│   │       │   └── com.energyx/      # Base package for test classes
│   │       │       ├── context/       # Context classes for managing test state
│   │       │       ├── hooks/         # Hooks for setting up and tearing down tests
│   │       │       ├── listeners/     # TestNG listeners for reporting and logging
│   │       │       ├── runners/       # Test runners for executing tests
│   │       │       └── stepdefinitions/ # Step definitions for behavior-driven development (BDD)
│   │       └── resources/             # Resource files for tests
│   │           └── features/          # Feature files for BDD tests
│   │               └── testng.xml      # TestNG configuration file for test execution
```

## Running Tests
To ensure that the application is functioning correctly, you can run the tests using Maven. Follow the steps below to run the tests for the Gym Application:

### Prerequisites:
Ensure you have Maven installed on your system. If you don’t have Maven installed, you can follow the [official installation guide](https://maven.apache.org/install.html).

### Running the Tests
Navigate to the project root directory where the pom.xml file is located.

Clean the project and run the tests by executing the following command in your terminal or command prompt:
```declarative
mvn clean test
```
```clean```: This command deletes the ```target/``` directory (where compiled files and previous build artifacts are stored), ensuring that the tests run in a clean environment.

```test```: This command compiles the test classes and executes the test cases defined in the project.

### Running Specific Tests
To run a specific test class, use the following command:
```declarative
mvn -Dtest=ClassNameTest clean test
```
Replace ```ClassNameTest``` with the name of the test class you want to run.

### Additional Information:
If you need to run tests with a specific profile (for example, for different environments), you can use:

```declarative
mvn clean test -P <profile-name>
```
For more detailed test reports, Maven generates a report located in the ```target/reports/``` directory. You can check these reports for additional details on the test execution.
