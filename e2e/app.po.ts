import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-home h1')).getText();
  }

  getStartedButton() {
    return element(by.css('[routerlink="/register"]'));
  }

  getRegisterText() {
    return element(by.css('app-register h1')).getText();
  }

  getHomeLoginButton() {
    return element(by.css('[routerlink="/login"]'));
  }

  getLoginText() {
    return element(by.css('.mat-button-wrapper')).getText();
  }

  getDashboardButton() {
    return element(by.cssContainingText('button', 'DASHBOARD')).getText();
  }

  getEmailField() {
    return element(by.css('[formcontrolname="email"]'));
  }

  getPasswordField() {
    return element(by.css('[formcontrolname="password"]'));
  }

  getLoginButton() {
    return element(by.css('.mat-button-wrapper'));
  }
}
