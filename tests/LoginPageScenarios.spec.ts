import{test,expect} from "@playwright/test";
import {LoginPage} from "../PageObjects/LoginPage";

test("Login with valid credentials", async ({page}) => {

    const loginPage = new LoginPage(page)

    await page.goto("https://www.automationexercise.com/")
    await loginPage.SignUpLoginLink.click()
    await loginPage.email.fill("sheenam.fatima.91@gmail.com")
    await loginPage.password.fill("Qazxsw@12345")
    await loginPage.LoginInButton.click()
    await expect(page).toHaveURL('https://www.automationexercise.com/')
    
})

 test("Login with invalid credentials", async ({page}) => {
  
    const loginPage = new LoginPage(page)

    await page.goto("https://www.automationexercise.com/")
    await loginPage.SignUpLoginLink.click()
    await loginPage.email.fill("sheenam.fatima.91@gmail.com")
    await loginPage.password.fill("Qazxsw@123456")
    await loginPage.LoginInButton.click()
    
    await expect(loginPage.FailureMessage).toHaveText("Your email or password is incorrect!")



})