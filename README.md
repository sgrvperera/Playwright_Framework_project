# Playwright Automation Framework for OrangeHRM

A professional Playwright automation framework built with TypeScript to demonstrate real-world QA automation skills. This project includes authentication handling, Page Object Model architecture, CRUD automation for employee management, reporting, screenshots, traces, and CI/CD support.

## Project Highlights

- Built using Playwright + TypeScript
- Page Object Model (POM) architecture
- Guest and authenticated test flow separation
- Reusable auth session with `storageState`
- CRUD automation for employee management
- HTML report, screenshots, video, and trace support
- GitHub Actions CI/CD integration
- Dynamic test data generation
- Scalable structure for real-world QA projects

## Tech Stack

- Playwright
- TypeScript
- Node.js
- dotenv
- GitHub Actions

## Framework Architecture

```text
Playwright_Project_03
├── tests/                # Test cases
├── pages/                # Page Object Models
├── utils/                # Helper utilities and data generation
├── .github/              # GitHub Actions workflow
├── playwright.config.ts  # Framework configuration
├── .env                  # Environment variables
├── .gitignore
└── README.md


# Architecture Diagram

[Test File] ---> [Page Object] ---> [Browser Action]
     |                 |
     |                 +--> [Reusable Locators]
     |
     +--> [Test Data / Utils]

[Playwright Config] ---> [Auth Setup Project] ---> [storageState]

Test Strategy

This framework follows a practical automation strategy:

Guest flows are separated from authenticated flows
Login and forgot password tests run with a clean browser state
Dashboard, logout, and PIM tests reuse authenticated session state
Employee records are created with random data to avoid conflicts
Search, update, and delete operations are verified using row-based locators
Failed tests capture screenshots, video, and trace for debugging
Tests are organized by business modules for maintainability
Features Covered
Authentication
Login with valid credentials
Invalid login validation
Empty field validation
Logout flow
Forgot password flow
Dashboard
Dashboard smoke validation
Authenticated session verification
PIM / Employee Management
Add employee
Search employee
Update employee
Delete employee
Setup

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install
Environment Variables

This project uses .env for configuration.

Example:

BASE_URL=https://opensource-demo.orangehrmlive.com
USER_NAME=Admin
PASSWORD=admin123
Run Tests

Run all tests:

npm test

Run headed mode:

npm run test:headed

Run Chromium only:

npm run test:chrome

Open report:

npm run report

Debug mode:

npm run debug
Test Execution Examples

Run a single file:

npx playwright test tests/pim/update-employee.spec.ts --project=chromium --headed

Run with UI mode:

npx playwright test --ui

Run with visible browser:

npx playwright test --headed
Reports and Debugging

This framework captures useful artifacts for debugging and client review:

HTML report
screenshots on failure
videos on failure
trace on failure

Open the HTML report:

npx playwright show-report

Open a trace file:

npx playwright show-trace trace.zip
Screenshots

CI/CD with GitHub Actions

This project includes GitHub Actions workflow support so tests can run automatically on:

push
pull request

The workflow installs dependencies, installs browsers, runs Playwright tests, and uploads reports as artifacts.

Project Flow
Guest Flow
Login page
Invalid login
Empty field validation
Forgot password
Authenticated Flow
Dashboard validation
Logout
Add employee
Search employee
Update employee
Delete employee
Why This Project Matters

This framework was built to simulate a real freelance automation project. It covers a realistic web application with authentication, dashboard validation, CRUD flows, test data management, and CI/CD support.

It is designed to show maintainable automation skills that are useful for client work, interviews, and QA portfolio demonstrations.

How I Can Help as a QA Automation Freelancer

I can build and maintain Playwright automation frameworks for real web applications, including:

UI automation
API automation
test framework setup from scratch
existing framework improvement
flaky test fixing
CI/CD integration
reporting and trace debugging
reusable Page Object Model design
dynamic test data handling

If your project needs a reliable automation engineer who can create maintainable test frameworks, I can help.

Notes

This project is part of a professional Playwright learning and portfolio-building path focused on real-world QA automation delivery.

Author

QA Automation Engineer | Playwright Framework Portfolio Project