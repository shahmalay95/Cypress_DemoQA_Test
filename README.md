
![Cypress Logo](https://www.cypress.io/_astro/navbar-brand.0d71ff96.svg)
# Cypress DemoQA Test Project

This is a Cypress test automation project for [DemoQA](https://demoqa.com/), a website that provides practice exercises for various automation scenarios. The project demonstrates how to write end-to-end tests using Cypress for web applications.



## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to set up and run the Cypress tests on your local machine.

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/shahmalay95/Cypress_DemoQA_Test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Cypress_DemoQA_Test
   ```
3. Initialize a new Node.js project by running:
   ```bash
   npm init -y
   ```
4. Install Cypress, run the following command in the terminal within your project folder:
   ```bash
   npm install cypress --save-dev
   ```

## Running Tests

To run the Cypress tests, execute the following command:

```bash
npx cypress run --spec cypress/e2e/checkbox.cy.js
```
This will launch the Cypress Test Runner, allowing you to select and run just the Checkbox test file

```bash
npx cypress run --spec cypress/e2e/formSubmit.cy.js
```
This will launch the Cypress Test Runner, allowing you to select and run just the Form Submit test file

```bash
npx cypress run --spec cypress/e2e/handlesAlert.cy.js
```
This will launch the Cypress Test Runner, allowing you to select and run just the Handles Alert test file

```bash
npx cypress run --spec cypress/e2e/handlesWindows.cy.js
```
This will launch the Cypress Test Runner, allowing you to select and run just the Handles Windows test file

```bash
npx cypress run --spec cypress/e2e/radiobutton.cy.js
```
This will launch the Cypress Test Runner, allowing you to select and run just the Radio Button test file


OR


```bash
npx cypress run
```
This will launch the Cypress Test Runner, allowing you to run all tests.

## Test Structure

The project follows a structured approach to organize Cypress tests:

- `cypress/e2e`: Contains test scripts organized by test categories, such as "forms," "alerts," and "widgets."
- `cypress/fixtures`: Stores fixture files containing sample test data.
- `cypress/support`: Contains custom commands and utility functions used in tests.
- `cypress/screenshots`: Contains screenshots of all the tests

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Commit and push your changes to your branch.
5. Submit a pull request back to the original repository.

## License
This project is developed as a part of assessment for BIMM.

---
