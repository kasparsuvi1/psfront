import { RegistrationConfirmModule } from './registration-confirm.module';

describe('RegistrationConfirmModule', () => {
  let registrationConfirmModule: RegistrationConfirmModule;

  beforeEach(() => {
    registrationConfirmModule = new RegistrationConfirmModule();
  });

  it('should create an instance', () => {
    expect(registrationConfirmModule).toBeTruthy();
  });
});
