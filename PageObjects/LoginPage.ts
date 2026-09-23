import{Locator, Page} from "@playwright/test";

export class LoginPage {
 page: Page
  email: Locator
  password: Locator
  RememberMeCheckbox: Locator
  SignInButton: Locator
  SuccessMessage: Locator
  FailureMessage: Locator

  constructor(page: Page){

    this.page = page
    this.email = page.getByTestId('login-email')
    this.password = page.getByTestId('login-password')
    this.RememberMeCheckbox = page.getByRole('checkbox', {name: 'Remember me'})
    this.SignInButton = page.locator('#login-submit')
    this.SuccessMessage = page.getByRole('alert').filter({hasText: 'Login Successful! Welcome to Premium Banking.'})
    this.FailureMessage = page.getByTestId('login-error')
}


}