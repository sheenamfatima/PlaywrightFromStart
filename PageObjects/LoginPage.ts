import{Locator, Page} from "@playwright/test";

export class LoginPage {
  page: Page
  SignUpLoginLink: Locator
  email: Locator
  password: Locator
  
  LoginInButton: Locator
  FailureMessage: Locator

  constructor(page: Page){

    this.page = page
    this.SignUpLoginLink = page.getByRole('link',{name: ' Signup / Login'})
    this.email = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    this.password = page.getByPlaceholder('Password')
    this.LoginInButton = page.getByRole('button', {name: 'Login'})
    this.FailureMessage = page.getByText('Your email or password is incorrect!')
}


}