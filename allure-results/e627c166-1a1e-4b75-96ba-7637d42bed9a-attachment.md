# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageScenarios.spec.ts >> Login with invalid credentials
- Location: tests\LoginPageScenarios.spec.ts:18:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('alert').filter({ hasText: 'Login Successful! Welcome to Premium Banking.' })
Expected: "Login Successful! Welcome to Premium Banking."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" getByRole('alert').filter({ hasText: 'Login Successful! Welcome to Premium Banking.' }) with timeout 5000ms
  - waiting for getByRole('alert').filter({ hasText: 'Login Successful! Welcome to Premium Banking.' })

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
- alert: Invalid email id and password
- text: Email Address
- textbox "Enter your email": user1@premiumbank.com
- text: Password
- textbox "Enter your password": Bank@123
- checkbox "Remember me" [checked]
- text: Remember me
- link "Forgot password?":
  - /url: /forget-password
- button "Sign in"
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
  4  | test("Login with valid credentials", async ({page}) => {
  5  | 
  6  |     const loginPage = new LoginPage(page)
  7  | 
  8  |     await page.goto("https://www.qapractice.com/practice-login-form")
  9  |     await loginPage.email.fill("user@premiumbank.com")
  10 |     await loginPage.password.fill("Bank@123")
  11 |     await loginPage.RememberMeCheckbox.check()
  12 |     expect(loginPage.RememberMeCheckbox).toBeChecked()
  13 |     await loginPage.SignInButton.click()
  14 |     await expect (loginPage.SuccessMessage).toHaveText("Login Successful! Welcome to Premium Banking.")
  15 | 
  16 | })
  17 | 
  18 | test("Login with invalid credentials", async ({page}) => {
  19 |   
  20 |     const loginPage = new LoginPage(page)
  21 |     
  22 |     await page.goto("https://www.qapractice.com/practice-login-form")
  23 |     await loginPage.email.fill("user1@premiumbank.com")
  24 |     await loginPage.password.fill("Bank@123")
  25 |     await loginPage.RememberMeCheckbox.check()
  26 |     expect(loginPage.RememberMeCheckbox).toBeChecked()
  27 |     await loginPage.SignInButton.click()
> 28 |     await expect (loginPage.SuccessMessage).toHaveText("Login Successful! Welcome to Premium Banking.")
     |                                             ^ Error: expect(locator).toHaveText(expected) failed
  29 | 
  30 | 
  31 | 
  32 | 
  33 | })
```