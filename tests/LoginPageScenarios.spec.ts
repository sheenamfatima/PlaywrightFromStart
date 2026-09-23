import{test,expect} from "@playwright/test";
import {LoginPage} from "../PageObjects/LoginPage";

test("Login with valid credentials", async ({page}) => {

    const loginPage = new LoginPage(page)

    await page.goto("https://www.qapractice.com/practice-login-form")
    await loginPage.email.fill("user@premiumbank.com")
    await loginPage.password.fill("Bank@123")
    await loginPage.RememberMeCheckbox.check()
    expect(loginPage.RememberMeCheckbox).toBeChecked()
    await loginPage.SignInButton.click()
    await expect (loginPage.SuccessMessage).toHaveText("Login Successful! Welcome to Premium Banking.")

})

test("Login with invalid credentials", async ({page}) => {
  
    const loginPage = new LoginPage(page)
    
    await page.goto("https://www.qapractice.com/practice-login-form")
    await loginPage.email.fill("user1@premiumbank.com")
    await loginPage.password.fill("Bank@123")
    await loginPage.RememberMeCheckbox.check()
    expect(loginPage.RememberMeCheckbox).toBeChecked()
    await loginPage.SignInButton.click()
    await expect (loginPage.FailureMessage).toHaveText("Invalid email id and password")




})