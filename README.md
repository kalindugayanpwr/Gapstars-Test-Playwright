# Playwright Automation Tests

This project contains automated UI tests written using **Playwright with TypeScript**.
The tests cover several UI functionalities such as checkboxes, dropdowns, drag-and-drop, file upload, and horizontal slider interactions.

## Project Structure

```
GAPTEST
│
├── pages
│   ├── basepage.ts
│   └── internetPage.ts
│
├── tests
│   └── test.spec.ts
│
├── testdata
│   └── Gapstars.png
│
├── playwright.config.ts
├── package.json
└── README.md
```

## Prerequisites

Make sure the following are installed on your system:

* Node.js (v18 or later recommended)
* npm

You can verify installation with:

```
node -v
npm -v
```

## Install Dependencies

Run the following command in the project root:

```
npm install
```

This will install Playwright and all required dependencies.

## Install Playwright Browsers

Run:

```
npx playwright install
```

This downloads the required browsers for test execution.

## Run the Tests

To run all tests:

```
npx playwright test
```

## Run Tests in UI Mode (Optional)

```
npx playwright test --ui
```

## View Test Report

After test execution, open the HTML report using:

```
npx playwright show-report
```

## Test Scenarios Covered

* Verify checkbox functionality
* Verify dropdown selection functionality
* Verify drag and drop functionality
* Verify file upload functionality
* Verify horizontal slider functionality
