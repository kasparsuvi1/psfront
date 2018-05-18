import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('psfront App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page main title message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('MEET STRANGERS');
  });

  it('should display get starter button', () => {
    page.navigateTo();
    expect(page.getStartedButton().getText()).toEqual('GET STARTED');
  });

  it('should route to registration page via get started button', () => {
    page.navigateTo();
    page.getStartedButton().click();
    expect(page.getRegisterText()).toEqual('Register');
  });

  it('should display login button on home page', () => {
    page.navigateTo();
    expect(page.getHomeLoginButton().getText()).toEqual('Login');
  });

  it('should route to login page via home page login button', () => {
    page.navigateTo();
    page.getHomeLoginButton().click();
    expect(page.getLoginText()).toEqual('Login');
  });

  it('should login to test account', () => {
    page.navigateTo();
    page.getHomeLoginButton().click();

    // page.getEmailField().sendKeys('standard@user.com');
    // page.getPasswordField().sendKeys('uxt1sRmdmb0LJ34S7pFkeuNcbcSkFqybJEE_tOgbFf5YWJlsm5gw0H0pkeHExO5L');

    page.getLoginButton().click();

    browser.debugger();
    expect(page.getDashboardButton()).toEqual('DASHBOARD');

  });
});
