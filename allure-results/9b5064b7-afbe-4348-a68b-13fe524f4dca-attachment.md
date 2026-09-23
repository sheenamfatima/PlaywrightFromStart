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
Received string:    ""

Call log:
  - Expect "toContainText" getByRole('alert', { name: 'Login Successful! Welcome to Premium Banking.' }) with timeout 5000ms
  - waiting for getByRole('alert', { name: 'Login Successful! Welcome to Premium Banking.' })
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

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
> 15 |     expect (loginPage.SuccessMessage).toContainText("Login Successful!")
     |                                       ^ Error: expect(locator).toContainText(expected) failed
  16 | })
```