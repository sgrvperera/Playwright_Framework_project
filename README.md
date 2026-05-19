# Playwright Automation Framework for OrangeHRM

A production-ready Playwright automation framework built with TypeScript, designed to demonstrate enterprise-level QA automation practices. This framework implements authentication state management, Page Object Model architecture, end-to-end CRUD automation, comprehensive reporting, and CI/CD integration for the OrangeHRM web application.

---

## Professional Overview

This framework represents a complete automation solution built for real-world client delivery. It showcases professional test automation engineering practices including session management, modular test design, dynamic data handling, and robust debugging capabilities. The project is structured to be maintainable, scalable, and ready for immediate integration into production workflows.

---

## Project Highlights

- **Modern Stack**: Playwright + TypeScript for type-safe, reliable automation
- **Page Object Model**: Clean separation of test logic and UI interactions
- **Smart Authentication**: Guest and authenticated flows separated with `storageState` session reuse
- **CRUD Automation**: Complete employee lifecycle management (Create, Read, Update, Delete)
- **Rich Reporting**: HTML reports, screenshots, videos, and trace files for debugging
- **CI/CD Ready**: GitHub Actions workflow for automated test execution
- **Dynamic Test Data**: Random data generation to prevent test conflicts
- **Enterprise Architecture**: Scalable structure suitable for large-scale projects

---

## Business Goal

This framework was built to solve real-world automation challenges faced by QA teams:

- **Reduce manual regression testing time** by automating critical user flows
- **Improve test reliability** through proper session management and data isolation
- **Enable faster debugging** with comprehensive failure artifacts
- **Support continuous delivery** with automated CI/CD integration
- **Demonstrate professional automation skills** for client projects and portfolio showcasing

The framework is designed to be client-ready, maintainable by teams, and extensible for additional test coverage.

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| **Playwright** | Cross-browser automation framework |
| **TypeScript** | Type-safe test development |
| **Node.js** | Runtime environment |
| **dotenv** | Environment configuration management |
| **GitHub Actions** | CI/CD automation |

---

## Framework Architecture

```text
Playwright_Project_03/
│
├── .github/
│   └── workflows/           # CI/CD pipeline configuration
│
├── tests/
│   ├── auth/                # Authentication test cases
│   ├── dashboard/           # Dashboard validation tests
│   └── pim/                 # Employee management CRUD tests
│
├── pages/
│   ├── LoginPage.ts         # Login page object
│   ├── DashboardPage.ts     # Dashboard page object
│   └── PIMPage.ts           # PIM module page object
│
├── utils/
│   └── testDataGenerator.ts # Dynamic test data utilities
│
├── playwright.config.ts     # Framework configuration
├── .env                     # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## Architecture Diagram

```text
┌─────────────────────────────────────────────────────────────┐
│                     Test Execution Flow                      │
└─────────────────────────────────────────────────────────────┘

[Test Spec File]
      │
      ├──> [Page Object Model]
      │         │
      │         ├──> [Locators & Selectors]
      │         └──> [Page Actions & Assertions]
      │
      ├──> [Test Data Generator]
      │         └──> [Dynamic Employee Data]
      │
      └──> [Playwright Browser Context]
                │
                ├──> [Guest Flow] ──> Clean Browser State
                └──> [Authenticated Flow] ──> storageState Session


┌─────────────────────────────────────────────────────────────┐
│                  Configuration & Setup                       │
└─────────────────────────────────────────────────────────────┘

[playwright.config.ts]
      │
      ├──> [Auth Setup Project] ──> Generates storageState
      ├──> [Guest Tests] ──> No dependencies
      └──> [Authenticated Tests] ──> Uses storageState

[.env] ──> [Environment Variables] ──> [Test Configuration]
```

---

## Test Strategy

This framework implements a strategic approach to test automation:

### Session Management
- **Guest flows** (login, forgot password) run with a clean browser state to validate authentication
- **Authenticated flows** (dashboard, PIM, logout) reuse session state via `storageState` for faster execution
- Authentication setup runs once per test suite, reducing redundant login operations

### Data Management
- Employee records are created with **randomly generated data** to avoid conflicts
- Each test run uses unique identifiers to ensure test isolation
- Search, update, and delete operations validate against dynamically created records

### Failure Handling
- **Screenshots** captured automatically on test failure
- **Videos** recorded for failed test scenarios
- **Trace files** generated for deep debugging with Playwright Inspector
- **HTML reports** provide comprehensive test execution summaries

### Test Organization
- Tests are organized by **business modules** (auth, dashboard, PIM)
- Each module has dedicated page objects for maintainability
- Reusable utilities centralize common operations

---

## Features Covered

### Authentication
- ✅ Login with valid credentials
- ✅ Invalid login validation (wrong username/password)
- ✅ Empty field validation
- ✅ Logout flow
- ✅ Forgot password flow

### Dashboard
- ✅ Dashboard smoke test validation
- ✅ Authenticated session verification
- ✅ Navigation menu accessibility

### PIM / Employee Management
- ✅ **Create Employee**: Add new employee with random data
- ✅ **Search Employee**: Locate employee by name or ID
- ✅ **Update Employee**: Modify employee details
- ✅ **Delete Employee**: Remove employee record and verify deletion

---

## Folder Structure

```text
Playwright_Project_03/
│
├── .github/workflows/       # GitHub Actions CI/CD workflows
├── tests/                   # Test specifications organized by module
│   ├── auth/                # Authentication tests
│   ├── dashboard/           # Dashboard tests
│   └── pim/                 # Employee CRUD tests
├── pages/                   # Page Object Models
├── utils/                   # Helper utilities and data generators
├── playwright-report/       # Generated HTML reports (gitignored)
├── test-results/            # Test artifacts (gitignored)
├── playwright.config.ts     # Playwright configuration
├── .env                     # Environment variables (gitignored)
├── .gitignore
├── package.json
└── README.md
```

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Playwright_Project_03
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the project root:
   ```env
   BASE_URL=https://opensource-demo.orangehrmlive.com
   USER_NAME=Admin
   PASSWORD=admin123
   ```

---

## Environment Variables

The framework uses environment variables for configuration flexibility:

| Variable | Description | Example |
|----------|-------------|---------|
| `BASE_URL` | Target application URL | `https://opensource-demo.orangehrmlive.com` |
| `USER_NAME` | Admin username for authentication | `Admin` |
| `PASSWORD` | Admin password for authentication | `admin123` |

These variables are loaded via `dotenv` and referenced in the Playwright configuration and page objects.

---

## How to Run Tests

### Run All Tests
```bash
npm test
```

### Run in Headed Mode (Visible Browser)
```bash
npm run test:headed
```

### Run Chromium Only
```bash
npm run test:chrome
```

### Debug Mode
```bash
npm run debug
```

### Open HTML Report
```bash
npm run report
```

### Additional Commands

**Run a specific test file:**
```bash
npx playwright test tests/pim/add-employee.spec.ts
```

**Run with UI mode (interactive):**
```bash
npx playwright test --ui
```

**Run specific project (browser):**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run tests matching a pattern:**
```bash
npx playwright test --grep "login"
```

---

## Reporting and Debugging

This framework provides comprehensive debugging and reporting capabilities:

### HTML Report
- **Automatic generation** after test execution
- **Test results summary** with pass/fail status
- **Execution timeline** and duration metrics
- **Failure details** with error messages

**Open the report:**
```bash
npx playwright show-report
```

### Screenshots
- Captured automatically on test failure
- Stored in `test-results/` directory
- Attached to HTML report for easy access

### Videos
- Recorded for failed tests
- Configurable in `playwright.config.ts`
- Useful for visual debugging of flaky tests

### Trace Files
- Generated on test failure
- Contains full execution timeline, network activity, and DOM snapshots
- **Open trace viewer:**
  ```bash
  npx playwright show-trace test-results/<trace-file>.zip
  ```

All artifacts are automatically attached to the HTML report for streamlined debugging.

---

## CI/CD with GitHub Actions

This project includes a GitHub Actions workflow that automatically runs tests on:

- **Push** to main/master branch
- **Pull requests** targeting main/master

### Workflow Features
- Installs Node.js and dependencies
- Installs Playwright browsers
- Runs all tests across configured browsers
- Uploads HTML report as artifact
- Uploads test results and traces on failure

**View workflow file:** `.github/workflows/playwright.yml`

**Access reports:**
- Navigate to Actions tab in GitHub
- Select the workflow run
- Download artifacts (HTML report, traces)

---

## Screenshots

### Test Execution
![Test Execution](./screenshots/test-execution.png)

### HTML Report
![HTML Report](./screenshots/html-report.png)

### Trace Viewer
![Trace Viewer](./screenshots/trace-viewer.png)

---

## Why This Project Matters

This framework was built to demonstrate **production-ready automation engineering skills** suitable for client delivery and enterprise projects.

### Key Differentiators
- **Real-world application**: Tests a complete web application with authentication and CRUD operations
- **Professional architecture**: Follows industry best practices with POM and modular design
- **Comprehensive coverage**: Includes guest flows, authenticated flows, and data management
- **Debugging support**: Rich artifacts for troubleshooting and client reporting
- **CI/CD integration**: Ready for continuous testing pipelines
- **Portfolio strength**: Showcases skills relevant to freelance and full-time QA roles

This project is designed to demonstrate the level of quality and professionalism expected in client-facing automation work.

---

## How I Can Help as a QA Automation Freelancer

I specialize in building and maintaining robust test automation frameworks for web applications. My services include:

### Automation Services
- ✅ **UI Automation**: End-to-end test automation with Playwright, Selenium, or Cypress
- ✅ **API Automation**: REST API testing with Playwright, Postman, or RestAssured
- ✅ **Framework Development**: Build scalable test frameworks from scratch
- ✅ **Framework Enhancement**: Improve existing frameworks with better architecture and reporting
- ✅ **Flaky Test Resolution**: Debug and stabilize unreliable tests
- ✅ **CI/CD Integration**: Set up automated testing in GitHub Actions, Jenkins, or GitLab CI
- ✅ **Reporting & Debugging**: Implement comprehensive reporting with screenshots, videos, and traces
- ✅ **Page Object Model Design**: Create maintainable, reusable page objects
- ✅ **Test Data Management**: Dynamic data generation and test isolation strategies

### Why Work With Me
- **Client-focused**: Deliver maintainable, well-documented automation solutions
- **Quality-driven**: Write reliable, non-flaky tests that provide real value
- **Communication**: Provide clear status updates and detailed reports
- **Flexibility**: Adapt to your tech stack and project requirements

If your project needs a reliable automation engineer who can deliver production-ready test frameworks, let's connect.

---

## Notes

### Future Enhancements
- Add API testing layer for backend validation
- Implement visual regression testing
- Add performance testing with Playwright
- Expand test coverage to additional OrangeHRM modules
- Integrate with test management tools (TestRail, Xray)
- Add parallel execution optimization
- Implement custom reporters (Slack, email notifications)

### Project Purpose
This project is part of a professional Playwright learning path focused on real-world QA automation delivery. It serves as both a portfolio piece and a template for client projects.

---

## Author

**QA Automation Engineer | Playwright Framework Portfolio Project**

Built with expertise in test automation, framework design, and continuous testing practices.

---

## License

This project is available for portfolio and educational purposes.

---

## Contact

For freelance inquiries or collaboration opportunities, please reach out via:
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

---

**⭐ If you find this project useful, please consider starring the repository!**
