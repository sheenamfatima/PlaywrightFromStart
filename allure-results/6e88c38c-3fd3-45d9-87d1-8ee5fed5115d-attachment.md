# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageScenarios.spec.ts >> Login with valid credentials
- Location: tests\LoginPageScenarios.spec.ts:5:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('alert', { name: 'Login Successful! Welcome to Premium Banking.' })
Expected substring: "Login Successful!"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('alert', { name: 'Login Successful! Welcome to Premium Banking.' }) with timeout 5000ms
  - waiting for getByRole('alert', { name: 'Login Successful! Welcome to Premium Banking.' })

```

```yaml
- navigation:
  - link "QA Practice":
    - /url: /
  - link "Practice Sites":
    - /url: /practice-page-selection
  - link "Interview Prep":
    - /url: /interview
  - link "About":
    - /url: /AboutPage
  - link "Contact":
    - /url: /contact
- heading "Master Login Automation" [level=1]
- paragraph: Practice login form automation on a free, interactive demo page — fill fields, submit, and assert success and error states with Selenium, Cypress, or Playwright.
- heading "Login to Your Practice Account" [level=2]
- paragraph: Practice UI Automation for Secure Banking
- alert:
  - heading "Demo Credentials for Login Automation:" [level=6]
  - paragraph:
    - strong: "Email:"
    - text: user@premiumbank.com
  - paragraph:
    - strong: "Password:"
    - text: Bank@123
  - text: Use these credentials to practice automating the login process.
- alert: Login Successful! Welcome to Premium Banking.
- text: Don't have an account?
- link "Register now":
  - /url: /register
- button "Generate Test Cases for Login Page 🔂"
- paragraph: Explore common test scenarios for login functionality to enhance your automation practice.
- link "Back To Practice UI Automation Examples ➡️":
  - /url: /
  - button "Back To Practice UI Automation Examples ➡️"
- heading "How to Automate This Login Page" [level=2]
- paragraph: This login form is a classic first automation exercise. Practice filling inputs, submitting, and asserting the success and error states — all handled entirely in your browser, nothing is sent anywhere.
- button "📝 Working Automation Example"
- button "🎯 Locator Cheat Sheet"
- button "✅ Test Cases & Expected Behaviors"
- contentinfo:
  - navigation "Legal and contact":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - link "About":
          - /url: /AboutPage
      - listitem:
        - link "Contact":
          - /url: /contact
      - listitem:
        - link "Privacy Policy":
          - /url: /privacy-policy
      - listitem:
        - link "Terms of Use":
          - /url: /terms
  - paragraph: © 2026 QA Practice · A free learning platform for QA and automation engineers 🚀
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test";
  2  | import {LoginPage} from "../PageObjects/LoginPage";
  3  | 
  4  | 
  5  | test("Login with valid credentials", async ({page}) => {
  6  | 
  7  |     const loginPage = new LoginPage(page)
  8  | 
  9  |     await page.goto("https://www.qapractice.com/practice-login-form")
  10 |     await loginPage.email.fill("user@premiumbank.com")
  11 |     await loginPage.password.fill("Bank@123")
  12 |     await loginPage.RememberMeCheckbox.check()
  13 |     expect(loginPage.RememberMeCheckbox).toBeChecked()
  14 |     await loginPage.SignInButton.click()
> 15 |     await expect (loginPage.SuccessMessage).toContainText("Login Successful!")
     |                                             ^ Error: expect(locator).toContainText(expected) failed
  16 | })
```