# Playwright + Docker + GitHub Actions

This project demonstrates how to set up Playwright with Docker and GitHub Actions.

## Running Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npx playwright test
   ```

## Running with Docker
1. Build the Docker image:
   ```bash
   docker build -t playwright-tests .
   ```
2. Run the Docker container:
   ```bash
   docker run playwright-tests
   ```

## CI/CD with GitHub Actions
Push your code to GitHub, and the GitHub Actions workflow will automatically build and run your tests.
