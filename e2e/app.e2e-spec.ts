import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('psfront App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page main title message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('MEET STRANGERS');
  });

  it('should display get started button', () => {
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

/*  it('should login to test account', () => {
    page.navigateTo();
    page.getHomeLoginButton().click();

     page.getEmailField().sendKeys('kasutaja@professionalstrangers.com');
     page.getPasswordField().sendKeys('X-66SFKX1TmPLinvf3qHGBKAQN4XxRNg8c3MIqyjLc_bmd723qv121t8qmJbXZRK');

    page.getLoginButton().click();

    browser.debugger();
    expect(page.getDashboardButton()).toEqual('DASHBOARD');
  }); */
});
